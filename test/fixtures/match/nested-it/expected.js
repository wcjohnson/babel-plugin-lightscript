const _hasProps = require("@oigroup/lightscript-runtime/hasProps");

const it = foo();
if (it === 1) {
  {
    const it = it;
    if (it === 2) {
      it;
    }
  }
} else if (_hasProps(it, "x")) {
  const { x } = it;
  {
    const it = x;
    if (it === 2) {
      it;
    }
  }
}