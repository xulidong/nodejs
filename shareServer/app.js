var http = require('http');
var url = require('url');
var querystring = require('querystring');
var logger = require('./log.js').logger('comm');
var dbHandle = require('./file/dbHandle.js');

var fileManager = require('./file/fileManager.js');
fileManager.setRootPath(__dirname);

var LISTEN_PORT = 3101;
var route = require("./route");

http.createServer(function(request, response) {
	request.setEncoding('utf-8');
	var recvData = '';
	request.on('data', function(chunk) {
		recvData += chunk
	});

	request.on('end', function() {
		var data = querystring.parse(recvData)
		var pathname = url.parse(request.url).pathname;
		logger.info(pathname, recvData);
		route.dispatch(pathname, data, response);
	});

}).listen(LISTEN_PORT, function() {
	logger.info('share server start,listen port:', LISTEN_PORT);
});

process.on('exit', function(code) {
	dbHandle.saveAll();
	logger.info('exit with code: ' + code);
});

process.on('uncaughtException', function(err) {
  	logger.info('Caught exception error: ' + err);
  	logger.info('Caught exception stack: ' + err.stack);
});

process.on('SIGTERM',function(){
    logger.info('Go a SIGTERM, exiting');
    process.exit(0);
})
