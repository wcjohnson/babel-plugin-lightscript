function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

function _isObject(obj) { return obj != null && (typeof obj === "object" || typeof obj === "function"); }

if (_isObject(x) && "a" in x) {
  const { a, b = c } = x;d;
} else if (_hasLength(x, 3, 3)) {
  const [a, b = c, d] = x;e;
} else if (_isObject(x) && "a" in x && (!("b" in x) || _isObject(x.b) && "c" in x.b && "d" in x.b)) {
  const { a, b: { c, d } = e } = x;f;
}