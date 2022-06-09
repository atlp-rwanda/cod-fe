const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: ['regenerator-runtime/runtime.js', path.join(__dirname, 'src', 'index.js')],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: /images/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    https: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
};
