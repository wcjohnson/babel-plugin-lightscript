function f() {
  const _it = foo();
  if (_it === 1) {
    return "ok";
  } else if (_it === 2) {
    bar();
    const _it2 = baz();
    if (_it2 === 3) {
      return qux();
    }
  }
}