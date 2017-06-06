function _isObject(obj) { return obj != null && (typeof obj === "object" || typeof obj === "function"); }

if (x > 2 && _isObject(x) && "y" in x) {
  const { y } = x;(_ref => {
    if (_ref > 10) return "soo big";else if (_ref > 5) return "still pretty big";else return "kinda big";
  })(y);
} else "some other thing";