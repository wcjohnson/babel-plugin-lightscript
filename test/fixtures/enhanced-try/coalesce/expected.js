import _isMatch from "@oigroup/lightscript-runtime/isMatch";function f() {
  try {
    return g();
  } catch (_err) {
    return _err;
  }
}const x = (_it => {
  if (_isMatch(Result, _it)) {
    const result = _it;return result;
  } else if (_isMatch(RetriableError, _it)) {
    return retry(15);
  } else if (_isMatch(Error, _it)) {
    const err = _it;throw err;
  }
})((() => {
  try {
    return f();
  } catch (_err2) {
    return _err2;
  }
})());