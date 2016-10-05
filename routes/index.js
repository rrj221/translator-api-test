var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var translate = require('yandex-translate')('trnsl.1.1.20161001T021445Z.1b7df2e80a455a66.3994daff49605b8440ef8870db72268bebd2b91a');

// Reference the high-level components
// var Main = require('/app/components/Main');
// var Search = require('/app/components/Search'); 
// var Saved = require('/app/components/Saved');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/text', function(req, res) {
	// res.render('index', { title: 'Express' });
	translate.translate('You can burn my house, steal my car, drink my liquor from an old fruitjar.', { to: 'ru' }, function(err, response) {
	  res.send(response.text);
	});
});

router.get('/news', function(req, res) {

	//search for news with query of 'election'
	unirest.get("https://webhose.io/search?token=62bbc47b-2985-4449-ae34-54b112e8108c&format=json&q=election")
	.header("Accept", "text/plain")
	.end(function (result) {
	    console.log(result.status, result.headers, result.body);
	    res.send(result.body);
	});
});

router.get('/news/more-advanced', function(req, res) {
	//do a search for articles from german in german for 'syria' do not include discussions and limit to one day ago
	unirest.get("https://webhose.io/search?token=62bbc47b-2985-4449-ae34-54b112e8108c&format=json&q=syria%20language%3A(german)%20thread.country%3ADE%20(site_type%3Anews%20OR%20site_type%3Ablogs)&ts=1475268929067")
	.header("Accept", "text/plain")
	.end(function (result) {
	    console.log(result.status, result.headers, result.body);
	    res.send(result.body);
	});
})

module.exports = router;
