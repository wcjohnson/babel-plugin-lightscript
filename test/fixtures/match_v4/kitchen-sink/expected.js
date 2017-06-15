function _hasProps(obj) { if (obj == null) return false; if (typeof obj !== "object" && typeof obj !== "function") return false; for (var i = arguments.length - 1; i > 0; i--) if (!(arguments[i] in obj)) return false; return true; }

function _matches(discriminant, target) {}

if (_matches(x, Atom)) {
  1;
} else if (Predicate(x)) {
  2;
} else if (preGuard && _matches(x, /regex/)) {
  3;
} else if (Predicate(x) && _hasProps(x, "pattern")) {
  const { pattern } = x;4;
} else if (Preguard && (Predicate1(x) && Predicate2(x) || _matches(x, String)) && x.x > 4) {
  const { x } = x;5;
}