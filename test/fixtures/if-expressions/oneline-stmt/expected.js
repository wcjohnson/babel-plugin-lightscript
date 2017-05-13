const x = true ? function () {
  throw new Error();
}() : null;