function f() {
  const a = x ? y : function () {
    return z;
  }();
  return a;
}