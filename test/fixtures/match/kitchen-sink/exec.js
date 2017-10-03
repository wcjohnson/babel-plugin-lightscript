class Parent {}
class Child extends Parent {}

trueFlag = true
falseFlag = false

assert.equal(3, match [1, 2]:
  | with [a, b]: a + b
)

assert.equal(5, match [2, 3]:
  | else as [a, b]: a + b
)

assert(match 1:
  | else: true
)

assert(match new Child:
  | Parent: true
)
