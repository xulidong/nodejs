var net = require('net');

var HOST = '127.0.0.1';
var PORT = 8080;

var chatServer = net.createServer();
var clientList = [];

chatServer.on('connection', function(client){
	client.name = client.remoteAddress + ':' + client.remotePort;
	console.log('connect request from ' + client.name)

	client.setTimeout(5*1000);

	client.write('Hi!\n');
	clientList.push(client);

	client.on('data', function(data){
		broadcast(data, client);
	});

	client.on('end', function(){
		clientList.splice(clientList.indexOf(client), 1);
	});

	client.on('close', function() {
  		console.log('close:' + client.name);
	});

	client.on('timeout',function(){
    	client.end();
	})

	client.on('error', function(error) {
  		console.log(error);
  		connection.end();
	});
});

function broadcast(message, client){
	var cleanup = [];
	for(var i = 1; i < clientList.length; i++){
		if(client !== clientList[i]){
			if (clientList[i].writable){
				clientList[i].write(client.name + ' says:' + message);
			} else {
				cleanup.push(clientList[i]);
				clientList[i].destroy()
			}
		}
	}
	for (var i = 0; i < cleanup.length; i++) {
		clientList.splice(clientList.indexOf(cleanup[i]), 1);
	};
}

chatServer.listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);