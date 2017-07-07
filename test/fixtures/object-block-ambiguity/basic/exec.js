x = 3
f() -> { x }
assert.deepEqual(f(), { x: 3 })

g() => { x }
assert.deepEqual(g(), { x: 3 })
