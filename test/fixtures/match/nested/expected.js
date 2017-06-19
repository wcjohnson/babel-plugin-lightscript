const _hasProps = require("@oigroup/lightscript-runtime/hasProps");
if (x > 2 && _hasProps(x, "y")) {
  const { y } = x;
  if (x > 10) {
    "soo big";
  } else if (x > 5) {
    "still pretty big";
  } else {
    "kinda big";
  }
} else {
  "some other thing";
}