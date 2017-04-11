const _obj = { one: 1, two: 2, three: 3 };

for (let _i = 0, _arr = Object.keys(_obj), _len = _arr.length; _i < _len; _i++) {
  const k = _arr[_i],
        v = _obj[k];
  k;
}