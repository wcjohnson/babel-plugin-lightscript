function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

function _hasProps(obj) { if (obj == null) return false; if (typeof obj !== "object" && typeof obj !== "function") return false; for (var i = arguments.length - 1; i > 0; i--) if (!(arguments[i] in obj)) return false; return true; }

if (_hasProps(x, "a", "f") && (!("b" in x) || _hasLength(x.b, 2, 2)) && _hasProps(x.f, "g", "i") && _hasProps(x.f.i, "j", "k", "l") && x.b[0] > 3 && x.f.i.l > 4) {
  const { a, b: [c, d] = e, f: { g: h, i: { j, k, l } } } = x;
  "ha";
}