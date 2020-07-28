var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var users = require('./routes/users');
var entries=require('./routes/entries');
const passport=require('passport');
var app = express();
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
require('./authentication/passport')(passport);

app.use('/api/users', users);
app.use('/api/entries', entries);
module.exports = app;
