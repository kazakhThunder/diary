var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    age:Number,
    password:String,
    name:String
});
const user = mongoose.model('user', userSchema,'users');
module.exports = user;
