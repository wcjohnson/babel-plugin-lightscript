match x {
  | 1: true
  | it~test() with { x }: { x }
  | else: false
}
