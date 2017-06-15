function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

function _hasProps(obj) { if (obj == null) return false; if (typeof obj !== "object" && typeof obj !== "function") return false; for (var i = arguments.length - 1; i > 0; i--) if (!(arguments[i] in obj)) return false; return true; }

if (_hasProps(x, "a")) {
  const { a, b = c } = x;d;
} else if (_hasLength(x, 3, 3)) {
  const [a, b = c, d] = x;e;
} else if (_hasProps(x, "a") && (!("b" in x) || _hasProps(x.b, "c", "d"))) {
  const { a, b: { c, d } = e } = x;f;
}