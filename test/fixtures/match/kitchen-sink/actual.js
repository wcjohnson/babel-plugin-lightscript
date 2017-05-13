result = match slowRunningFunction():
  | ~isObject() with ({a, b}) -> a + b
  | ~isArray() and .length > 0 with ([first]) -> first
  | ?(safeArg): "it was a function and it returned truthy"
  | not ~test(): "fails my test"
  | ?: "exists"
  | else: throw new Error("something wicked this way comes")
