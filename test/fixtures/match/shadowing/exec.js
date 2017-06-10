it = "good"
f() ->
  match "bad":
    | true: true

  it

assert(f() == "good")
