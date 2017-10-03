const x = true ? (1, 1) : true ? (() => {
  for (const x of []) {
    x;
  }
})() : true ? 3 : (4, 4);