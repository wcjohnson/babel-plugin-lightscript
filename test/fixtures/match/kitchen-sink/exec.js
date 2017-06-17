class Parent {}
class Child extends Parent {}

trueFlag = true
falseFlag = false

assert(3 == match [1, 2]:
  | with [a, b]: a + b
)

assert(3 == match[1, 2]:
  | else as [a, b]: a + b
)

assert(match 1:
  | else: true
)

assert(match new Child:
  | Parent: true
)
