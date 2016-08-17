var http = require('http');
var querystring = require('querystring');

http.createServer(function(req, res){
	var post = '';

	req.on('data', function(chunk){
		post += chunk
	});

	req.on('end', function(){
		post = querystring.parse(post)
		if (login(post.name,post.password)) {
			res.write('Welcome');
		} else {
			res.write('username or password is wrong.');
		}

		res.end();
	});
}).listen(8080);

function login(name, password){
	return name === 'xulidong' && password === '123456';
}