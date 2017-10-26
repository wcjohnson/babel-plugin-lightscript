try:
  something()
catch err:
  | ErrorOne: "panic"
  | ErrorTwo as { field }: `error 2 ${field}`
  | else: throw new Error("dunno what happened")
