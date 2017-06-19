const _hasProps = require("@oigroup/lightscript-runtime/hasProps");const _hasLength = require("@oigroup/lightscript-runtime/hasLength");const z = (_it => {
  if (_it === 2 && _hasProps(_it, "key")) {
    const { key } = _it;return key;
  } else if (_it === 3 && _hasLength(_it, 1, 1)) {
    const [first] = _it;
    const result = process(first);
    return processAgain(result);
  } else {
    return other;
  }
})(x);