import { parse } from "@oigroup/babylon-lightscript";
import { defaultImports, lodashImports } from "./stdlib";

import { setTypes } from "@oigroup/lightscript-ast-transforms/lib/babelInstance";
import is from "@oigroup/lightscript-ast-transforms/lib/is";

import {
  addImplicitReturns, replaceWithPlainFunction, replaceWithArrowFunction,
  replaceWithBoundFunction, isNamedArrowFunction
} from "@oigroup/lightscript-ast-transforms/lib/functions";
import {
  blockToExpression, toBlockStatement
} from "@oigroup/lightscript-ast-transforms/lib/blocks";
import { getShadowingIdentifiers } from "@oigroup/lightscript-ast-transforms/lib/variables";
import {
  ensureConstructor, bindMethodsInConstructor
} from "@oigroup/lightscript-ast-transforms/lib/classes";
import {
  transformMatchExpression, transformMatchStatement
} from "@oigroup/lightscript-ast-transforms/lib/match";
import { replaceWithSafeCall } from "@oigroup/lightscript-ast-transforms/lib/safeCall";
import {
  transformArrayComprehension, transformObjectComprehension
} from "@oigroup/lightscript-ast-transforms/lib/comprehension";
import { transformExistentialExpression } from "@oigroup/lightscript-ast-transforms/lib/existential";
import {
  getInlinedOperatorsEnabled,
  replaceWithInlinedOperator
} from "@oigroup/lightscript-ast-transforms/lib/inlinedOperators";
import {
  transformForInArrayStatement,
  transformForInObjectStatement
} from "@oigroup/lightscript-ast-transforms/lib/for";

