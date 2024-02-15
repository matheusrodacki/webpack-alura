const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './app/src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/dist'),
  },
  plugins: [new HtmlWebpackPlugin({ template: './app/src/app.html' })],
};
