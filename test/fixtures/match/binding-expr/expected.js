function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

function _isObject(obj) { return obj != null && (typeof obj === "object" || typeof obj === "function"); }

const z = (it => {
  if (it === 2 && _isObject(it) && "key" in it) {
    const { key } = it;return key;
  } else if (it === 3 && _hasLength(it, 1, 1)) {
    const [first] = it;
    const result = process(first);
    return processAgain(result);
  } else return other;
})(x);