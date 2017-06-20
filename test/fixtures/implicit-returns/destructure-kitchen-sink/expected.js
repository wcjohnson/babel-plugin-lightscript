function f(x) {
  const [a, b = c, { d, e: f = g, h: [i, j, { k: { l, m } = n }] }] = x;
  return [a, b, { d, f, h: [i, j, { k: { l, m } }] }];
}