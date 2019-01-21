const passport = require('passport');
const User = require('./user.model');

module.exports.register = function(req, res) {
  const user = new User();

  user.name = req.body.name;
  user.email = req.body.email;

  User.findOne({ 'email' :  user.email }, (err, existingUser) => {
    if (existingUser) {
      res.status(500).json({message: 'That email is already taken.'});
    } else {
      user.setPassword(req.body.password);

      user.save(function() {
        const token = user.generateJwt();
        res.status(200);
        res.json({
          "token" : token
        });
      });
    }
  });

};

module.exports.login = function(req, res) {
  passport.authenticate('local', function(err, user, info){
    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      const token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};
