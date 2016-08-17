// Object.prototype 是所有对象的祖先，
// Function.prototype 是所有函数的原型，包括构造函数.

Object.prototype.name = 'My Object';
var obj = new Object();
console.log(obj.name); // 输出 My Object

function Foo() {}
Foo.prototype.name = 'Bar';
var foo = new Foo();
console.log(foo.name); // 输出 Bar
console.log(foo.__proto__.name); // 输出 Bar
console.log(foo.__proto__.__proto__.name); // 输出 My Object
console.log(foo.__proto__.constructor.prototype.name); // 输出 Bar