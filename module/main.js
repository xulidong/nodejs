var Demo1 = require('./module');
Demo1.name = 'aaaa';
// a = new Demo1;
// a.setName('aaaa');

var Demo2 = require('./module');
Demo2.name = 'bbbb';
// b = new Demo2;
// b.setName('bbbb');

// a.sayName();
// b.sayName();

if (Demo1 === Demo2){
    console.log('===')
}

Demo1.sayName();
Demo2.sayName();