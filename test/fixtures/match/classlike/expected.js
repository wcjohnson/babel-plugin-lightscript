const _isMatch = require("@oigroup/lightscript-runtime/isMatch");
if (_isMatch(String, x)) {
  "string";
} else if (_isMatch(Number, x)) {
  "number";
} else if (_isMatch(Boolean, x)) {
  "boolean";
} else if (_isMatch(Array, x)) {
  "Call .isArray";
} else if (_isMatch(Object, x)) {
  "instanceof";
} else if (_isMatch(React.Component, x)) {
  "it's a component";
} else if (_isMatch(React["Component"], x)) {
  "yup";
}