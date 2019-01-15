/* eslint no-console: 0 */

const express = require('express');
const bodyParser = require('body-parser');

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
app.use('/instances', instance);

const port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
