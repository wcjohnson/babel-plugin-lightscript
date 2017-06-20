const _hasProps = require("@oigroup/lightscript-runtime/hasProps");
if (_hasProps(x, "a")) {
  const { a } = x;
  a;
} else if (_hasProps(x, "a", "b")) {
  const { a, b } = x;
  a + b;
} else if (_hasProps(x, "a")) {
  const { a, b = 1 } = x;
  a + b;
} else if (_hasProps(x, "a", "b", "c") && _hasProps(x.b, "ba") && _hasProps(x.c, "ca", "cb") && _hasProps(x.c.cb, "cba")) {
  const { a, b: { ba, bb = 1 }, c: { ca, cb: { cba } } } = x;
  a + ba + bb + ca + cba;
} else if ((x === 1 || x === 2) && _hasProps(x, "a", "b") && _hasProps(x.b, "c")) {
  const { a, b: { c } } = x;
  a + c;
} else if (_hasProps(x) && (!("a" in x) || _hasProps(x.a, "b") && _hasProps(x.a.b, "c"))) {
  const { a: { b: { c } } = otherObj } = x;
  c;
} else if (_hasProps(x, "a")) {
  const { a, ...b } = x;
  b;
}