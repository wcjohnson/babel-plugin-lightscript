match x:
  | not 1 or not Number or not "hi":
    it
  | not it or not ~Predicate() or not foo(bar):
    it
