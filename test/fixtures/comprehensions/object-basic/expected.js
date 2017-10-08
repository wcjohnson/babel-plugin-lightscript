(() => {
  const _obj = {};for (let _i = 0, _len = arr.length; _i < _len; _i++) {
    const x = arr[_i];_obj.a = x;
  }return _obj;
})();

(() => {
  const _obj2 = {};for (let _i2 = 0, _len2 = arr.length; _i2 < _len2; _i2++) {
    const x = arr[_i2];_obj2[x] = f(x);
  }return _obj2;
})();

({
  a: b,
  ...(c ? { d: e } : void 0)
});