const _hasLength = require('@oigroup/lightscript-runtime/hasLength');
if (_hasLength(x, 0, 0)) {
  "empty";
} else if (_hasLength(x, 2, 2)) {
  const [a, b] = x;
  a - b;
} else if (_hasLength(x, 1, 2)) {
  const [a, b = 2] = x;
  a + b - 2;
} else if (_hasLength(x, 1)) {
  const [a, ...b] = x;
  b.concat(a);
} else if (_hasLength(x, 0)) {
  const [...all] = x;
  all;
} else if (_hasLength(x, 2) && _hasLength(x[0], 1, 2) && _hasLength(x[1], 3, 3)) {
  const [[b, d = 'e'], [g,, h], ...j] = x;
  [b, d, g, ...(j === void 0 ? [] : j)].join('');
}