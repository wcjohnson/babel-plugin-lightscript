function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

function _isObject(obj) { return obj != null && (typeof obj === "object" || typeof obj === "function"); }

const result = (it => {
  if (it && _isObject(it) && "a" in it && "b" in it) {
    const { a, b } = it;return a + b;
  } else if (test(it) && _isObject(it) && "a" in it && "d" in it) {
    const { a, b = c, d } = it;return e;
  } else if (_hasLength(it, 1, 2)) {
    const [a, b = 1] = it;return a + b;
  } else if (_hasLength(it, 1)) {
    const [a, b = 1, ...c] = it;return "length must be at least 1";
  } else if (_hasLength(it, 3)) {
    const [a, b = 1, c, ...d] = it;return "length must be at least 3";
  } else if (_hasLength(it, 3, 3)) {
    const [a, b = 1, c] = it;return "length must be exactly 3";
  } else if (_hasLength(it, 3, 3) && _isObject(it[2]) && "c" in it[2] && _hasLength(it[2].d, 1) && (!("h" in it[2]) || _isObject(it[2].h) && "i" in it[2].h && "j" in it[2].h)) {
    const [a, b = 1, { c, d: [e, f = 1, ...g], h: { i, j } = k }] = it;return "stuff";
  } else if (_hasLength(it, 1)) {
    const [first, ...rest] = it;return first;
  } else if (typeof it === "function" ? it(safeArg) : null) {
    return "it was a function and it returned truthy";
  } else if (!test(it)) {
    return "fails my test";
  } else if (it != null) {
    return "exists";
  } else if (!(it != null)) {
    return "doesn't exist";
  } else if (!(it != null)) {
    return "really doesn't exist for sure this time";
  } else {
    throw new Error("something wicked this way comes");
  }
})(slowRunningFunction());