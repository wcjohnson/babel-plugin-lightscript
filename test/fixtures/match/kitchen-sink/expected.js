function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

function _isObject(obj) { return obj != null && (typeof obj === "object" || typeof obj === "function"); }

const result = ((_it) => {
  if (_isObject(_it) && "a" in _it && "b" in _it) {
    const { a, b } = _it;return a + b;
  } else if (_isObject(_it) && "a" in _it && "d" in _it) {
    const { a, b = c, d } = _it;return e;
  } else if (_hasLength(_it, 1, 2)) {
    const [a, b = 1] = _it;return a + b;
  } else if (_hasLength(_it, 1)) {
    const [a, b = 1, ...c] = _it;return "length must be at least 1";
  } else if (_hasLength(_it, 3)) {
    const [a, b = 1, c, ...d] = _it;return "length must be at least 3";
  } else if (_hasLength(_it, 3, 3)) {
    const [a, b = 1, c] = _it;return "length must be exactly 3";
  } else if (_hasLength(_it, 3, 3) && _isObject(_it[2]) && "c" in _it[2] && "d" in _it[2] && _hasLength(_it[2].d, 1)) {
    const [a, b = 1, { c, d: [e, f = 1, ...g], h: { i, j } = k }] = _it;return "stuff";
  } else if (_hasLength(_it, 1)) {
    const [first, ...rest] = _it;return first;
  } else if (typeof _it === "function" ? _it(safeArg) : null) return "it was a function and it returned truthy";else if (!test(_it)) return "fails my test";else if (_it != null) return "exists";else if (!(_it != null)) return "doesn't exist";else if (!(_it != null)) return "really doesn't exist for sure this time";else {
    throw new Error("something wicked this way comes");
  }
})(slowRunningFunction());