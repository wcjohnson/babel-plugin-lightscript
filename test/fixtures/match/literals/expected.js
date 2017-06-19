const _isMatch = require("@oigroup/lightscript-runtime/isMatch");
if (x === 2) {
  "two";
} else if (x === "hello") {
  "hi";
} else if (_isMatch(/\w+/, x)) {
  "word";
} else if (_isMatch(/\w+/ig, x)) {
  "word";
} else if (x === +1) {
  "equal to positive one";
} else if (x === -1) {
  "equal to negative one";
} else if (x === null) {
  "null";
} else if (x === undefined) {
  "undefined";
} else if (x === true) {
  "strict true";
} else if (x === false) {
  "strict false";
}