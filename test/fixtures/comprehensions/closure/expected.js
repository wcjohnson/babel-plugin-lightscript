(() => {
  const _arr = [];for (let _arr2 = Array(10), i = 0, _len = _arr2.length; i < _len; i++) {
    _arr.push(function f() {
      return i;
    });
  }return _arr;
})();