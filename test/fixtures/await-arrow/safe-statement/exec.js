throwInOne() ->
  new Promise! (resolve, reject) ->
    setTimeout(-> reject(new Error()), 1000)

f() -/>
  x <!- throwInOne()
  assert(x instanceof Error)

f()
