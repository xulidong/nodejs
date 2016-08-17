var http = require('http');

var options = {
	host:'192.168.10.126',
	path:'/code_active?code=tstyeulcaho&user=test&host=test',
	port:50400
}

http.get(options, function(res){
	var recv = '';
	res.on('data',function(data){
		recv += data;
	});

	res.on('end', function(){
		console.log(recv);
	})
}).on('error', function(e) {
	console.log("error: " + e.message);
});