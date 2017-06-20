match x:
  | if x > 2 with { y }: match y:
    | if x > 10: "soo big"
    | if x > 5: "still pretty big"
    | else: "kinda big"
  | else: "some other thing"
