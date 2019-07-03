"use strict";

var path = require("path");
var blacklist = require("metro/src/blacklist");

var config = {
  getProjectRoots() {
    return getRoots();
  },

  getBlacklistRE() {
    return blacklist([]);
  },

  getSourceExts() {
    return ["ts", "tsx"];
  },

  getAssetExts() {
    return ["obj", "mtl"];
  },

  getPlatforms() {
    return ["vr"];
  },

  getProvidesModuleNodeModules() {
    return ["react-native", "react-360"];
  },

  getTransformModulePath() {
    return require.resolve("react-native-typescript-transformer");
  }
};

function getRoots() {
  var root = process.env.REACT_NATIVE_APP_ROOT;
  if (root) {
    return [path.resolve(root)];
  }
  return [path.resolve(__dirname)];
}

module.exports = config;
