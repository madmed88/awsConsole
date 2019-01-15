const Instance = require('./instance.model');

exports.create = function (req, res) {
    const newEntry = req.body;
    Instance.create(newEntry, (e, newEntry) => {
        if (e) {
            res.sendStatus(500);
        } else {
            res.send(newEntry);
        }
    });
};

exports.list = function (req, res) {
    const query = res.locals.query || {};
    Instance.find(query, (e, result) => {
        if (e) {
            res.status(500).send(e);
        } else {
            res.send(result);
        }
    });
};

exports.details = function (req, res) {
    Instance.findOne({id: req.params.id}, function (e, result) {
        if (e) {
            res.status(500).send(e);
        } else {
            res.send(result);
        }
    })
};

exports.update = function (req, res) {
    const changedEntry = req.body;
    Instance.findOneAndUpdate({id: req.params.id}, { $set: changedEntry }, (e) => {
        if (e) {
            res.sendStatus(500);
        }
        else {
            res.sendStatus(200);
        }
    });
};

exports.delete = function (req, res) {
    Instance.findOneAndDelete({id: req.params.id}, (e) => {
        if (e) {
            res.status(500).send(e);
        }
        else {
            res.sendStatus(200);
        }
    });
};
