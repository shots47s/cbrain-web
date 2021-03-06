const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index/index.js",
    about: "./src/about/about.js",
    projects: "./src/projects/projects.js",
    features: "./src/features/features.js",
    getStarted: "./src/get-started/get-started.js",
  },
  output: {
    filename: "js/[name].[hash].bundle.js",
    chunkFilename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "dist/"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-syntax-dynamic-import"],
            },
          },
          {
            loader: "eslint-loader",
            options: {
              enforce: "pre",
              emitWarning: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|svg|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              context: "src",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index/index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "src/about/about.html",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      filename: "projects.html",
      template: "src/projects/projects.html",
      chunks: ["projects"],
    }),
    new HtmlWebpackPlugin({
      filename: "features.html",
      template: "src/features/features.html",
      chunks: ["features"],
    }),
    new HtmlWebpackPlugin({
      filename: "get-started.html",
      template: "src/get-started/get-started.html",
      chunks: ["getStarted"],
    }),
    new CopyWebpackPlugin([{ from: "src/assets", to: "assets" }]),
  ],
};
