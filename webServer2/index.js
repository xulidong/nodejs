var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.home;
handle["/home"] = requestHandlers.home;
handle["/upload"] = requestHandlers.upload;
handle["/start"] = requestHandlers.start;
handle["/wait"] = requestHandlers.wait;
handle["/quick"] = requestHandlers.quick;

server.start(router.route, handle);