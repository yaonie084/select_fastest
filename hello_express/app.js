var express = require('express');
var redis = require('redis');
var client = redis.createClient(6379);
var cool = 0;
var app = express();

client.set("foo", 0);

app.get('/hello', function(req, res){

	client.get("foo", function(err, reply){

		console.log(reply);
		cool = reply;
		client.set("foo", parseInt(reply)+1)
	})

	
	res.send('Hello World peipeipei!\n' + cool);
});

app.get('/', function(req, res){	
	res.send('Hello World index!\n');
});

var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});