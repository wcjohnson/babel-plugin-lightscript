match x:
  | it > 2 with { y }: match y:
    | it > 10: "soo big"
    | it > 5: "still pretty big"
    | else: "kinda big"
  | else: "some other thing"
