try:
  (-> throw new Error("hi"))()
  assert(false)
catch e:
  assert(e.message == "hi")

try:
  g() -> throw new Error("hi"); g()
  assert(false)
catch e:
  assert(e.message == "hi")

let j = 0
f = -> for idx i in Array(10): j++
f()
assert(j == 10)
