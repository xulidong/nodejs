var signUtils = require('./util/signUtils')
var logger = require('./log.js').logger('comm');
var code = require('./util/code.js')

var handle = module.exports;

var CHANNELS = {
	1758: require('./invited/1758'),
}

handle.checkSign = function(data) {
	var str = signUtils.signStrEqual(data);
	var secret = '704769cace5ea2fd5f0a984bd02ea9a1';
	return data.sign === signUtils.hmacSign(str, secret);
};

/*
 * 邀请者(师傅),游戏调用
 */
handle.share = function(data, response) {
	var res = {};
	res.code = code.OK;
	res.msg = 'success';
	if(!handle.checkSign(data)) {
		res.code = code.INVALID_SIGN;
		res.msg = 'invalid sign:' + data.sign;
		logger.info(res.msg);
		return response.end(JSON.stringify(res));
	}
	var channel = CHANNELS[data.channel];
	if (!channel) {
		res.code = code.INVALID_CHANNEL;
		res.msg = 'invalid channel:' + data.channel;
		logger.info(res.msg);
		return response.end(JSON.stringify(res));
	}
	res.code = channel.saveMentor(data);
	var backStr = JSON.stringify(res);
	logger.info(backStr);
	response.end(backStr);
};

/*
 * 查询师傅(徒弟),游戏调用
 */

handle.mentor = function(data, response) {
	var res = {};
	res.code = code.OK;
	res.msg = 'success';
	if(!handle.checkSign(data)) {
		res.code = code.INVALID_SIGN;
		res.msg = 'invalid sign:' + data.sign;
		logger.info(res.msg);
		return response.end(JSON.stringify(res));
	}
	var channel = CHANNELS[data.channel];
	if (!channel) {
		res.code = code.INVALID_CHANNEL;
		res.msg = 'invalid channel:' + data.channel;
		logger.info(res.msg);
		return response.end(JSON.stringify(res));
	}
	var ret = channel.getMentor(data.inviteeGid);
	if (typeof(ret) === 'number') {
		res.code = ret;
	} else {
		res.mentor = ret;
	}
	var backStr = JSON.stringify(res);
	logger.info(backStr);
	response.end(backStr);
};

/*
 * 被邀请者(徒弟)，渠道调用
 */

handle.invited1758 = function(data, response) {
	var res = {};
	res.code = code.OK;
	res.msg = 'success';

	var channel = CHANNELS['1758'];
	if(!channel.checkSign(data)) {
		res.code = code.INVALID_SIGN;
		res.msg = 'invalid sign:' + data.sign;
		logger.info(res.msg);
		return response.end(JSON.stringify(res));
	}
	res.ret = channel.saveApp(data);

	var backStr = JSON.stringify(res);
	logger.info(backStr);
	response.end(backStr);
};