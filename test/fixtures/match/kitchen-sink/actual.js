result = match slowRunningFunction():
  | {a, b}: a + b
  | {a, b = c, d}: e
  | [a, b = 1]: a + b
  | [a, b = 1, ...c]: "length must be at least 1"
  | [a, b = 1, c, ...d]: "length must be at least 3"
  | [a, b = 1, c]: "length must be exactly 3"
  | [a, b = 1, {c, d: [e, f=1, ...g], h: {i,j} = k}]: "stuff"
  | [first, ...rest]: first
  | ?(safeArg): "it was a function and it returned truthy"
  | not ~test(): "fails my test"
  | ?: "exists"
  | !?: "doesn't exist"
  | not ?: "really doesn't exist for sure this time"
  | else: throw new Error("something wicked this way comes")
