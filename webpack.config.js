const path = require('path');

module.exports = {
  entry: './client/src/app/app.module.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'client', 'dist')
  }
};