function f() {
  sideEffect0();

  const _obj = sideEffect1();

  for (let _i = 0, _arr = Object.keys(_obj), _len = _arr.length; _i < _len; _i++) {
    const k1 = _arr[_i];
    k1;
  }
}