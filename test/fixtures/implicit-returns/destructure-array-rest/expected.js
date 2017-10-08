function f(x) {
  const [first, ...rest] = x;
  return [first, ...(rest === void 0 ? [] : rest)];
}