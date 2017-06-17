match x:
  | with { a, b: [c, d] = e, f: { g: h, i: {j, k, l }}} if c > 3 and l > 4:
    "ha"
