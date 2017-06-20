f = -> -> 1

assert(f()() == 1)

g = -> => this.x

assert((g.call({x:1}))() == 1)

h = (i, j) -> 1

assert(h(-> return,=> return) == 1)
