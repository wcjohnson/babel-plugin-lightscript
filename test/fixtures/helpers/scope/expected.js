function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

function _hasProps(obj) { if (obj == null) return false; if (typeof obj !== "object" && typeof obj !== "function") return false; for (var i = arguments.length - 1; i > 0; i--) if (!(arguments[i] in obj)) return false; return true; }

const i = 1;
const obj = {};
const minLength = 1;
const maxLength = 3;
const arr = [];

if (_hasProps(x, "z")) {
  const { z } = x;z;
} else if (_hasLength(x, 1, 1)) {
  const [w] = x;w;
}