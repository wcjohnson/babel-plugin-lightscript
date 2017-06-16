const _hasProps = require("@oigroup/lightscript-runtime/hasProps");

const it = x;
if (it === 1) {
  true;
} else if (test(it) && _hasProps(it, "x")) {
  const { x } = it;x;
} else {
  false;
}