z = match x:
  | 1 with y: y
  | 2 with { key }: key
  | 3 with [ first ]:
    result = process(first)
    processAgain(result)
  | else with other: other
