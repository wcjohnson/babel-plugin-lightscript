# @oigroup/babel-plugin-lightscript

> @oigroup/lightscript is a futuristic fork of the [LightScript](http://lightscript.org) language with additional features, fixes, and tools.

Compiles [LightScript](http://wcjohnson.github.io/lightscript) to JavaScript when used with [Babel](http://babeljs.io).

It converts a "LightScript AST" produced by [@oigroup/babylon-lightscript](https://github.com/wcjohnson/babylon-lightscript/tree/oigroup)
into a conventional "Babel AST".

### Usage

Please consult the documentation at [the @oigroup/LightScript website](http://wcjohnson.github.io/lightscript).

We recommend using the Babel preset. However, if you decide to use the plugin as a standalone Babel module, please note that the code generated is ES2017+ and will not yet run in many browsers. When using the preset, this is taken care of for you via `babel-preset-env`

### Contributing

Issues: https://github.com/wcjohnson/lightscript/issues

If you want to hack on LightScript, the best way to get started is the `lightscript` monorepo: https://github.com/wcjohnson/lightscript. Check out the `oigroup` branch, run `npm install`, and then `npm setup`. You will have a live playground in which to hack the language.

When you're ready to PR against upstream, fork this repo, add your fork as a remote within the appropriate git submodule of the devkit, then branch and PR.
