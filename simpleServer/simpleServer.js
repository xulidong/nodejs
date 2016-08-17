/*
var http = require('http');

var server = new http.Server();
var onRequest = function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>Node.js</h1>');
	res.end('<p>Hello World</p>');
}
server.on('request', onRequest);
server.listen(3000);
console.log("HTTP server is listening at port 3000."); 
*/
// 可以简写如下：
var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end('Hello World!\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');