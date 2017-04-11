function f() {
  const _obj = g();

  for (let _i = 0, _arr = Object.keys(_obj), _len = _arr.length; _i < _len; _i++) {
    const k = _arr[_i];
    k;
  }

  const _obj2 = g();

  for (let _i2 = 0, _arr2 = Object.keys(_obj2), _len2 = _arr2.length; _i2 < _len2; _i2++) {
    const k = _arr2[_i2];
    k;
  }
}