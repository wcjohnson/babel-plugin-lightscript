function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

const it = x;
if (_hasLength(it, 2, 2) && _hasLength(it[1], 1, 1)) {
  const [a, [b]] = it;"ha";
} else if (_hasLength(it, 2) && _hasLength(it[1], 2, 2) && _hasLength(it[1][1], 1, 1) && _hasLength(it[1][1][0], 1, 1) && _hasLength(it[1][1][0][0], 1, 1) && _hasLength(it[1][1][0][0][0], 1, 1)) {
  const [c, [d, [[[[e]]]]], ...f] = it;"woah";
}