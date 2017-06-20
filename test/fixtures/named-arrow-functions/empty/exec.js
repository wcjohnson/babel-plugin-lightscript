f() -> return

assert(f() == undefined)

g() -> h() => this.x

assert( (g.call({x: 1}))() == 1 )
