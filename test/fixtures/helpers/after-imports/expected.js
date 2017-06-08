import x from "y";

function _isObject(obj) { return obj != null && (typeof obj === "object" || typeof obj === "function"); }

function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

if (_hasLength(z, 1, 1)) {
  const [w] = z;"1";
}
if (_hasLength(a, 1, 1)) {
  const [b] = a;"c";
} else if (_isObject(a) && "d" in a) {
  const { d } = a;"e";
}