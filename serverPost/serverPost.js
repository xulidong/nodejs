/*
var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req, res){
    var post = ''; 
    req.on('data', function(chunk){
        post += chunk;
    });
    req.on('end', function(){
        post = querystring.parse(post);
		console.log(post);
        res.end(util.inspect(post));
    });
}).listen(3000);
*/

/*
var http = require('http');

http.createServer(function (req, res) {
  var content = "";

  req.on('data', function (chunk) {
    content += chunk;
  });

  req.on('end', function () {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("You've sent: " + content);
    res.end();
  });

}).listen(3000);
*/

var http = require('http');
var querystring = require('querystring');
http.createServer(function (request, response) {
	var responseString = '';
	response.writeHead(200, {'content-type': 'text/html'});
 
	// 如果是get请求
	var postData = "";
	if (request.method == "GET") {
		responseString = '<!doctype html><html lang="en">\
		<head><meta charset="UTF-8" />\
			<title>Document</title>\
		</head>\
		<body>\
			<form action="/" method="post">\
				<input type="text" name="name" value="xulidong" />\
				<input type="text" name="password" value="123456" />\
				<input type="text" name="code" value="abc123" />\
				<input type="submit" value="submit" />\
			</form>\
		</body>\
		</html>';
 
		response.write(responseString);
 
		response.end();
	} else if (request.method == "POST") {
		request.setEncoding("utf8");
		
		request.addListener("data", function (postDataChunk) {
			postData += postDataChunk;
		});
 
		request.addListener("end", function () {
			var objectPostData = querystring.parse(postData);
			for (var i in objectPostData) {
				responseString += i + " => " + objectPostData[i] + "<br>";
			}
			response.write(responseString);
			response.end();
		});
	}
}).listen(8080, '192.168.33.98');