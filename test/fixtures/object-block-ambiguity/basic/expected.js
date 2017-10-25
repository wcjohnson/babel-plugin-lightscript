import _isMatch from "@oigroup/lightscript-runtime/isMatch";function f() {
  return { x };
}const g = () => ({
  x
});

const y = true ? { x } : void 0;

const w = (_it => {
  if (_isMatch(y, _it)) {
    return { z };
  }
})(x);