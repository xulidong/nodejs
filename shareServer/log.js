var fs = require('fs');
var path = require('path');
var log4js = require('log4js');

var dirPath = __dirname;
dirPath = path.join(dirPath, 'logs');
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

log4js.configure({
    appenders: [{
        type: 'console'
    }, {
        type: 'file',
        filename: 'logs/comm.log',
        maxLogSize: 1048576,
        category: 'comm'
    }]
});

exports.logger = function(name) {
    var logger = log4js.getLogger(name);
    return logger;
}