var Package = module.exports;

var PKG_HEAD_BYTES = 4;

Package.encode = function(type, data) {
    var body = new Buffer(JSON.stringify(data));
    var length = body.length;
    var buffer = new Buffer(PKG_HEAD_BYTES + length);

    // head
    buffer[0] = type;
    buffer[1] = (length >> 16) & 0xff;
    buffer[2] = (length >> 8) & 0xff;
    buffer[3] = length & 0xff;

    // body
    var index = 4;
    var i = 0;
    while (i < length) {
        buffer[index++] = body[i++];
    }

    return buffer;
};

Package.decode = function(buffer) {
    // head
    var type = buffer[0];
    var length = (buffer[1] << 16) | (buffer[2] << 8) | (buffer[3]);

    // body
    var body = new Buffer(length);
    buffer.copy(body, 0, 4, length + 4);
    var msg = {
        type: type,
        body: JSON.parse(body.toString())
    };

    return msg;
};

/*function test(){
    var data = {
        key: 'val'
    };
    var buf = Package.encode(10, data);
    console.log(buf);

    var msg = Package.decode(buf);
    console.log(msg);
}
test();*/