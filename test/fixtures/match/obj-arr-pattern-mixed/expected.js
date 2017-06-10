function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

function _hasProps(obj) { if (obj == null) return false; if (typeof obj !== "object" && typeof obj !== "function") return false; var i = arguments.length; while (--i > 0) { if (!(arguments[i] in obj)) return false; } return true; }

const it = x;
if (_hasProps(it, "a", "aa") && _hasLength(it.aa, 2) && _hasProps(it.aa[1])) {
  const { a, aa: [b, { c = 1 }, ...d] } = it;
  d.concat(a + b + c);
}