import type Foo from 'foo';
import type Foo2 from 'foo';
import type Foo3 from 'foo';
var a: { add: (x: Foo, ...y: Array<Foo2>) => Foo3 };
a;
