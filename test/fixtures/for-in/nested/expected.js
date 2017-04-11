for (let _i = 0, _len = arr1.length; _i < _len; _i++) {
  const i = arr1[_i];

  const _obj = objExpr2();

  for (let _i2 = 0, _arr = Object.keys(_obj), _len2 = _arr.length; _i2 < _len2; _i2++) {
    const k = _arr[_i2];

    const _arr2 = arrExpr3();

    for (let j = 0, _len3 = _arr2.length; j < _len3; j++) {
      for (let _i3 = 0, _arr3 = Object.keys(obj4), _len4 = _arr3.length; _i3 < _len4; _i3++) {
        const _k = _arr3[_i3],
              l = obj4[_k];
        [i, j, k, l];
      }
    }
  }
}