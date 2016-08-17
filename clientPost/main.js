var http = require('http');

var contents = {
    cmd: 'get_base_info',
    param: '810'
};

var options = {
    host:'192.168.229.224',
    path:'/',
    port:27182,
    method:'POST',
    headers:{
        'Content-Type':'Application/JSON',
    },
};

var req = http.request(options, function(res){
    res.setEncoding('utf-8');
    var recv = ''
    res.on('data', function(data){
        recv += data;
    });
    res.on('end', function(){
        var recv_data = JSON.parse(recv);
        var status = recv_data['status'];
        var result = recv_data['result'];
        console.log('status', status);
        console.log('result', result);
    });
});

req.write(JSON.stringify(contents));
req.end();