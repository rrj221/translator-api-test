var express = require('express');
var router = express.Router();

// Reference the high-level components
// var Main = require('/app/components/Main');
// var Search = require('/app/components/Search'); 
// var Saved = require('/app/components/Saved');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
