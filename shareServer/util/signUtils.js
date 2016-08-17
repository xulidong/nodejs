var crypto = require('crypto');

var utils = module.exports;

utils.signStrAndEqual = function(params) {
    var str = "";
    Object.keys(params).sort().forEach(function(key) {
        if (key === 'sign') {
            return;
        }

        if (!str.length) {
            str = key + "=" + params[key];
        }else {
            str += ("&" + key + "=" + params[key]);
        }
    });
    return str;
};

utils.signStrEqual = function(params) {
    var str = "";
    Object.keys(params).sort().forEach(function(key) {
        if (key === 'sign') {
            return;
        }

        if (!str.length) {
            str = key + "=" + params[key];
        }else {
            str += (key + "=" + params[key]);
        }
    });
    return str;
};

utils.signStrAnd = function(params) {
    var str = "";
    Object.keys(params).sort().forEach(function(key) {
        if (key === 'sign') {
            return;
        }

        var val = (!!params[key]) ? params[key] : "";
        if (!str.length) {
            str = key + "&" + val;
        } else {
            str += (key + "&" + val);
        }
    });
    return str;
};

utils.md5Sign = function(str, secret) {
    str += secret;
    var buf = new Buffer(str);
    str = buf.toString('binary');
    return crypto.createHash('md5').update(str).digest('hex');
};

utils.sha1Sign = function(str, secret) {
    str += secret;
    return crypto.createHash('sha1').update(str).digest('hex');
};

utils.hmacSign = function(str, secret) {
    str += secret;
    return crypto.createHmac('sha1', secret).update(str).digest('base64');
};
