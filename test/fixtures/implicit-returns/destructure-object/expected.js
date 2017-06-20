function f(x) {
  const { a, b: c, d, e: f = g } = h;
  return { a, c, d, f };
}