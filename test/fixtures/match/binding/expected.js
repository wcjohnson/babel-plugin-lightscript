const _hasProps = require("@oigroup/lightscript-runtime/hasProps");const _hasLength = require("@oigroup/lightscript-runtime/hasLength");
if (_hasProps(x, "y")) {
  const { y } = x;y;
} else if (x === 2 && _hasProps(x, "key")) {
  const { key } = x;key;
} else if (x === 3 && _hasLength(x, 1, 1)) {
  const [first] = x;
  const result = process(first);
  processAgain(result);
} else {
  other;
}