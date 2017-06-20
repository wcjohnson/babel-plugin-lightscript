const _hasLength = require("@oigroup/lightscript-runtime/hasLength");
if (_hasLength(x, 2, 2) && _hasLength(x[1], 1, 1)) {
  const [a, [b]] = x;"ha";
} else if (_hasLength(x, 2) && _hasLength(x[1], 2, 2) && _hasLength(x[1][1], 1, 1) && _hasLength(x[1][1][0], 1, 1) && _hasLength(x[1][1][0][0], 1, 1) && _hasLength(x[1][1][0][0][0], 1, 1)) {
  const [c, [d, [[[[e]]]]], ...f] = x;"woah";
}