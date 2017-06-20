if (a) {
  "a is truthy";
} else if (x === a) {
  "x equals a";
} else if (f()) {
  "f() is truthy";
} else if (x === f()) {
  "x equals f()";
} else if (!f()) {
  "f() is falsy";
} else if (!(x === f())) {
  "x isnt f()";
} else if (x === 1 || x === 2) {
  "smaller than 3";
} else if (x === 1 || !(x === 2)) {
  "anything but 2";
} else if ((x === "nothing" || x === null) && x > -1 && !(x >= 1)) {
  "something like zero";
} else if (!(x === undefined)) {
  "something";
} else if (!(x === null)) {
  "maybe something";
} else if (!(x >= 1)) {
  "small";
}
