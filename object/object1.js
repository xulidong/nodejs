var foo1 = {};
foo1['prop1'] = 'bar';
foo1['prop2'] = false;
foo1['prop3'] = function(){
	return 'hello world';
};

var key = 'prop2';
console.log(foo1['prop2']);
console.log(foo1.key);// 相当于foo1.'prop2'，正确的格式应该是foo1.prop2
console.log(foo1.prop2);
console.log(foo1[key]);

var foo2 = {
	// 对象属性名称是否加引号是可选的，
	// 除非属性名称中有空格或者其他可能造成歧义的字符，
	// 否则没有必要使用引号
	'prop1': 'bar',
	prop2: false,
	prop3: function(){
		return 'hello world';
	}
};

// 以上方法都是直接创建了一个对象

function User(name, age){
	this.name = name;
	this.age = age;
	this.showName = function(){
		console.log(this.name);
	};
}

var usr1 = new User('xulidong', 25);
usr1.showName();
var usr2 = new User('jun', 25);
usr2.showName();
