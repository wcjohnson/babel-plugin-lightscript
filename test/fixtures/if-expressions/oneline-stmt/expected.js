const x = true ? (() => {
  throw new Error();
})() : null;