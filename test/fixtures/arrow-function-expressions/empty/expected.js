const f = function () {
  return;
};const g = function () {
  return function () {
    return 1;
  };
};const h = f(function () {
  return;
});

const i = () => {
  return;
};const j = function () {
  return () => 1;
};const k = f(function () {
  return;
}, () => function () {
  return;
}, function (x) {
  return;
}, y => {
  return;
});