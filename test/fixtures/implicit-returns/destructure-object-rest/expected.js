function f(x) {
  const { k, ...rest } = x;
  return { k, ...rest };
}