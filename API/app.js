var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const flash=require('connect-flash');
var users = require('./routes/users');
var router = express.Router();
var userReg = require('./routes/userReg');
const passport=require('passport');
const User=require('./routes/userModel');
var bcrypt = require('bcryptjs');
var app = express();
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
require('./routes/passport')(passport);
app.post('/api/login',passport.authenticate('local'), function(req, res) {
    res.json(req.user);
  });

app.post('/api/register', function(req, res, next) {
      const username=req.body.username,name=req.body.name,age=req.body.age;
      const mongoose = require('mongoose');
      mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true});
      const db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', function() {
        User.findOne({ username: username }, function (err, user) { 
            if (err) { return err; }
            if (user) {
              res.json(0);
            }else{
              bcrypt.hash(req.body.password, 10, function(err, password) {
                const newUser = User;
                const curUser = new newUser({ name:name,username:username,age:age, password:password });
                curUser.save(function (err) {
                  if (err) return console.error(err);
                  res.json(1);
                });
              });     
            } 
          });
    });
  });
app.use('/api/login', userReg);
app.use('/api/v1/users', users);
module.exports = app;
