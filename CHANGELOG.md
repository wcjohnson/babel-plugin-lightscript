# 3.0

>This is a major release with breaking changes. This release is no longer strictly backward compatible with `lightscript@0.5.9`. Where compatibility has been broken, we believe we are correctly anticipating the future development of JavaScript and LightScript.

## Missing branches of conditional constructs produce `undefined`

### Change:

Prior to 3.0, if a conditional construct (`if` expression, `match` expression, or safe member expression) reached a branch that was not provided, the default value returned by the construct would be `null`:

```js
x = if false: 1
// now, x === null
```

This has been changed so that missing branches now produce `undefined`:

```js
x = if false: 1
// now, x === undefined
```

This is a **breaking change** to the semantics of the language! If you are directly comparing conditional results to `null`, rather than checking for falsiness, you will need to update those cases.

### Rationale:

`undefined` is the default return value when something is not provided vanilla JavaScript, so for reasons of consistency, LightScript will do the same. (See https://github.com/lightscript/lightscript/issues/45 for more detailed examples of how `null` can cause issues.)

## Sequence expressions require `( )` delimeters

### Change:

In ordinary JavaScript (and LightScript 0.5) a comma-separated list of expressions is treated as a sequence expression. Parentheses are optional:

```js
// Legal JS and LSC 0.5
a, b
```

As of `@oigroup/lightscript` 3.0, a sequence expression must now be wrapped in parentheses:

```js
// Not legal anymore
a, b
// Legal!
(a, b)
```

This is a **breaking change** to syntax. In particular, users of object comprehensions should note that they need to add parentheses to sequence expressions at the tail of each object comprehension.

### Rationale:

Implicit parentheses around sequence expressions introduce additional ambiguities into the language. With the addition of `bangCall: true` as default, these ambiguities became particularly serious, so it became necessary to require explicit parentheses.

## Safe traversal expressions

### Changes:

#### 1. Safe calls (`{safeCall: true}`) are now enabled by default.

The JavaScript proposal for optional chaining is now Stage 1 and it includes safe calls. Therefore we are enabling them by default.

Passing `{safeCall: false}` will disable safe calls for stricter backward compatibility with `lightscript@0.5.x`.

Assuming they are not removed from the JS optional chaining proposal, safe calls will be considered a core JS feature, and thus the `safeCall` flag will be removed completely in 4.0.

#### 2. The proposed JS syntax for safe calls is now legal

Both of these syntaxes will safe-call `a` with argument `b`.
```js
a?(b)
a?.(b)
```

The `?.()` syntax is endorsed by the official JS proposal, but the nicer `?()` syntax will continue to be supported as well.

#### 3. The semantics of safe chaining now match the JS proposal

The JavaScript optional chaining proposal specifies details on how safe chains should be evaluated. We've adopted the algorithm specified in the proposal. This results in a number of bug fixes as well as improved short-circuiting semantics.

For example:
```js
a?[b++]?.c
// in lightscript@0.5.9, this compiles to:
(a == null ? null : a[b++]) == null ? null : a[b++].c;
// in @oigroup/lightscript@3.0.0, this compiles to the (correct):
a == null ? void 0 : (_a = a[b++]) == null ? void 0 : _a.c;
```

This is a **breaking change** to language semantics! Most user code should not be affected, as it should not rely on this kind of side effect ordering -- but please do note the possible impact here.

### Rationale:

Here we are converging with the direction that JavaScript proper is headed in, as well as picking up some bug fixes along the way.

## Bang calls

#### Bang calls (`{bangCall: true}`) are now enabled by default.

LightScript upstream has indicated they will be accepting this feature, so it is now on by default. `{bangCall: false}` can still be passed to disable it. The flag will be removed altogether when LightScript proper integrates the feature.

## Comprehensions

### Change

When `{enhancedComprehension: true}` is enabled, comprehensions have a new syntax:

```js
x = [
  // Comprehensions may include regular array elements, which are passed directly
  // into the produced array
  1
  // `...for` introduces a loop comprehension: every iteration of the loop will
  // produce one value which will be added to the array. Note the addition of the
  // ellipsis `...` which was not required in the previous syntax.
  ...for elem e in [2, 3, 4]: e
  // `...if` introduces a conditional comprehension: if the test expression is
  // truthy, the consequent expression is inserted into the array. If no alternate
  // expression is provided, and the test is falsy, nothing is inserted into
  // the array.
  //
  // This behavior differs from a standard `if` expression which would insert an
  // `undefined` entry into the array in that circumstance.
  ...if not skipFive: 5
  // Comprehensions can be mixed in with regular items in any combination.
  6
  ...for elem e in [7, 8]: e
]
```

Object comprehensions no longer use tuples to represent object elements. Instead, an object expression that is effectively merged into the underlying object is provided:

```js
reverse(obj) -> ({
  // Object comprehensions now end with an object literal that will effectively
  // be `Object.assign`ed to the object being assembled.
  ...for key k, val v in obj: { [v]: k }
})
```

The `case` keyword is no longer used.

### Rationale

The addition of `...` solves the serious grammar ambiguity at https://github.com/wcjohnson/lightscript/issues/25.

`...if` should be more readable and clearer than the `case` syntax it replaced.

Sequence expressions in object comprehensions have always been a bit unfortunate, as the overload violates the semantics of JS sequence expressions. The object expression, though more verbose, is ultimately a clearer syntax that doesn't introduce an edge case into the language.

## Object-block ambiguity

### Changes

#### 1. `preferObjectLiteral` compiler option has been removed

The approach taken by the `preferObjectLiteral` compiler option introduces a fatal grammar ambiguity into the language. See https://github.com/wcjohnson/lightscript/issues/25 for details. For that reason, it is being removed.

#### 2. `whiteblock` compiler option added.

In lieu of the `preferObjectLiteral` approach, we're introducing a new compiler option, `whiteblock`.

When this option is enabled, only whitespace-delimited syntax can be used for introducing blocks of code. `{ }` are reserved for object literals and some other constructs like `import`/`export`.

For example,
```js
f(x) ->
  y
// compiles to
function(x) { return y; }
// both with and without `whiteblock`

// However,
f(x) -> {
  y
}
// compiles to
function(x) { return y; }
// without `whiteblock`, but with `whiteblock`, the `{`s are interpreted
// as delimiting an object, so instead you get
function(x) {
  return { y }
}
```

In the simplest possible terms, `whiteblock` makes the compiler behave as if you are always writing idiomatic whitespaced LightScript code, and so `{}`s will never be used to set off code blocks.

### Rationale

It is easy for new LightScript users to get burned by the distinctions between objects and blocks of code in the LightScript grammar:
```js
f() -> {}
g() -> ({})

x = f()
// x === undefined
y = g()
// y === { }
```

That syntax exists to create an easy migration path from a JS codebase to LightScript, where support for braces is helpful. Nonetheless, for those working in pure LightScript, this extra bit of syntax is a hindrance.

The `preferObjectLiteral` option was the first iteration of a system designed to help people who want to write idiomatic LightScript work around this problem; `whiteblock` mode is the next iteration.
