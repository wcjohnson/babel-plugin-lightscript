x = if true {2} else 3
assert(x == 2, "2")

y = if (false) 4 else {5}
assert(y == 5, "5")

z = if (true) 6 else 7
assert(z == 6, "6")
