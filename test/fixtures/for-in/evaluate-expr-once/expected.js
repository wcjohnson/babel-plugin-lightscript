const _obj = slowRunningFunction();

for (let _i = 0, _arr = Object.keys(_obj), _len = _arr.length; _i < _len; _i++) {
  const k = _arr[_i],
        v = _obj[k];
  k;
}