const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./common");

module.exports = merge(common, {
  devtool: "inline-source-map",
  mode: "development",
  output: {
    filename: "[name].bundle.development.js",
    publicPath: "/"
  },
  module: {
    rules: [{
      test: /\.scss$/,
      loader: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]'
            },
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    inline: true,
    hot: true,
    port: 4000,
    host: "0.0.0.0",
    public: "localhost",
    publicPath: "/",
    historyApiFallback: true
  }
});