match x {
  | 1: true
  | ~test() with { x }: { x }
  | else: false
}
