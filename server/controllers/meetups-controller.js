var Meetup = require('../models/meetup');
/*var passport= require('passport');*/
module.exports.create = function (req, res) {
  var meetup = new Meetup(req.body);
  meetup.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Meetup.find({}, function (err, results) {
    res.json(results);
  });
}/*
module.exports.login(
  function(req, res, next) {
    req.session.orderId = 12345;
    if (req.body.rememberMe) {
      req.session.cookie.maxAge = config.cookieMaxAge;
    }
    next();
  },
  passport.authenticate('local', {
    failureRedirect: '/', 
    successRedirect: '/orders',
    failureFlash: 'Invalid credentials'
  }));

module.exports.logout( function(req, res, next) {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});*/
