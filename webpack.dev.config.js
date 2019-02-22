const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common.config.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    open: true,
    host: "0.0.0.0",
    hot: true,
    useLocalIp: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
