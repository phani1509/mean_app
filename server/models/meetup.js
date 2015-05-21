var mongoose = require('mongoose');

module.exports = mongoose.model('Meetup', {

  fName : String,
  team : String,
  number : Number,
  emailId : String,
  password : String
   
});/*
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Schema = mongoose.Schema;
var Meetup = new Schema({
      fName : String,
  team : String,
  number : Number,
  emailId : String,
  password : String
    }, {
      collection: 'userInfo'
    });
var Meetups = mongoose.model('Meetup', Meetup);
passport.use(new LocalStrategy(function(username, password, done) {
  process.nextTick(function() {
    Meetups.findOne({
      'emailId': emailId, 
    }, function(err, user) {
      if (err) {
        return done(err);
      }
 
      if (!user) {
        return done(null, false);
      }
 
      if (user.password != password) {
        return done(null, false);
      }
 
      return done(null, user);
    });
  });
}));*/