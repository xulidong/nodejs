var http = require("http");
var url = require("url")
var querystring = require("querystring")
var fs = require("fs");
 
http.createServer(function (request, response) {
	var objQuery = querystring.parse(url.parse(request.url).query);
	if (objQuery.type == "read") {
		fs.readFile("./file.txt", function (error, fileData) {
			if (error) {
				send(response, "<h1>read error</h1>");
			} else {
				send(response, "<h1>the read content:</h1>" + fileData);
			}
		});
	}
	else if (objQuery.type == "write") {
		var writeString = "\n" + Date.now();
		fs.writeFile("./file.txt", writeString, function (error) {
			if (error) {
				send(response, "<h1>write error</h1>");
			} else {
				send(response, "<h1>the write content:</h1>" + writeString);
			}
		});
	}
	else if (objQuery.type == "append") {
		var appendString = "\n" + Date.now();
		fs.appendFile("./file.txt", appendString, function (error) {
			if (error) {
				send(response, "<h1>append error</h1>");
			} else {
				send(response, "<h1>the append content:</h1>" + appendString);
			}
		});
	} else {
		send(response, "<h1>please input the right operation type.</h1>");
	}
}).listen(8080, '192.168.33.98');  
 
function send(response, content) {
	response.writeHead(200, {
		"content-type": "text/html"
	});
	response.write(content);
	response.end();
}