try:
  closures = [...for idx i in Array(3):
    x = g(i)
    [g(x) -> x+i]
  ]
catch err:
  assert(err.message == "g is not defined")
