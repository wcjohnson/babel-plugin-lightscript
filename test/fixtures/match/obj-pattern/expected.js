function _hasProps(obj) { if (obj == null) return false; if (typeof obj !== "object" && typeof obj !== "function") return false; var i = arguments.length; while (--i > 0) { if (!(arguments[i] in obj)) return false; } return true; }

const it = x;
if (_hasProps(it, "a")) {
  const { a } = it;
  a;
} else if (_hasProps(it, "a", "b")) {
  const { a, b } = it;
  a + b;
} else if (_hasProps(it, "a")) {
  const { a, b = 1 } = it;
  a + b;
} else if (_hasProps(it, "a", "b", "c") && _hasProps(it.b, "ba") && _hasProps(it.c, "ca", "cb") && _hasProps(it.c.cb, "cba")) {
  const { a, b: { ba, bb = 1 }, c: { ca, cb: { cba } } } = it;
  a + ba + bb + ca + cba;
} else if ((it === 1 || it === 2) && _hasProps(it, "a", "b") && _hasProps(it.b, "c")) {
  const { a, b: { c } } = it;
  a + c;
} else if (_hasProps(it) && (!("a" in it) || _hasProps(it.a, "b") && _hasProps(it.a.b, "c"))) {
  const { a: { b: { c } } = otherObj } = it;
  c;
} //TODO: test `| { a, ...b }: b`