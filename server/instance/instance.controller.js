const Instance = require('./instance.model');

exports.create = function (req, res) {
    const instance = new Instance(
        {
            name: req.body.name,
            id: req.body.id,
            type: req.body.type,
            state: req.body.state,
            az: req.body.az,
            publicIP: req.body.publicIP,
            privateIP: req.body.privateIP
        }
    );

    instance.save(function (err) {
        if (err) {
            res.status(500).send(e);
        }
        res.send('Instance Created successfully')
    })
};

exports.list = function (req, res) {
    const query = res.locals.query || {};
  
    Instance.find(query, (e,result) => {
      if(e) {
        res.status(500).send(e);
      } else {
        res.send(result);
      }
    });
};

exports.details = function (req, res) {
    Instance.findById(req.params.id, function (err, instance) {
        if (err) {
            res.status(500).send(e);
        }
        res.send(instance);
    })
};

exports.update = function (req, res) {
    Instance.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err) {
        if (err) {
            res.status(500).send(e);
        }
        res.send('Instance udpated.');
    });
};

exports.delete = function (req, res) {
    Instance.findByIdAndDelete(req.params.id, function (err) {
        if (err) {
            res.status(500).send(e);
        }
        res.send('Deleted successfully!');
    })
};
