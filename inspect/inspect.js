/*
util.inspect(object,[showHidden],[depth],[colors])��һ�����������ת�� Ϊ�ַ����ķ�����ͨ�����ڵ��Ժʹ�������������ٽ���һ������ object����Ҫת���Ķ���
showHidden ��һ����ѡ���������ֵΪ true�������������������Ϣ��
depth ��ʾ���ݹ�Ĳ������������ܸ��ӣ������ָ�������Կ��������Ϣ�Ķ� �١������ָ��depth��Ĭ�ϻ�ݹ�2�㣬ָ��Ϊ null ��ʾ�����޵ݹ���������������� ���color ֵΪ true�������ʽ������ANSI ��ɫ���룬ͨ���������ն���ʾ��Ư�� ��Ч����
�ر�Ҫָ�����ǣ�util.inspect ������򵥵�ֱ�ӰѶ���ת��Ϊ�ַ�������ʹ�ö� ������toString ����Ҳ������á�
*/

var util = require('util');
function Person(){
	this.name = 'xulidong';
	this.toString = function(){
		return this.name
	};
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));