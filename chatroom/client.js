var net = require('net');

var HOST = '127.0.0.1';
var PORT = 8080;

var client = new net.Socket();
client.connect(PORT, HOST, function(){
	console.log('connect to ' + HOST + ':' + PORT);
	client.write('connet request from ' + + HOST + ':' + PORT + '\n');
	client.destroy();
});

client.on('close', function(){
	console.log('connetion closed.');
});