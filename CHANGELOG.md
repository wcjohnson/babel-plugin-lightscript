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

## Miscellaneous

#### Conditional comprehension syntax change

Conditional comprehensions were added in 2.0 (with the `{enhancedComprehension: true}` flag) using the `case` keyword:
```js
x = [
  "first"
  case shouldAddSecond: "second"
]
```

The syntax has been changed to `only if`:
```js
x = [
  "first"
  only if shouldAddSecond: "second"
]
```

The `only if` syntax makes it much clearer what this conditional comprehension code is doing.
