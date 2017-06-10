function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

function _hasProps(obj) { if (obj == null) return false; if (typeof obj !== "object" && typeof obj !== "function") return false; var i = arguments.length; while (--i > 0) { if (!(arguments[i] in obj)) return false; } return true; }

if (_hasProps(x, "y")) {
  const { y } = x;y;
} else if (x === 2 && _hasProps(x, "key")) {
  const { key } = x;key;
} else if (x === 3 && _hasLength(x, 1, 1)) {
  const [first] = x;
  const result = process(first);
  processAgain(result);
} else {
  other;
}