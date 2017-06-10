function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

function _hasProps(obj) { if (obj == null) return false; if (typeof obj !== "object" && typeof obj !== "function") return false; var i = arguments.length; while (--i > 0) { if (!(arguments[i] in obj)) return false; } return true; }

const it = x;
if (_hasProps(it, "a")) {
  const { a, b = c } = it;d;
} else if (_hasLength(it, 3, 3)) {
  const [a, b = c, d] = it;e;
} else if (_hasProps(it, "a") && (!("b" in it) || _hasProps(it.b, "c", "d"))) {
  const { a, b: { c, d } = e } = it;f;
}