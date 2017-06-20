f = -> return

g = -> -> 1

h = f(-> return)

i = => return

j = -> => 1

k = f(-> return, => -> return, (x) -> return, (y) => return)
