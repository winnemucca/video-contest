var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// app.get('/', indexController.index);
app.get('/', indexController.submitVideo);
app.get('/videoList', indexController.videopage);
app.get('/paired-videos.jade',indexController.chunkArray);
app.post('/formHandle',indexController.submitVideo
	);

var server = app.listen(8477, function() {
	console.log('Express server listening on port ' + server.address().port);
});
