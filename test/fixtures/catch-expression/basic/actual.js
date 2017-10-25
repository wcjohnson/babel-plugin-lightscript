a = b()
  catch err: panic()

c = d() catch err:
  | SpecificError: specificValue
  | Error: generalValue

e = f()
  catch err:
    | SpecificError: specificValue
    | Error: generalValue
