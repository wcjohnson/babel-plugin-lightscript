if (typeof x === "string") {
  "string";
} else if (typeof x === "number") {
  "number";
} else if (typeof x === "boolean") {
  "boolean";
} else if (Array.isArray(x)) {
  "Call .isArray";
} else if (x instanceof Object) {
  "instanceof";
} else if (x instanceof React.Component) {
  "it's a component";
} else if (React["Component"]) {
  "don't do it like this";
}
