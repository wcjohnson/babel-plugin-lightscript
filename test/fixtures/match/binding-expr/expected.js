function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

function _hasProps(obj) { if (obj == null) return false; if (typeof obj !== "object" && typeof obj !== "function") return false; for (var i = arguments.length - 1; i > 0; i--) if (!(arguments[i] in obj)) return false; return true; }

const z = (it => {
  if (it === 2 && _hasProps(it, "key")) {
    const { key } = it;return key;
  } else if (it === 3 && _hasLength(it, 1, 1)) {
    const [first] = it;
    const result = process(first);
    return processAgain(result);
  } else {
    return other;
  }
})(x);