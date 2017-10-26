a = try b()
  catch err: panic()

c = try d() catch err:
  | SpecificError: specificValue
  | Error: generalValue

e = try f()
  catch err:
    | SpecificError: specificValue
    | Error: generalValue
