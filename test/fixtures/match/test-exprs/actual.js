match x:
  | a: "a is truthy"
  | it == a: "x equals a"
  | f(): "f() is truthy"
  | it == f(): "x equals f()"
  | not f(): "f() is falsy"
  | not (it == f()): "x isnt f()"
  | 1 or 2: "smaller than 3"
  | 1 or not 2: "anything but 2"
  | "nothing" or null or (it > -1 and not (it >= 1)): "something like zero"
  | not undefined: "something"
  | not null: "maybe something"
  | not (it >= 1): "small"
