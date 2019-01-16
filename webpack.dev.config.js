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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};