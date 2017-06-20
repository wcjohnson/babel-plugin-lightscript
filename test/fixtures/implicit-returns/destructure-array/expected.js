function f(x) {
  const [a, b, c = d] = x;
  return [a, b, c];
}