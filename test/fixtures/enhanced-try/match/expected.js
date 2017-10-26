import _isMatch from "@oigroup/lightscript-runtime/isMatch";try {
  something();
} catch (err) {
  if (_isMatch(ErrorOne, err)) {
    "panic";
  } else if (_isMatch(ErrorTwo, err)) {
    const { field } = err;`error 2 ${field}`;
  } else {
    throw new Error("dunno what happened");
  }
}