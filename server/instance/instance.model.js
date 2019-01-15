const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstanceSchema = new Schema({
    name: {type: String, required: true, max: 100},
    id: {type: String, required: true, max: 100},
    type: {type: String, required: true, max: 100},
    state: {type: String, required: true, max: 100},
    az: {type: String, required: true, max: 100},
    publicIP: {type: String, required: true, max: 100},
    privateIP: {type: String, required: true, max: 100}
});

module.exports = mongoose.model('Instance', InstanceSchema);
