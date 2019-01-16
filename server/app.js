/* eslint no-console: 0 */

const express = require('express');
const bodyParser = require('body-parser');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevConfig = require('../webpack.dev.config');

const instance = require('./instance/instance.route');
const app = express();

const mongoose = require('mongoose');
const dev_db_url = 'mongodb://madmed:madmed88@ds257314.mlab.com:57314/cisco_assignment';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useFindAndModify: false });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/instances', instance);

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackDevConfig);
  app.use(webpackDevMiddleware(compiler, {}));
  app.use(webpackHotMiddleware(compiler));
}

// Create link to Angular build directory
var distDir = __dirname + '/../client/dist/';
app.use(express.static(distDir));

const server = app.listen(process.env.PORT || 1234, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});
