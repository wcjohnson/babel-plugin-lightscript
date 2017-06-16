const _hasProps = require("@oigroup/lightscript-runtime/hasProps");

const _hasLength = require("@oigroup/lightscript-runtime/hasLength");

const result = (it => {
  if (it && _hasProps(it, "a", "b")) {
    const { a, b } = it;return a + b;
  } else if (test(it) && _hasProps(it, "a", "d")) {
    const { a, b = c, d } = it;return e;
  } else if (_hasLength(it, 1, 2)) {
    const [a, b = 1] = it;return a + b;
  } else if (_hasLength(it, 1)) {
    const [a, b = 1, ...c] = it;return "length must be at least 1";
  } else if (_hasLength(it, 3)) {
    const [a, b = 1, c, ...d] = it;return "length must be at least 3";
  } else if (_hasLength(it, 3, 3)) {
    const [a, b = 1, c] = it;return "length must be exactly 3";
  } else if (_hasLength(it, 3, 3) && _hasProps(it[2], "c", "d") && _hasLength(it[2].d, 1) && (!("h" in it[2]) || _hasProps(it[2].h, "i", "j"))) {
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