const globals = require("globals");
const hasPkg = require("has-pkg");

let languageOptionsGlobals = globals.builtin;

if (hasPkg("react-dom")) {
  languageOptionsGlobals = globals.browser;
}

if (hasPkg("react-native")) {
  languageOptionsGlobals = {
    ...globals.builtin,
    __DEV__: false,
    __dirname: false,
    alert: false,
    Blob: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    escape: false,
    Event: false,
    EventTarget: false,
    exports: false,
    fetch: false,
    File: false,
    FileReader: false,
    FormData: false,
    global: false,
    Headers: false,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: true,
    requestAnimationFrame: true,
    requestIdleCallback: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    WebSocket: false,
    window: false,
    XMLHttpRequest: false,
  };
}

module.exports = languageOptionsGlobals;
