var http = require('http');

var options = {
	host:'localhost',
	path:'/user?name=xulidong&password=123456',
	port:8080
}

http.get(options, function(res){
	var recv = '';
	res.on('data',function(data){
		recv += data;
	});

	res.on('end', function(){
		console.log(recv);
	})
});