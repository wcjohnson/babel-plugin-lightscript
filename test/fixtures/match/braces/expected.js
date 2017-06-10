function _hasProps(obj) { if (obj == null) return false; if (typeof obj !== "object" && typeof obj !== "function") return false; var i = arguments.length; while (--i > 0) { if (!(arguments[i] in obj)) return false; } return true; }

const it = x;
if (it === 1) {
  true;
} else if (test(it) && _hasProps(it, "x")) {
  const { x } = it;x;
} else {
  false;
}