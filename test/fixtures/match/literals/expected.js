if (x === 2) "two";else if (x === "hello") "hi";else if (/\w+/.test(x)) "word";else if (/\w+/ig.test(x)) "word";else if (x === +1) "equal to positive one";else if (x === -1) "equal to negative one";else if (x === null) "null";else if (x === undefined) "undefined";else if (x === true) "strict true";else if (x === false) "strict false";