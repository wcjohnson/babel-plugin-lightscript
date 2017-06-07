function _isObject(obj) { return obj != null && (typeof obj === "object" || typeof obj === "function"); }

if (x === 1) true;else if (test(x) && _isObject(x) && "x" in x) {
  const { x } = x;({ x });
} else false;