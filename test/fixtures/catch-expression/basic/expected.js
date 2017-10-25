import _isMatch from "@oigroup/lightscript-runtime/isMatch";
let _val;

try {
  _val = b();
} catch (_err) {
  if (_isMatch(Error, _err)) {
    _val = panic();
  }
}

const a = _val;