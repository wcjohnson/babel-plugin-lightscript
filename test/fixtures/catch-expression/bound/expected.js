import _isMatch from "@oigroup/lightscript-runtime/isMatch";
let _val;

try {
  _val = b();
} catch (_err) {
  if (_isMatch(Error, _err)) {
    const err = _err;_val = err;
  }
}

const a = _val;