// function Demo(){
// 	var name;
// 	this.setName = function(thyName) {
// 	    name = thyName
// 	};
//     this.sayName = function() {
// 	    console.log('My name is ' + name);
// 	};
// };
// module.exports = Demo;

var Damo = {}
Demo = module.exports
Demo.name="default"
Demo.sayName = function(){
    console.log('My name is ' + Demo.name);
}
