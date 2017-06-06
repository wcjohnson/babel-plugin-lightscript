function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

function _isObject(obj) { return obj != null && (typeof obj === "object" || typeof obj === "function"); }

const result = (_ref => {
  if (_isObject(_ref) && "a" in _ref && "b" in _ref) {
    const { a, b } = _ref;return a + b;
  } else if (_isObject(_ref) && "a" in _ref && "d" in _ref) {
    const { a, b = c, d } = _ref;return e;
  } else if (_hasLength(_ref, 1, 2)) {
    const [a, b = 1] = _ref;return a + b;
  } else if (_hasLength(_ref, 1)) {
    const [a, b = 1, ...c] = _ref;return "length must be at least 1";
  } else if (_hasLength(_ref, 3)) {
    const [a, b = 1, c, ...d] = _ref;return "length must be at least 3";
  } else if (_hasLength(_ref, 3, 3)) {
    const [a, b = 1, c] = _ref;return "length must be exactly 3";
  } else if (_hasLength(_ref, 3, 3) && _isObject(_ref[2]) && "c" in _ref[2] && "d" in _ref[2] && _hasLength(_ref[2].d, 1)) {
    const [a, b = 1, { c, d: [e, f = 1, ...g], h: { i, j } = k }] = _ref;return "stuff";
  } else if (_hasLength(_ref, 1)) {
    const [first, ...rest] = _ref;return first;
  } else if (typeof _ref === "function" ? _ref(safeArg) : null) return "it was a function and it returned truthy";else if (!test(_ref)) return "fails my test";else if (_ref != null) return "exists";else if (!(_ref != null)) return "doesn't exist";else if (!(_ref != null)) return "really doesn't exist for sure this time";else {
    throw new Error("something wicked this way comes");
  }
})(slowRunningFunction());