const _isMatch = require("@oigroup/lightscript-runtime/isMatch");const _hasProps = require("@oigroup/lightscript-runtime/hasProps");
if (_isMatch(Atom, x)) {
  1;
} else if (Predicate(x)) {
  2;
} else if (preGuard && _isMatch(/regex/, x)) {
  3;
} else if (Predicate(x) && _hasProps(x, "pattern")) {
  const { pattern } = x;4;
} else if (Preguard && (Predicate1(x) && Predicate2(x) || _isMatch(String, x)) && x.x > 4) {
  const { x } = x;5;
}