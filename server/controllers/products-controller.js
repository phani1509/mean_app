/*var ProductModel = require('../models/product');

/*module.exports.create = function (req, res) {
  var product = new Product(req.body);
  product.save(function (err, result) {
    res.json(result);
  });
};
*//*
module.exports.list = function (req, res) {
  Product.find(function(err, result) {
    res.json(result);
  });
};
/*module.exports.sing = function (req, res) {
  Product.find({}, function (err, resul) {
    res.json(resul);console.log(resul);
  });
};/*
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
});*
module.exports.list =function(req, res){
  ProductModel.find(function(err, result) {
    res.json(result);
  });
};*/