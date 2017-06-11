match x:
  | String: "string"
  | Number: "number"
  | Boolean: "boolean"
  | Array: "Call .isArray"
  | Object: "instanceof"
  | React.Component: "it's a component"
  | React["Component"]: "don't do it like this"
