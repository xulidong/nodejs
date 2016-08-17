var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
	channel: 1758,
	uid: 10089,
	gid: 1000089
});

var options = {
	host:'127.0.0.1',
	path:'/share',
	port:3101,
	method:'POST',
	headers:{
		'Content-Type':'Application/x-www-form-urlencoded',
		'Content-length':contents.length,
	},
};

var req = http.request(options, function(res){
	res.setEncoding('utf-8');
	var recv = ''
	res.on('data', function(data){
		recv += data;
	});
	res.on('end', function(data){
		console.log(recv);
	});
});

req.write(contents);
req.end();