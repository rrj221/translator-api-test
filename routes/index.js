var express = require('express');
var router = express.Router();
var axios = require('axios');
var translate = require('yandex-translate')('trnsl.1.1.20161001T021445Z.1b7df2e80a455a66.3994daff49605b8440ef8870db72268bebd2b91a');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/text', function(req, res) {
	// res.render('index', { title: 'Express' });
	translate.translate('You can burn my house, steal my car, drink my liquor from an old fruitjar.', { to: 'ru' }, function(err, response) {
	  res.send(response.text);
	});
})

module.exports = router;
