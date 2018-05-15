throwInOne() ->
  new Promise! (resolve, reject) ->
    setTimeout(-> reject(new Error()), 1000)

f() -/>
  try: <- throwInOne()
  catch err: "there was a problem"

g() -/>
  x <- f()
  assert(x === "there was a problem")

g()
