function f(x) {
  const [a, b = c, { d, e: o = g, h: [i, j, { k: { l, m } = n }] }] = x;
  return [a, b, { d, o, h: [i, j, { k: { l, m } }] }];
}