const MyComponent = pure(withSomething(stuff)(withSomethingElse(stuff)(function (props) {
  return <div>{props.thing}</div>;
})));