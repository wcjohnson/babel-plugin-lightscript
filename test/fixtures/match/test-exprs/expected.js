const it = x;
if (a) {
  "a is truthy";
} else if (it === a) {
  "x equals a";
} else if (f()) {
  "f() is truthy";
} else if (it === f()) {
  "x equals f()";
} else if (!f()) {
  "f() is falsy";
} else if (!(it === f())) {
  "x isnt f()";
} else if (it === 1 || it === 2) {
  "smaller than 3";
} else if (it === 1 || !(it === 2)) {
  "anything but 2";
} else if (it === "nothing" || it === null || it > -1 && !(it >= 1)) {
  "something like zero";
} else if (!(it === undefined)) {
  "something";
} else if (!(it === null)) {
  "maybe something";
} else if (!(it >= 1)) {
  "small";
}