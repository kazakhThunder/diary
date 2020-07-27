var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var entryModel=require('./model.js');
var passport=require('./passport');
// router.use(bodyParser.urlencoded({
//   extended: true
// }));
// router.use(bodyParser.json);
/* GET users listing. */
router.post('/', function(req, res, next) {
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true});
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    const newEntry = entryModel;
    const curEntry = new newEntry({ entry: req.body.entry,date:req.body.date,title:req.body.title,author:req.body.author });
    curEntry.save(function (err) {
      if (err) return console.error(err);
      res.json("Entry saved.")
    });
});
});

router.get('/', function(req, res, next) {
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true});
  const db = mongoose.connection;
  li=[];
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    entryModel.find(function (err, entry) {
      if (err) return console.error(err);
      for(var i=0;i<entry.length;i++)
      {
        object={"title":entry[i].title,"entry":entry[i].entry,"date":entry[i].date};
        li.push({key:"entry",value:object});
      }
      res.json(JSON.stringify(li));
    })
});
});

module.exports = router;



