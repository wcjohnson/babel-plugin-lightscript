throwInOne() ->
  new Promise! (resolve, reject) ->
    setTimeout(-> reject(new Error()), 1000)

f() -/>
  <- throwInOne()
    catch err: err

g() -/>
  x <- f()
  assert(x instanceof Error)

g()
