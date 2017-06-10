function _hasLength(arr, minLength, maxLength) { return arr != null && typeof arr !== "function" && (maxLength === undefined ? minLength ? arr.length >= minLength : arr.length >= 0 : arr.length >= minLength && arr.length <= maxLength); }

const it = x;
if (_hasLength(it)) {
  const [] = it;
  "empty";
} else if (_hasLength(it, 2, 2)) {
  const [a, b] = it;
  a - b;
} else if (_hasLength(it, 1, 2)) {
  const [a, b = 2] = it;
  a + b - 2;
} else if (_hasLength(it, 1)) {
  const [a, ...b] = it;
  b.concat(a);
} else if (_hasLength(it, 2) && _hasLength(it[0], 1, 2) && _hasLength(it[1], 3, 3)) {
  const [[b, d = 'e'], [g,, h], ...j] = it;
  [b, d, g, ...j].join('');
}