const path = require("path");
const { buildLoaders } = require("../builders/buildLoaders");
const webpack = require("webpack");

module.exports = ({ config }) => {
  config.resolve.modules = [
    path.resolve(__dirname, "..", "..", "src"),
    "node_modules",
  ];

  config.module.rules = buildLoaders({ isDev: true });

  config.plugins.push(new webpack.DefinePlugin({
    _IS_DEV_: true
  }));

  return config;
};
