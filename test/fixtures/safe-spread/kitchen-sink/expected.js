var _ref, _ref2, _ref3;

[...(expr === void 0 ? [] : expr)];

[...[arrayExpr]];

[...(_ref = test ? someFunction() : void 0, _ref === void 0 ? [] : _ref)];

[...(test ? [explicitValue] : [])];

[...(_ref2 = test ? consequent : alternate, _ref2 === void 0 ? [] : _ref2)];

[...(_ref3 = test ? [consequent] : [alternate], _ref3 === void 0 ? [] : _ref3)];