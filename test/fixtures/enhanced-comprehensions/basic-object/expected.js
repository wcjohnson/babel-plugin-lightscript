(() => {
  const _obj = {};

  for (let _i = 0, _len = y.length; _i < _len; _i++) {
    const x = y[_i];
    _obj[x] = x;
  }

  return _obj;
})();