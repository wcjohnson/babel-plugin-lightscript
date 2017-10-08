(() => {
  const _arr = [];for (let _i = 0, _len = x.length; _i < _len; _i++) {
    const e = x[_i];_arr.push(...(() => {
      const _arr2 = [];for (let _i2 = 0, _len2 = y.length; _i2 < _len2; _i2++) {
        const d = y[_i2];_arr2.push(d);
      }return _arr2;
    })());
  }return _arr;
})();