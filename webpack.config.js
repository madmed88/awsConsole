const path = require('path');

module.exports = {
  entry: './client/src/app/app.module.js',
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