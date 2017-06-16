const _hasProps = require("@oigroup/lightscript-runtime/hasProps");

const _hasLength = require("@oigroup/lightscript-runtime/hasLength");

const z = (it => {
  if (it === 2 && _hasProps(it, "key")) {
    const { key } = it;return key;
  } else if (it === 3 && _hasLength(it, 1, 1)) {
    const [first] = it;
    const result = process(first);
    return processAgain(result);
  } else {
    return other;
  }
})(x);