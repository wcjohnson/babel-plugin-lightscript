result = match slowRunningFunction():
  | it with {a, b}: a + b
  | it~test() with {a, b = c, d}: e
  | with [a, b = 1]: a + b
  | with [a, b = 1, ...c]: "length must be at least 1"
  | with [a, b = 1, c, ...d]: "length must be at least 3"
  | with [a, b = 1, c]: "length must be exactly 3"
  | with [a, b = 1, {c, d: [e, f=1, ...g], h: {i,j} = k}]: "stuff"
  | with [first, ...rest]: first
  | it?(safeArg): "it was a function and it returned truthy"
  | not it~test(): "fails my test"
  | it?: "exists"
  | !it?: "doesn't exist"
  | not it?: "really doesn't exist for sure this time"
  | else: throw new Error("something wicked this way comes")
