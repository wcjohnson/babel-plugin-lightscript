const z = x === 1 ? (y => y)(x) : x === 2 ? (({ key }) => key)(x) : x === 3 ? (([first]) => {
  const result = process(first);
  return processAgain(result);
})(x) : (other => other)(x);