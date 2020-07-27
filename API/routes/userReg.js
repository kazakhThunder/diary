
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const passport = require('passport');
const User=require('./userModel');
const flash = require('connect-flash');

router.post('/login', function(req,res,next){
  console.log(req.body);
  res.redirect('../home');
});

router.post('/register', function(req, res, next) {
      const username=req.body.username,name=req.body.name,password=req.body.password,age=req.body.age;
      console.log(req.body);
      const mongoose = require('mongoose');
      mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true});
      const db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', function() {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return err; }
            if (user) {
                res.json("Already registered.");
                res.end();
            }else{
                const newUser = User;
                const curUser = new newUser({ name:name,username:username,age:age, password:password });
                curUser.save(function (err) {
                  if (err) return console.error(err);
                  res.json({message:"Successfully registered."});
                 res.end();
                });
            } 
          });
    });
  });

  module.exports = router;
