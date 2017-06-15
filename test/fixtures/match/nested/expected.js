function _hasProps(obj) { if (obj == null) return false; if (typeof obj !== "object" && typeof obj !== "function") return false; for (var i = arguments.length - 1; i > 0; i--) if (!(arguments[i] in obj)) return false; return true; }

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