function f(x) {
  const it = x;
  if (it === 1) {
    "ok";
  }{
    const it = x;
    if (it === 2) {
      return "should be implicitly returned";
    }
  }
}
