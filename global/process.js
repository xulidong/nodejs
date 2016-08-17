console.log(process.argv);
// process.stdout 标准输出流，同 console
// process.stdin 标准输入流，初始时它是被暂停的，要想从标准输入读取数据， 你必须恢复流，并手动编写流的事件响应函数。
/*
process.stdin.resume(); 
process.stdin.on('data', function(data) { 
	process.stdout.write('read from console: ' + data.toString()); 
});
*/ 
// process.nextTick(callback)的功能是为事件循环设置一项任务，Node.js 会在 下次事件循环调响应时调用 callback。