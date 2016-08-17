var handle = require("./reqHandle");
var logger = require('./log.js').logger('comm');
var code = require('./util/code.js')

module.exports.dispatch = dispatch;

var PATH = {}
PATH["/share"] = handle.share;
PATH["/mentor"] = handle.mentor;
PATH["/invited/1758"] = handle.invited1758;

function dispatch(pathname, data, response) {
	response.writeHead(200, {
		'Content-Type': 'text/html; charset=utf-8',
	});

	var handler = PATH[pathname];
	if(!handler) {
        var res = {};
        res.code = code.INVALID_PATH;
        res.msg = ' invalid path:' + pathname;
        logger.info(res.msg);
		return response.end(JSON.stringify(res));
	}
	handler(data, response);
}