const _hasProps = require("@oigroup/lightscript-runtime/hasProps");const _hasLength = require("@oigroup/lightscript-runtime/hasLength");
if (_hasProps(x, "a", "f") && (!("b" in x) || _hasLength(x.b, 2, 2)) && _hasProps(x.f, "g", "i") && _hasProps(x.f.i, "j", "k", "l") && x.b[0] > 3 && x.f.i.l > 4) {
  const { a, b: [c, d] = e, f: { g: h, i: { j, k, l } } } = x;
  "ha";
}