const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { plugins } = require("../moneyExchange/webpack.config");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    port: 3000,
    static: path.resolve(__dirname, "dist"),
  },
  output: {
    publicPath: "auto",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "home",
      remotes: {
        atendidos: "atendidos@http://localhost:3001/remoteEntry.js",
        pendientes: "pendientes@http://localhost:3002/remoteEntry.js",
        transferencias: "transferencias@http://localhost:3003/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
