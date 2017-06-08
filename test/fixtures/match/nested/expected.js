function _isObject(obj) { return obj != null && (typeof obj === "object" || typeof obj === "function"); }

if (x > 2 && _isObject(x) && "y" in x) {
  const { y } = x;
  if (y > 10) "soo big";else if (y > 5) "still pretty big";else "kinda big";
} else "some other thing";