// exec 可以从 Node.js 来执行一个 shell 命令
var exec = require("child_process").exec;

var querystring = require("querystring");

function home(response, postData) {
	console.log("Request handler 'home' was called.");
	var body = '<html>' +
		'<head>' +
		'<meta http-equiv="Content-Type" content="text/html; ' +
		'charset=UTF-8" />' +
		'</head>' +
		'<body>' +
		'<form action="/upload" method="post">' +
		'<textarea name="text" rows="20" cols="60"></textarea>' +
		'<input type="submit" value="Submit text" />' +
		'</form>' +
		'</body>' +
		'</html>';
	response.writeHead(200, {
		"Content-Type": "text/html"
	});
	response.write(body);
	response.end();
}

function upload(response, postData) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});
	response.write("You've sent the text: " +
		querystring.parse(postData).text);
	response.end();
}

function start(response, postData) {
	console.log("Request handler 'start' was called.");
	// 一个既简单又实用的非阻塞操作：exec()
	exec("ls -lah", function(error, stdout, stderr) {
		response.writeHead(200, {
			"Content-Type": "text/plain"
		});
		response.write(stdout);
		response.end();
	});
}

// wait 处理程序中耗时的操作不会阻塞对quick 请求作出立即响应
function wait(response, postData) {
	console.log("Request handler 'wait' was called.");
	exec("find /", {
			timeout: 10000,
			maxBuffer: 20000 * 1024
		},
		function(error, stdout, stderr) {
			response.writeHead(200, {
				"Content-Type": "text/plain"
			});
			response.write(stdout);
			response.end();
		});
}

function quick(response, postData) {
	console.log("Request handler 'quick' was called.");
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});
	response.write("Hello Quick");
	response.end();
}

exports.home = home;
exports.upload = upload;
exports.start = start;
exports.wait = wait;
exports.quick = quick;