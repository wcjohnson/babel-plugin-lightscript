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

This is a **breaking change** to syntax.

### Rationale:

Implicit parentheses around sequence expressions introduce additional ambiguities into the language. With the addition of `bangCall: true` as default, these ambiguities became particularly serious, so it became necessary to require explicit parentheses.

## Safe traversal expressions

### Changes:

#### 1. The semantics of safe chaining now match the JS proposal

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

#### 2. `{ safeCall: true }` enabled by default

The JS proposal appears likely to include safe calls, so they are now on by default. `{ safeCall: false }` can still be passed as a compiler flag to disable them. In the event the JS proposal advances to a late stage with safe calls present, the flag will be removed altogether.

#### 3. Syntax and other changes

The JS optional chaining syntax is still in rapid flux despite its position at Stage 1 in the standards process. There appears to be considerable uncertainty on the final syntax. For that reason, we are delaying introducing any syntax changes at this time.

### Rationale:

We're trying to converge with the JS safe traversal proposal when possible, as well as fix bugs in the previous LSC implementation.

## Bang calls

#### Bang calls (`{bangCall: true}`) are now enabled by default.

LightScript upstream has indicated they will be accepting this feature, so it is now on by default. `{bangCall: false}` can still be passed to disable it. The flag will be removed altogether when LightScript proper integrates the feature.

## Comprehensions

### Changes

#### 1. Comprehensions have a new syntax:

```js
x = [
  // Comprehensions may include regular array elements, which are passed directly
  // into the produced array
  1
  // `...for` introduces a loop comprehension: each time the loop reaches a tail
  // expression, an item will be inserted into the array. Note the addition of the
  // ellipsis `...` which was not required in previous syntax.
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

The `case` keyword is no longer used.

#### 2. Object comprehensions no longer use tuples to represent object elements.

Instead, an object expression that is effectively merged into the underlying object is provided:

```js
reverse(obj) -> ({
  // Object comprehensions now end with an object literal that will effectively
  // be `Object.assign`ed to the object being assembled.
  ...for key k, val v in obj: { [v]: k }
})
```

#### 3. `{ enhancedComprehension: true }` is now the default.

The new syntax is enabled by default in order to mesh with the new block parsing strategy. For enhanced backward compatibility with 0.5.9, passing `{ enhancedComprehension: false }` disables the new syntax and reverts to the old comprehension syntax.

This flag will be removed completely once LightScript upstream adopts the syntax.

### Rationale

The addition of `...` solves the serious grammar ambiguity at https://github.com/wcjohnson/lightscript/issues/25.

`...if` should be more readable and clearer than the `case` syntax it replaced.

Sequence expressions in object comprehensions have always been a bit unfortunate, as the overload violates the semantics of JS sequence expressions. The object expression, though more verbose, is ultimately a clearer syntax that doesn't introduce an edge case into the language.

## Object-block ambiguity

### Changes

#### 1. Context-sensitive parsing of `{ }` delimiters

When the parser encounters `{ }` delimiters, it uses information from context to decide between ambiguous interpretations:

- Whenever plain JavaScript syntax is used with `if`, `for`, `do`, `while`, the following `{ }` will be treated as a block of code:

```js
z = 3
x = if (true) { z }
// x === 3
```

- Whenever LightScript syntax is used with `if`, `for`, `do`, `while`, the following `{ }` will first be treated as an object expression, then as a block of code if it fails to parse as an object:

```js
z = 3
x = if true: { z }
// x deepEquals { z: 3 }
```

- Whenever `{ }` is encountered elsewhere, it is first treated as an object, then as a block.

```js
a; { b } = c
// In lightscript 0.5.9 the `{b}` was treated as a block and this didn't compile:
Unexpected token (1:7)
> 1 | a; {b} = c
    |        ^
// but now it does:
a;
const { b } = c;
```

```js
// It is also no longer necessary to set off anonymous code blocks using semicolons.
{
  a = b
}
// in 0.5.9:
unknown: Unexpected token (2:4)
  2 | {
> 3 |   a = b
    |     ^
// in 3.0:
{
  const a = b;
}
```

#### 2. Labeled expressions are illegal

Applying a label to an expression will now result in an error:
```js
{
  thisIsABlock()
  label: expr
}
```
```js
Labeled expressions are illegal. (3:2)
```

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

The general intent of these changes is to eliminate these sorts of traps and edge cases. Ideally the output of the compiler should "just makes sense" and it is not necessary to remember the specific rules about how braces are parsed.

Labeled expressions increase the number of scenarios where objects and blocks can be confused with each other, and don't make much sense on their own, so they have been outlawed.

(In terms of the parser unit test suite, this change eliminated around 20 situations where LightScript was parsing vanilla JavaScript incorrectly, as well as four parsing situations labeled as `unfortunate` in the test suite itself.)

## `whiteblock` compiler option added.

### Change

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

The context-sensitive brace parser is implemented using speculative branching, which can essentially double the amount of work the parser has to do in a lot of situations. This flag will greatly speed up the LightScript parser for those who use whitespace-sensitive syntax, as it is no longer necessary for the parser to speculate when encountering `{ }`.
