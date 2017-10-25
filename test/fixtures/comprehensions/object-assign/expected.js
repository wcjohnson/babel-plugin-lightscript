(() => {
  const _obj = {};for (let _i = 0, _len = arr.length; _i < _len; _i++) {
    const e = arr[_i];
    Object.assign(_obj, { [e]: e, [e + 1]: e + 1 });
  }return _obj;
})();