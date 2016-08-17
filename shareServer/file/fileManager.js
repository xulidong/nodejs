var fs = require('fs');
var path = require('path');

var manager = module.exports;

var DBNAME = 'data';
var rootPath = __dirname;
manager.getRootPath = function(){
    return path.join(rootPath, DBNAME);
}

manager.setRootPath = function(path){
    rootPath = path;
}

manager.getPath = function(fileName) {
    var dirPath = this.getRootPath();
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }

    return path.join(dirPath, fileName + '.json');
};

manager.syscData = function(fileName) {
    var filepath = this.getPath(fileName);
    if (!fs.existsSync(filepath)) {
        return {};
    }

    var fileString = fs.readFileSync(filepath);
    if (fileString.length <= 0) {
        return {}
    }

    try {
        return JSON.parse(fileString);
    } catch (e) {
        console.log('syscData error:', e);
        return {};
    }
};

manager.saveData = function(fileName, json, cb) {
    var filepath = this.getPath(fileName);
    var str = JSON.stringify(json);
    fs.writeFile(filepath, str, function(err) {
            cb(err);
    });
};