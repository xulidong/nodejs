var fileManager = require('./fileManager.js');
var utils = require('../util/utils.js');

var handler = module.exports;

var allData = {};

handler.getHandle = function (filename) {
    if(!allData.hasOwnProperty(filename)){
        allData[filename] = fileManager.syscData(filename);
    }
    return allData[filename];
}

handler.saveAll = function (cb) {
    var totalNum = utils.size(allData);
    for(var filename in allData){
        var data = allData[filename];
        fileManager.saveData(filename, data, function(err){
            if (err) {
                console.log('saveAll error:', filename, data);
            }
            --totalNum;
            if (totalNum <= 0 && !!cb) {
                cb();
            }
        });
    }
}

setInterval(handler.saveAll, 30000);