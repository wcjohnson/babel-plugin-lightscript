a = try: b()
catch err: panic()

c = try: d() catch err:
  match err:
    | SpecificError: specificValue
    | Error: generalValue

e = try: f() catch err:
  match err:
    | SpecificError: specificValue
    | Error: generalValue
