var http = require("http");
var url = require("url");
var querystring = require("querystring");
 
http.createServer(function (request, response) {
	var objectUrl = url.parse(request.url);
	var objectQuery = querystring.parse(objectUrl.query);
 
	response.writeHead(200, {"content-type": "text/html"});
 
	response.write("<h1>objectUrl</h1>");
	for (var i in objectUrl) {
		if (typeof (objectUrl[i]) != "function") 
			response.write(i + ":" + objectUrl[i] + "<br>");
	}
 
	response.write("<h1>objectQuery</h1>");
	for (var i in objectQuery) {
		response.write(i + ":" + objectQuery[i] + "<br>");
	}
 
	response.end();
}).listen(8080, '192.168.33.98');