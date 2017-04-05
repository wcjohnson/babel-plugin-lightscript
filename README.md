# @oigroup/babel-plugin-lightscript

> NB: This is a fork of babel-plugin-lightscript which implements language changes that are not necessarily endorsed by upstream. Generally speaking, our intent is to closely follow the upstream language -- however, there may be notable deviations.

Compiles [LightScript](http://lightscript.org) to JavaScript when used with [Babel](http://babeljs.io).

The plugin only processes files that include `.lsc` or `.lsx` in their filenames.

It converts a "LightScript AST" produced by [@oigroup/babylon-lightscript](https://github.com/wcjohnson/babylon-lightscript/tree/oigroup)
into a conventional "Babel AST".

### Usage

LightScript is a [Babel](http://babeljs.io) plugin, so the best way to get up to speed is to familiarize yourself with Babel first. Once you're up to speed on Babel, compiling LightScript is easy: just configure your `.babelrc` to apply the LightScript plugin before any other plugins.

LightScript targets ES2017, which won't run in many JavaScript environments. Therefore we strongly recommend the usage of `babel-preset-env` in order to transpile LightScript to code that will run in your target runtime. For instance, if you want your code to run in IE 10, an example `.babelrc` file may look like this:

```json
{
  "plugins": [
    ["@oigroup/babel-plugin-lightscript"],
    ["transform-class-properties"],
    ["transform-decorators-legacy"]
  ],
  "presets": [
    ["env", {
      "targets": {
        "ie": 10
      }
    }]
  ]
}
```

You may require additional `babel` plugins for features like JSX, Flow typing, et cetera, just as you would when transpiling normal JS.

### Contributing

Issues: https://github.com/wcjohnson/babel-plugin-lightscript/issues

If you want to hack on the compiler, the best way to get started is the `lightscript-devkit`: https://github.com/wcjohnson/lightscript-devkit. Check out the `oigroup` branch, run `npm install`, and then `npm setup`. You will have a live playground in which to hack the language.

When you're ready to PR against upstream, fork this repo, add your fork as a remote within the appropriate git submodule of the devkit, then branch and PR.

### Deviations from LightScript proper

#### Source Mapping

`@oigroup/babel-plugin-lightscript` generates additional source mapping information that `lightscript@0.4.2` does not. In each case where we generate additional source mapping information, we take care that the change does not break core tools in the ecosystem. The primary tools we test against are Istanbul code coverage and Chrome devtools debugging.
