var http = require("http");

var onRequest = function(req, res) {
	// home page
	if (req.url == "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end("Welcome to the homepage!");
	}
	// about page
	else if (req.url == "/about") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end("Welcome to the about page!");
	}
	// 404 error
	else {
		res.writeHead(404, { "Content-Type": "text/plain" });
		res.end("404 error! File not found.");
	}
};

var port = 8080;
var host = '192.168.33.98';
http.createServer(onRequest).listen(port, host);