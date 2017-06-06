function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

function _isObject(obj) { return obj != null && (typeof obj === "object" || typeof obj === "function"); }

const z = (_ref => {
  if (_ref === 2 && _isObject(_ref) && "key" in _ref) {
    const { key } = _ref;return key;
  } else if (_ref === 3 && _hasLength(_ref, 1, 1)) {
    const [first] = _ref;
    const result = process(first);
    return processAgain(result);
  } else return other;
})(x);