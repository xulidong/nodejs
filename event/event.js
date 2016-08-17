// 得到EventEmitter对象
var EventEmitter = require('events').EventEmitter;
var eventEmitter = new EventEmitter();
var eventEmitter1 = new EventEmitter();

var EVENT_NAME = 'some_event'; // 事件名

// **********************************************************
// 注册一个事件some_event
// **********************************************************
// 回调函数
var callback = function(arg1, arg2){
    console.log(EVENT_NAME + ' listener1' + arg1 + ' ' + arg2);
};
// 参数1：事件名，参数2：回调函数
eventEmitter.on(EVENT_NAME, callback);

var callback1 = function(arg1, arg2){
    console.log(EVENT_NAME + ' listener2' + arg1 + ' ' + arg2);
};
eventEmitter1.on(EVENT_NAME, callback1);

单次事件，监听器最多只会触发一次，触发后立刻解除该监听器
eventEmitter.once(EVENT_NAME,function(arg1, arg2){
    console.log(EVENT_NAME + ' listener2' + arg1 + ' ' + arg2);
});


// **********************************************************
// 利用延时函数，触发事件
// **********************************************************
setTimeout(function(){
    eventEmitter.emit(EVENT_NAME, 'One', 1);
    eventEmitter1.emit(EVENT_NAME, 'TWO', 2);
},1000);

setTimeout(function(){
    eventEmitter.emit(EVENT_NAME, 'Two', 2);
},2000);

// 移除事件
setTimeout(function(){
  console.log('remove');
  eventEmitter.removeListener(EVENT_NAME, callback);// 移除事件指定的监听器
  eventEmitter.removeAllListeners(EVENT_NAME);// 移除事件的所有监听器
},3000);

// error 事件：EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并打印调用栈。
// 所以一般要为会发射 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