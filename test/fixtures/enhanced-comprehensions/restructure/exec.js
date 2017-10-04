arr = [{a:1, b:2, c:3}]
arr2 = [...for elem e in arr: {a,b} = e]
assert.deepEqual(arr2, [{a:1, b:2}])
