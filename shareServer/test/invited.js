var http = require('http');
var querystring = require('querystring');
var signUtils = require('../util/signUtils');
var utils = require('../util/utils');

var contents = {
	appKey: 'f01b1f08817d1336dea92483694d63d6',
	gid: 1,
	inviteeGid: 2,
	inviteeNickname: 'myNickname',
	createTime: String(utils.timestamp()),
	state:'1758',
};
var str = signUtils.signStrAndEqual(contents);
var secret = '704769cace5ea2fd5f0a984bd02ea9a1';
contents.sign = signUtils.md5Sign(str, secret);
contents = querystring.stringify(contents);

var local = '127.0.0.1';
var h126 = '192.168.10.126';
var h150 = '223.252.221.150';
var hurl = 'wkgl.163.com';
var options = {
	host:local,
	path:'/invited/1758',
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

req.on('error', function(err){
	console.log(err);
});

req.write(contents);
req.end();