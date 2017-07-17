(function (_arg, _arg2, _arg3, ..._arg4) {
  return f(_arg2, _arg, _arg3, ..._arg4);
});(function (_arg5, _arg6, _arg7, ..._arg8) {
  const a = [..._arg8];
  return f(_arg6, _arg5, _arg7, a);
});(function (..._arg9) {
  const a = [..._arg9];
  const b = [..._arg9];
  return b;
});