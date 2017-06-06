function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

function _isObject(obj) { return obj != null && (typeof obj === "object" || typeof obj === "function"); }

const z = (_it => {
  if (_it === 2 && _isObject(_it) && "key" in _it) {
    const { key } = _it;return key;
  } else if (_it === 3 && _hasLength(_it, 1, 1)) {
    const [first] = _it;
    const result = process(first);
    return processAgain(result);
  } else return other;
})(x);