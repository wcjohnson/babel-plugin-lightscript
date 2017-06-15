match x:
  | Atom: 1
  | ~Predicate(): 2
  | if preGuard: /regex/: 3
  | ~Predicate() with { pattern }: 4
  | if Preguard: ~Predicate1() and ~Predicate2(), String as { x } if x > 4: 5
