const _isMatch = require("@oigroup/lightscript-runtime/isMatch");
if (x === 1 || x === 0.1 || x === 0x11 || x === +1 || x === -1) {
  it;
} else if (x === "hi") {
  it;
} else if (x === `there ${1 + 1}`) {
  it;
} else if (_isMatch(/\s+/, x)) {
  it;
} else if (_isMatch(Number, x) || _isMatch(Boolean, x) || _isMatch(String, x)) {
  it;
} else if (_isMatch(Array, x) || _isMatch(Object, x) || _isMatch(Map, x) || _isMatch(Foo, x)) {
  it;
} else if (x === null || x === undefined) {
  it;
} else if (_isMatch(x, x) || _isMatch(+x, x)) {
  it;
} else if (!(x === 1) || !_isMatch(x, x)) {
  it;
}