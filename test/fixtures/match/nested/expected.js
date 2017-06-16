const _hasProps = require("@oigroup/lightscript-runtime/hasProps");

const it = x;
if (it > 2 && _hasProps(it, "y")) {
  const { y } = it;{
    const it = y;
    if (it > 10) {
      "soo big";
    } else if (it > 5) {
      "still pretty big";
    } else {
      "kinda big";
    }
  }
} else {
  "some other thing";
}