match x:
  | {a, b = c}: d
  | [a, b = c, d]: e
  | {a, b: {c, d} = e}: f
