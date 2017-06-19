const _hasProps = require("@oigroup/lightscript-runtime/hasProps");const _hasLength = require("@oigroup/lightscript-runtime/hasLength");
if (_hasProps(x, "a")) {
  const { a, b = c } = x;d;
} else if (_hasLength(x, 3, 3)) {
  const [a, b = c, d] = x;e;
} else if (_hasProps(x, "a") && (!("b" in x) || _hasProps(x.b, "c", "d"))) {
  const { a, b: { c, d } = e } = x;f;
}