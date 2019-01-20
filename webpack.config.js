const path = require('path');

module.exports = {
  entry: './client/src/app/app.module.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'client', 'dist')
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: [{
        loader: 'style-loader' // creates style nodes from JS strings
      }, {
        loader: 'css-loader' // translates CSS into CommonJS
      }, {
        loader: 'less-loader' // compiles Less to CSS
      }]
    },
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    { test: /\.svg$/, loader: 'svg-inline-loader'}
  ]
  }
};