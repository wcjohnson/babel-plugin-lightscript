import _isMatch from "@oigroup/lightscript-runtime/isMatch";function f() {
  return { x };
}const g = () => {
  return {
    x
  };
};const y = true ? { x } : null;

const w = (_it => {
  if (_isMatch(y, _it)) {
    return { z };
  }
})(x);