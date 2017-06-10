match x:
  | with {a, b = c}: d
  | with [a, b = c, d]: e
  | with {a, b: {c, d} = e}: f
