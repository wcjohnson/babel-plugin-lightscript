function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

function _hasProps(obj) { if (obj == null) return false; if (typeof obj !== "object" && typeof obj !== "function") return false; var i = arguments.length; while (--i > 0) { if (!(arguments[i] in obj)) return false; } return true; }

if (_hasProps(x, "a", "aa") && _hasLength(x.aa, 2) && _hasProps(x.aa[1])) {
  const { a, aa: [b, { c = 1 }, ...d] } = x;
  d.concat(a + b + c);
}