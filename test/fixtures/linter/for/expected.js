for (const [i] of arr) i;

for (const [e] of arr) e;

for (const [i, e] of arr) i, e;

for (const [k] of obj) k;

for (const [v] of obj) v;

for (const [k, v] of obj) k, v;

for (const [i, [a, { b, c }]] of arr) i, a, b, c;

for (const [k, { b: c, d: [e, f, g] }] of obj) c, e, f, g;