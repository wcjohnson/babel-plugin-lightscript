import _isMatch from "@oigroup/lightscript-runtime/isMatch";
let _val;

try {
  _val = b();
} catch (err) {
  _val = panic();
}const a = _val;
let _val2;

try {
  _val2 = d();
} catch (err) {
  if (_isMatch(SpecificError, err)) {
    _val2 = specificValue;
  } else if (_isMatch(Error, err)) {
    _val2 = generalValue;
  }
}const c = _val2;
let _val3;

try {
  _val3 = f();
} catch (err) {
  if (_isMatch(SpecificError, err)) {
    _val3 = specificValue;
  } else if (_isMatch(Error, err)) {
    _val3 = generalValue;
  }
}
const e = _val3;