match x:
  | with { y }: y
  | 2 with { key }: key
  | 3 with [ first ]:
    result = process(first)
    processAgain(result)
  | else: other
