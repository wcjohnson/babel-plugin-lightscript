function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

function _isObject(obj) { return obj != null && (typeof obj === "object" || typeof obj === "function"); }

if (_isObject(x) && "y" in x) {
  const { y } = x;y;
} else if (x === 2 && _isObject(x) && "key" in x) {
  const { key } = x;key;
} else if (x === 3 && _hasLength(x, 1, 1)) {
  const [first] = x;
  const result = process(first);
  processAgain(result);
} else other;