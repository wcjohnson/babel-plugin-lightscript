function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

function _isObject(obj) { return obj != null && (typeof obj === "object" || typeof obj === "function"); }

const it = x;
if (_isObject(it) && "a" in it) {
  const { a, b = c } = it;d;
} else if (_hasLength(it, 3, 3)) {
  const [a, b = c, d] = it;e;
} else if (_isObject(it) && "a" in it && (!("b" in it) || _isObject(it.b) && "c" in it.b && "d" in it.b)) {
  const { a, b: { c, d } = e } = it;f;
}