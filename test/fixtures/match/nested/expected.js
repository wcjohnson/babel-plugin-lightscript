function _isObject(obj) { return obj != null && (typeof obj === "object" || typeof obj === "function"); }

const it = x;
if (it > 2 && _isObject(it) && "y" in it) {
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