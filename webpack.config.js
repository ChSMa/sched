const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const CLIENT_ROOT = 'src';
const DIST_ROOT = 'dist';
const PUBLIC_ROOT = 'public';

module.exports = {
  entry: path.resolve(__dirname, CLIENT_ROOT, 'client.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, DIST_ROOT),
  },
  devServer: {
    contentBase: path.resolve(__dirname, DIST_ROOT),
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, CLIENT_ROOT),
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, PUBLIC_ROOT, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
