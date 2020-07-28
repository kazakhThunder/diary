var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const entrySchema = new mongoose.Schema({
    entry: String,
    date: { type: Date, default: Date.now },
    title: String,
    author:String
});
const newEntry = mongoose.model('newEntry', entrySchema,'userEntries');
module.exports = newEntry;
