x = { a: 1, b: [5, 2], f: { g: 1, i: {j: 2, k: 3, l: 5}}}

match x:
  | with { a, b: [c, d] = e, f: { g: h, i: {j, k, l }}} if c > 3 and l > 4:
    assert(d == 2)
  | else:
    assert(false)
