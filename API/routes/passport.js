var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');
const User=require('./userModel');
  module.exports = function(passport) {passport.use(new LocalStrategy(
  function(username,password, done) {
    console.log(username);
    console.log(password); 
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (user) {
          bcrypt.compare(password, user.password, function(err, res) {
            if(res){
              return done(null,user);
            } else {
              return done(null, false, { message: 'Incorrect password.' });
            }
        });          
        }     
        else
        {
          return done(null, false, { message: 'Username incorrect.' });
        }
      });
  });
  }))
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};