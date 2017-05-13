var _ref;

import { isObject, isArray } from "lodash";
const result = (_ref = slowRunningFunction(), isObject(_ref) ? function ({ a, b }) {
  return a + b;
}(_ref) : isArray(_ref) && _ref.length > 0 ? function ([first]) {
  return first;
}(_ref) : (typeof _ref === "function" ? _ref(safeArg) : null) ? "it was a function and it returned truthy" : !test(_ref) ? "fails my test" : null);