export default function (babel) {
  const { types: t } = babel;
  setTypes(t);

  // HELPER FUNCTIONS
  function bindMethods(path, methodIds) {
    let assignId, inExpression = false;
    if (path.isClassDeclaration()) {
      assignId = path.node.id;
    } else if (
      path.parentPath.isAssignmentExpression() &&
      path.parentPath.parentPath.isExpressionStatement()
    ) {
      assignId = path.parentPath.node.left;
    } else if (path.parentPath.isVariableDeclarator()) {
      assignId = path.parentPath.node.id;
    } else {
      let id = path.isClass() ? "class" : "obj";
      assignId = path.getStatementParent().scope.generateDeclaredUidIdentifier(id);
      inExpression = true;
    }
    t.assertOneOf(assignId, ["Identifier", "MemberExpression"]);

    let assignments = methodIds.map((methodId) => {
      // could be computed, eg `['blah']() => {}`
      t.assertOneOf(methodId, ["Identifier", "Expression"]);
      let isComputed = !t.isIdentifier(methodId);
      let objDotMethod = t.memberExpression(assignId, methodId, isComputed);
      let bind = t.callExpression(
        t.memberExpression(objDotMethod, t.identifier("bind")),
        [assignId]
      );
      return t.assignmentExpression("=", objDotMethod, bind);
    });

    if (inExpression) {
      path.replaceWith(t.sequenceExpression([
        t.assignmentExpression("=", assignId, path.node),
        ...assignments,
        assignId
      ]));
    } else {
      path.getStatementParent().insertAfter(
        assignments.map((a) => t.expressionStatement(a))
      );
    }
  }

  function shouldParseAsLightScript(file) {
    if (!file || !file.opts || !file.opts.filename) return true;
    const { filename } = file.opts;
    // HACK: for lightscript-eslint, and possibly others
    if (filename === "unknown") return true;
    // for babel-node repl
    if (filename === "repl") return true;

    // TODO: consider "peeking" at the first line for a shebang or 'use lightscript' directive.
    return (
      // HACK: allow parsing .js test files in this repo.
      // TODO: modify `babel-helper-plugin-test-runner` or something instead
      filename.includes("test/fixtures") ||
      filename.includes(".lsc") ||
      filename.includes(".lsx")
    );
  }

  // eg; 'react', 'lodash/fp', './actions'
  type ImportPath = string;

  // eg; "React", "PropTypes"
  type Specifier = string;

  type Imports = {
    [key: ImportPath]: Array<Specifier>,
  };

  type Stdlib = false | {
    [key: Specifier]: ImportPath,
  };

  function initializeStdlib(opts): Stdlib {
    if (opts.stdlib === false) return false;

    if (typeof opts.stdlib === "object") {
      return Object.assign({},
        opts.stdlib.lodash === false ? {} : lodashImports,
      );
    }

    return defaultImports;
  }

  function collectStdlibImport(stdlib: Stdlib, imports: Imports, specifier: Specifier) {
    if (!stdlib) return;

    const importPath = stdlib[specifier];

    if (!imports[importPath]) {
      imports[importPath] = [];
    }

    if (imports[importPath].indexOf(specifier) < 0) {
      imports[importPath].push(specifier);
    }
  }

  function insertStdlibImports(path, imports: Imports, useRequire) {
    const declarations = [];
    for (const importPath in imports) {
      const specifierNames = imports[importPath];
      const specifiers = [];

      if (useRequire) {
        // eg; `const { map, uniq } = require('lodash');`
        for (const specifierName of specifierNames) {
          const importIdentifier = t.identifier(specifierName);
          specifiers.push(t.objectProperty(importIdentifier, importIdentifier, false, true));
        }
        const requirePattern = t.objectPattern(specifiers);
        const requireCall = t.callExpression(t.identifier("require"), [
          t.stringLiteral(importPath)
        ]);
        const requireStmt = t.variableDeclaration("const", [
          t.variableDeclarator(requirePattern, requireCall),
        ]);
        declarations.push(requireStmt);
      } else {
        // eg; `import { map, uniq } from 'lodash';`
        for (const specifierName of specifierNames) {
          const importIdentifier = t.identifier(specifierName);
          specifiers.push(t.importSpecifier(importIdentifier, importIdentifier));
        }
        const importDeclaration = t.importDeclaration(specifiers, t.stringLiteral(importPath));
        declarations.push(importDeclaration);
      }
    }
    path.unshiftContainer("body", declarations);
  }

  // traverse as top-level item so as to run before other babel plugins
  // (and avoid traversing any of their output)
  function Program(path, state) {
    if (!shouldParseAsLightScript(state.file)) return;

    const stdlib: Stdlib = initializeStdlib(state.opts);
    const inlinedOperatorsEnabled = getInlinedOperatorsEnabled(state.opts);
    const useRequire = state.opts.stdlib && state.opts.stdlib.require === true;
    const imports: Imports = {};

    path.traverse({

      ForInArrayStatement(path) {
        transformForInArrayStatement(path);
      },

      ForInObjectStatement(path) {
        transformForInObjectStatement(path);
      },

      ArrayComprehension(path) {
        transformArrayComprehension(path);
      },

      ObjectComprehension(path) {
        transformObjectComprehension(path);
      },

      TildeCallExpression: {
        // run on exit instead of enter so that SafeMemberExpression
        // can process differently from a wrapping CallExpression
        // eg; `a?.b~c()` -> `a == null ? null : c(a.b)`
        exit(path) {
          const args = [ path.node.left, ...path.node.arguments ];
          const callExpr = t.callExpression(path.node.right, args);

          if (inlinedOperatorsEnabled && replaceWithInlinedOperator(path, path.node.right, args)) return;
          if (path.node.safe) {
            replaceWithSafeCall(path, callExpr);
          } else {
            path.replaceWith(callExpr);
          }
        },
      },

      CallExpression: {
        exit(path) {
          if (
            inlinedOperatorsEnabled &&
            replaceWithInlinedOperator(path, path.node.callee, path.node.arguments)
          ) return;
          if (path.node.safe) {
            replaceWithSafeCall(path, path.node);
          }
        }
      },

      NamedArrowFunction(path) {
        if (path.node.skinny) {
          replaceWithPlainFunction(path);
        } else if (path.node.generator) {
          // there are no arrow-generators in ES6, so can't compile to arrow
          replaceWithBoundFunction(path);
        } else {
          replaceWithArrowFunction(path);
        }
      },

      NamedArrowMemberExpression(path) {
        let object = path.node.object;
        let node = path.node;
        delete node.object;
        node.type = "NamedArrowExpression";

        if (!node.skinny) {
          node.skinny = true;  // binding here, don't turn into arrow
          node = t.callExpression(
            t.memberExpression(node, t.identifier("bind")),
            [object]
          );
        }

        path.replaceWith(t.assignmentExpression("=",
          t.memberExpression(object, path.node.id),
          node,
        ));
      },

      ArrowFunctionExpression(path) {
        if (path.node.skinny) {
          replaceWithPlainFunction(path);
        } else if (path.node.generator) {
          replaceWithBoundFunction(path);
        }
      },

      Method(path) {
        if (isNamedArrowFunction(path.node)) {
          path.node.body = toBlockStatement(path.node.body);
        }
      },

      ClassBody(path) {
        let fatArrows = [], fatStaticArrows = [], constructorPath;
        path.node.body.forEach((method, i) => {
          if (!t.isMethod(method)) return;

          if (method.kind === "constructor") {
            constructorPath = path.get(`body.${i}.body`);
          } else if (method.static && method.skinny === false) {
            fatStaticArrows.push(method.key);
            method.skinny = true; // prevent infinite recursion
          } else if (method.skinny === false) {
            fatArrows.push(method.key);
            method.skinny = true; // prevent infinite recursion
          }
        });

        let maybeAddSuper = path.parentPath.node.superClass && constructorPath;
        if (fatArrows.length || maybeAddSuper) {
          constructorPath = ensureConstructor(path.parentPath, constructorPath, true);
        }

        if (fatArrows.length) {
          bindMethodsInConstructor(path.parentPath, constructorPath, fatArrows);
        }

        if (fatStaticArrows.length) {
          bindMethods(path.parentPath, fatStaticArrows);
        }
      },

      ObjectExpression(path) {
        let fatArrows = [];
        path.node.properties.forEach((prop) => {
          if (t.isMethod(prop) && prop.skinny === false) {
            fatArrows.push(prop.key);
            // bit ugly, but need a way to ensure we don't double-recurse...
            prop.skinny = true;
          }
        });

        if (fatArrows.length) {
          bindMethods(path, fatArrows);
        }
      },

      Function: {
        exit(path) {
          addImplicitReturns(path);

          // As this is an exit visitor, other LSC transforms have reduced
          // arrows to plain FunctionDeclarations by this point.
          if (path.node.type === "FunctionDeclaration") {
            // somehow this wasn't being done... may signal deeper issues...
            path.getFunctionParent().scope.registerDeclaration(path);
          }
        }
      },

      IfExpression(path) {
        const consequent = blockToExpression(path.get("consequent"));

        let alternate;
        if (path.node.alternate) {
          alternate = blockToExpression(path.get("alternate"));
        } else {
          alternate = t.nullLiteral();
        }

        path.replaceWith(t.conditionalExpression(path.node.test, consequent, alternate));
      },

      AssignmentExpression(path) {
        if (path.node.operator === "<-" || path.node.operator === "<!-") {
          path.node.operator = "=";
        }

        // TODO: consider enforcing `now` for MemberExpression too
        if (is("MemberExpression", path.node.left)) return;

        if (path.node.isNowAssign === false) {
          throw path.buildCodeFrameError(
            "Incorrect assignment: to reassign, use `now`; to assign as `const`, put on its own line."
          );
        }
      },

      SafeAwaitExpression(path) {
        const errId = path.scope.generateUidIdentifier("err");

        const tryCatch = t.tryStatement(
          t.blockStatement([
            t.returnStatement(t.awaitExpression(path.node.argument))
          ]),
          t.catchClause(errId, t.blockStatement([
            t.returnStatement(errId)
          ])),
        );
        const fn = t.arrowFunctionExpression([], t.blockStatement([tryCatch]), true);
        // TODO: returntype annotation
        const iife = t.callExpression(fn, []);
        const awaitExpr = t.awaitExpression(iife);
        path.replaceWith(awaitExpr);
      },

      SafeMemberExpression(path) {
        // x?.y -> x == null ? x : x.y
        // x?[y] -> x == null ? x : x[y]
        const { node } = path;
        const { object } = node;

        let left;
        if (object.type === "Identifier" || object.type === "SafeMemberExpression") {
          left = object;
        } else {
          const ref = path.scope.generateDeclaredUidIdentifier("ref");
          node.object = ref;
          left = t.assignmentExpression("=", ref, object);
        }

        const nullCheck = t.binaryExpression("==", left, t.nullLiteral());
        node.type = "MemberExpression";
        path.replaceWith(node);

        // Gather trailing subscripts/calls, which are parent nodes:
        // eg; in `o?.x.y()`, group trailing `.x.y()` into the ternary
        let tail = path;
        while (tail.parentPath) {
          const parent = tail.parentPath;
          const hasChainedParent = (
            parent.isMemberExpression() ||
            (parent.isCallExpression() && parent.get("callee") === tail) ||
            (parent.node.type === "TildeCallExpression" && parent.get("left") === tail)
          );

          if (hasChainedParent) {
            tail = tail.parentPath;
          } else {
            break;
          }
        }

        const ternary = t.conditionalExpression(nullCheck, t.nullLiteral(), tail.node);
        tail.replaceWith(ternary);
      },

      AwaitExpression(path) {
        if (path.get("argument").isArrayExpression() || path.node.argument.type === "ArrayComprehension") {
          const promiseDotAllCall = t.callExpression(
            t.memberExpression(t.identifier("Promise"), t.identifier("all")),
            [path.node.argument],
          );
          path.get("argument").replaceWith(promiseDotAllCall);
        }
      },

      VariableDeclaration(path) {
        // Error on auto-const when shadowing variable
        if (path.node.kind === "const") {
          if (path.node.extra && path.node.extra.implicit === true) {
            const id = getShadowingIdentifiers(path)[0];
            if (id) {
              throw path.buildCodeFrameError(
                `\`${id.name}\` is shadowed from a higher scope. ` +
                `If you want to reassign the variable, use \`now ${id.name} = ...\`. ` +
                "If you want to declare a new shadowed \`const\` variable, " +
                `you must use \`const ${id.name} = ...\` explicitly.`
              );
            }
          }
        }
      },

      // collect functions to be imported for the stdlib
      ReferencedIdentifier(path) {
        if (stdlib === false) return;

        const { node, scope } = path;
        if (stdlib[node.name] && !scope.hasBinding(node.name)) {
          collectStdlibImport(stdlib, imports, node.name);
        }
      },

      ExistentialExpression(path) {
        transformExistentialExpression(path);
      },

      MatchExpression(path) {
        transformMatchExpression(path);
      },

      MatchStatement(path) {
        transformMatchStatement(path);
      },

    });

    insertStdlibImports(path, imports, useRequire);
  }

  return {
    manipulateOptions(opts, parserOpts, file) {
      if (!shouldParseAsLightScript(file)) return;

      opts.parserOpts = opts.parserOpts || {};
      opts.parserOpts.parser = parse;
      parserOpts.plugins.unshift("lightscript");
      // TODO: allow configuration options to disable these, as they slow down parsing
      parserOpts.plugins.push("jsx", "flow");
    },

    visitor: {
      Program,
    },

  };
}
