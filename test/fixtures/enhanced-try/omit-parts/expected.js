f((() => {
  try {
    return g();
  } catch (_err) {
    return _err;
  }
})());

try {
  something();
} catch (_err2) {
  noErrArg();
}