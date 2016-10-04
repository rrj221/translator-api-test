var express = require('express');
var router = express.Router();

// Reference the high-level components
var Main = require('../components/Main');
var Search = require('../components/Search'); 
var Saved = require('../components/Saved');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
