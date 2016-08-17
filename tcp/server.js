var net = require('net');

var HOST = '127.0.0.1';
var PORT = 8000;

var server = net.createServer(function(client) {
    console.log('connect from: ' + client.remoteAddress + ' : ' + client.remotePort);

    client.on('end', function() {
        console.log('client disconnected');
    });

    client.on('data', function(data){
        console.log(client.remoteAddress + ' data: ' + data);
        client.write('msg from server.\r\n');
        client.pipe(client);
    });

    client.on('close', function(data){
        console.log('connect close: ' + data);
    });

    client.on('error', function(err){
        console.log(err);
    });
});

server.on('error', function(err){
    console.log(err);
    if (e.code == 'EADDRINUSE') {
        console.log('Address in use, retrying...');
        setTimeout(function () {
          server.close();
          server.listen(PORT, HOST);
        }, 1000);
    }
});

server.listen(PORT, HOST, function() {
    var address = server.address();
    console.log('Server listening on ' + JSON.stringify(address));
});
