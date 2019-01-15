const path = require('path');

module.exports = {
  entry: './client/app.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'client', 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'client', 'dist'),
    compress: true,
    port: 9000
  }
};