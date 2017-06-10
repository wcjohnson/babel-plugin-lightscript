import x from "y";

function _isObject(obj) { return obj != null && (typeof obj === "object" || typeof obj === "function"); }

function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

const it = z;
if (_hasLength(it, 1, 1)) {
  const [w] = it;"1";
} else if (_isObject(it) && "a" in it) {
  const { a } = it;"2";
}