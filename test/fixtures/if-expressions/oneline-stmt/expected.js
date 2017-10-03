const x = true ? (() => {
  throw new Error();
})() : void 0;