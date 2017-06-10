const it = x;
if (it === 2) {
  "two";
} else if (it === "hello") {
  "hi";
} else if (/\w+/.test(it)) {
  "word";
} else if (/\w+/ig.test(it)) {
  "word";
} else if (it === +1) {
  "equal to positive one";
} else if (it === -1) {
  "equal to negative one";
} else if (it === null) {
  "null";
} else if (it === undefined) {
  "undefined";
} else if (it === true) {
  "strict true";
} else if (it === false) {
  "strict false";
}