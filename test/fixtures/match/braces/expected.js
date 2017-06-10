function _isObject(obj) { return obj != null && (typeof obj === "object" || typeof obj === "function"); }

const it = x;
if (it === 1) {
  true;
} else if (test(it) && _isObject(it) && "x" in it) {
  const { x } = it;x;
} else {
  false;
}