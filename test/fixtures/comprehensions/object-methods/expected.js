const obj = (() => {
  const _obj = {
    a() {
      return b;
    },
    @decorated
    c() {
      return d;
    }, regular: "entry",
    e() {
      return f;
    } };for (let _i = 0, _len = arr.length; _i < _len; _i++) {
    const e = arr[_i];_obj[e] = e;
  }return _obj;
})();
obj.e = obj.e.bind(obj);