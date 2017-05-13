try:
  x = if true: throw new Error
  assert(false)
catch e:
  assert(e instanceof Error)
