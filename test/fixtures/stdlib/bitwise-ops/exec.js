assert.equal(bitwiseNot(1), -2)

assert.equal(bitwiseAnd(0, 0), 0)
assert.equal(bitwiseAnd(0, 1), 0)
assert.equal(bitwiseAnd(1, 1), 1)
assert.equal(bitwiseAnd(1, 2), 0)
assert.equal(bitwiseAnd(2, 2), 2)

assert.equal(bitwiseOr(0, 0), 0)
assert.equal(bitwiseOr(0, 1), 1)
assert.equal(bitwiseOr(1, 1), 1)
assert.equal(bitwiseOr(1, 2), 3)
assert.equal(bitwiseOr(2, 2), 2)

assert.equal(bitwiseXor(0, 0), 0)
assert.equal(bitwiseXor(0, 1), 1)
assert.equal(bitwiseXor(1, 1), 0)
assert.equal(bitwiseXor(1, 2), 3)
assert.equal(bitwiseXor(2, 2), 0)

assert.equal(bitwiseLeftShift(0, 0), 0)
assert.equal(bitwiseLeftShift(0, 1), 0)
assert.equal(bitwiseLeftShift(1, 1), 2)
assert.equal(bitwiseLeftShift(1, 2), 4)
assert.equal(bitwiseLeftShift(2, 2), 8)

assert.equal(bitwiseRightShift(0, 0), 0)
assert.equal(bitwiseRightShift(0, 1), 0)
assert.equal(bitwiseRightShift(1, 1), 0)
assert.equal(bitwiseRightShift(1, 2), 0)
assert.equal(bitwiseRightShift(2, 1), 1)
assert.equal(bitwiseRightShift(2, 0), 2)
assert.equal(bitwiseRightShift(-1, 2), -1)

assert.equal(bitwiseZeroFillRightShift(0, 0), 0)
assert.equal(bitwiseZeroFillRightShift(0, 1), 0)
assert.equal(bitwiseZeroFillRightShift(1, 1), 0)
assert.equal(bitwiseZeroFillRightShift(1, 2), 0)
assert.equal(bitwiseZeroFillRightShift(2, 1), 1)
assert.equal(bitwiseZeroFillRightShift(2, 0), 2)
assert.equal(bitwiseZeroFillRightShift(-1, 2), 1073741823)