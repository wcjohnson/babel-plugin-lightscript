function f(x) {
  const [first, ...rest] = x;
  return [first, ...rest];
}