import _isMatch from "@oigroup/lightscript-runtime/isMatch";const a = (() => {
  try {
    return b();
  } catch (_err) {
    if (_isMatch(Error, _err)) {
      return panic();
    }
  }
})();