var net = require('net');

var client = net.connect({ host: '127.0.0.1', port: 8000}, function() {
        console.log('connected to server.');
        client.write('msg from client.\r\n');
    });

client.on('data', function(data) {
    console.log(data.toString());
    client.end();
});

client.on('end', function() {
    console.log('disconnected from server.');
});

client.on('error', function(err) {
    console.log(err);
});