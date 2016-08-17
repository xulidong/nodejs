/*process是一个全局变量，可以直接调用。
process的属性，如下：
version：包含当前node实例的版本号；
installPrefix：包含安装路径；
platform：列举node运行的操作系统的环境，只会显示内核相关的信息，如：linux2， darwin，而不是“Redhat ES3” ，“Windows 7”，“OSX 10.7”等；
pid：获取进程id；
title：设置进程名称；
execPath：当前node进程的执行路径，如：/usr/local/bin/node；
memoryUsage()：node进程内存的使用情况，rss代表ram的使用情况，vsize代表总内存的使用大小，包括ram和swap；
heapTotal,process.heapUsed：分别代表v8引擎内存分配和正在使用的大小。
argv：这是一个数组，数组里存放着启动这个node.js进程各个参数和命令代码；
uptime()：包含当前进程运行的时长（秒）；
getgid()：获取或者设置group id；
setuid()：获取或者设计user id；
cwd()：当前工作目录；
exit(code=0)：kill当前进程；
kill(pid, signal='SIGTERM')：发出一个kill信号给指定pid；
nextTick(callback)：异步执行callback函数；
umask([mask]) ：设置进程的user mask值；
*/

/*
var http = require('http');
var s = http.createServer(function(req, res) {
　　res.writeHead(200, {});
　　res.end('foo');
　　console.log('http response');
　　process.nextTick(function(){console.log('tick')});
});
s.listen(8000);
*/

/*
process.on('uncaughtException', function(e) {
　　console.log(e);
});
process.nextTick(function() {
　　console.log('tick');
});
process.nextTick(function() {
　　iAmAMistake();
　　console.log('tock');
});
process.nextTick(function() {
　　console.log('tick tock');
});
console.log('End of 1st loop');
*/

/*
var cp = require('child_process');
cp.exec('ls -l', function(e, stdout, stderr) {
　　if(!e) {
　　　　console.log(stdout);
　　　　console.log(stderr);
　　}
});
*/

/*
var options = {
    encoding: 'utf8',
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: 'SIGTERM',
    setsid: false,
    cwd: null,
    env: null
};


var cp = require('child_process');
cp.exec('ls -l', options, function(e, stdout, stderr) {
　　if(!e) {
　　　　console.log(stdout);
　　　　console.log(stderr);
　　}
});
*/

/*
var cp = require('child_process');
var cat = cp.spawn('cat');
cat.stdout.on('data', function(d) {
　　console.log(d.toString());
});
cat.on('exit', function() {
　　console.log('exit');
});
cat.stdin.write('test text');
cat.stdin.end();
*/

/*
事件
exit: 当process退出时触发
uncaughtException: 异常事件,使本node.js进程中断的异常
Signal: 自定义事件
例如：
process.on('SIGNAL_ONE', function(data){
    console.log(data);
    process.exit(0);
});//监听自定义事件
process.emit('SIGNAL_ONE', 'Bye');// 触发自定义事件


控制台
process.stdout 控制台输出流
process.stdin 控制台输入流
*/

/*
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
  process.stdout.write('data: ' + chunk);
});
process.stdin.on('end', function () {
  process.stdout.write('end');
});
*/
/*
输入的命令和输出:
$ node test.js
ffff
data: ffff
*/
/*
子进程
child_process模块提供了四个创建子进程的函数，分别是spawn，exec，execFile和fork。
其中spawn是最原始的创建子进程的函数，其他三个都是对spawn不同程度的封装。

spawn只能运行指定的程序，参数需要在列表中给出，相当于execvp系统函数；
而exec可以直接运行复杂的命令。
原型如下：
child_process.spawn(command, [args], [options]);
child_process.exec(command, [options], callback);

exec的实现原理是启动了一个系统shell来解析参数。
fork函数用于直接运行Node.js模块，在父进程与子进程直接建立一个IPC管道，用于父子进程之间的通信。
*/