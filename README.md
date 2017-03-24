# babel-plugin-lightscript

Compiles [LightScript](http://lightscript.org) to JavasScript when used with [Babel](http://babeljs.io).

The plugin only processes files that include `.lsc` or `.lsx` in their filenames.

It converts a "LightScript AST" produced by [babylon-lightscript](https://github.com/lightscript/babylon-lightscript)
into a conventional "Babel AST".

If you are using ES7 features (like `import`), JSX, and Flow, use
[babel-preset-lightscript](https://github.com/lightscript/babel-preset-lightscript)
to target ES6 instead of using the plugin directly.

### Contributing

You will need to link babel-plugin-lightscript to itself:

    cd babel-plugin-lightscript
    npm link
    npm link babel-plugin-lightscript
    npm install
    npm run build
    npm test