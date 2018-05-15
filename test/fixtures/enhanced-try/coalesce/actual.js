f() -> try g()

x = match try f():
  | Result as result: result
  | RetriableError: retry(15)
  | Error as err: throw err
