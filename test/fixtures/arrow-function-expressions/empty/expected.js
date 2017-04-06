const f = function () {};

const g = function () {
  return function () {
    return 1;
  };
};const h = f(function () {});

const i = () => {};

const j = function () {
  return () => 1;
};const k = f(function () {}, () => function () {}, function (x) {}, y => {});