f((() => {
  try {
    return g();
  } catch (err) {
    return err;
  }
})());