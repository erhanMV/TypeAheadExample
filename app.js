var express = require('express');
var http = require('http');

var app = express();
app.configure(function() {
	app.use(express.static(__dirname + '/public'));
});
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});
app.get('/source.json', function(req, res) {
    res.sendfile(__dirname + '/public/source.json');
});
http.createServer(app).listen(8000);