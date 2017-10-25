(() => {
  const _arr = [1, 2];

  for (let _arr2 = ["buckle", "my", "shoe"], _i = 0, _len = _arr2.length; _i < _len; _i++) {
    const e = _arr2[_i];_arr.push(e);
  }_arr.push(...(true ? [3] : []), 4);
  for (let _arr3 = ["shut", "the", "door"], _i2 = 0, _len2 = _arr3.length; _i2 < _len2; _i2++) {
    const e = _arr3[_i2];_arr.push(e);
  }_arr.push(5, 6, "pickup sticks");
  return _arr;
})();