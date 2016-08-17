var utils = module.exports;

utils.timestamp = function() {
    return Math.floor(new Date().getTime() / 1000);
};

utils.size = function(obj) {
    if (!obj) {
        return 0;
    }

    var size = 0;
    for (var f in obj) {
        if (obj.hasOwnProperty(f)) {
            size++;
        }
    }

    return size;
};