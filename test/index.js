var locateBabelConfig = require("../lib/tooling").locateBabelConfig
var getPluginConfig = require("../lib/tooling").getPluginConfig

require("babel-helper-plugin-test-runner")(__dirname);

// Tooling API tests
// XXX: make this a lot better
function assert(fn, msg) {
  console.log()
  if (!fn()) {
    if (msg)
      throw new Error(msg);
    else
      throw new Error("Assertion failed");
  } else {
    console.log("✔︎ " + fn.toString())
  }
}

assert(() => locateBabelConfig(".").plugins[0][0] === "@oigroup/babel-plugin-lightscript-self-host")
assert(() => {
  var config = locateBabelConfig(".");
  var pluginConfig = getPluginConfig(config, "@oigroup/babel-preset-lightscript-self-host", "@oigroup/babel-plugin-lightscript-self-host");
  return (pluginConfig.existential === true)
})
