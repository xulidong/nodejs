var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
	var params = url.parse(req.url, true);
	console.log(util.inspect(params));
    console.log(req.connection.remoteAddress);
	res.end(params.query.name);
}).listen(8080);