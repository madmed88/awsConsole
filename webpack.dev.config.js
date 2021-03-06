const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: ['webpack-hot-middleware/client?reload=true', './client/src/app/app.module.js']
  },
  mode: 'development',
  output: {
    filename: 'main.js',
    publicPath: '/',
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
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};