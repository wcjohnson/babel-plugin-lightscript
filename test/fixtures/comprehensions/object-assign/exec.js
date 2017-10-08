obj = {...for let i=0; i<2; i++:
  { [`${i}.0`]: i, [`${i}.1`]: i+1 }
}

assert.deepEqual(obj, { "0.0": 0, "0.1": 1, "1.0": 1, "1.1": 2 })
