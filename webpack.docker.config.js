const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { plugins } = require("../moneyExchange/webpack.config");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    port: 3000,
    host: "0.0.0.0",
    allowedHosts: "all",
    static: path.resolve(__dirname, "dist"),
    historyApiFallback: {
      index: "/index.html", // redirige todas las rutas al archivo principal
    },
    
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
      {
        test: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ['style-loader', 'css-loader'],
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
        login: "login@http://localhost:3004/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },
        "common-utils": {
          singleton: true,
          eager: true,
        },
        rxjs: {
          singleton: true,
          eager: true,
        },
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
