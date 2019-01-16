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
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};