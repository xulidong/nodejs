console.log(process.argv);
// process.stdout ��׼�������ͬ console
// process.stdin ��׼����������ʼʱ���Ǳ���ͣ�ģ�Ҫ��ӱ�׼�����ȡ���ݣ� �����ָ��������ֶ���д�����¼���Ӧ������
/*
process.stdin.resume(); 
process.stdin.on('data', function(data) { 
	process.stdout.write('read from console: ' + data.toString()); 
});
*/ 
// process.nextTick(callback)�Ĺ�����Ϊ�¼�ѭ������һ������Node.js ���� �´��¼�ѭ������Ӧʱ���� callback��