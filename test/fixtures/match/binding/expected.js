if (x === 1) {
  const y = x;
  y;
} else if (x === 2) {
  const { key } = x;
  key;
} else if (x === 3) {
  const [first] = x;

  const result = process(first);
  processAgain(result);
} else {
  const other = x;
  other;
}