#!/usr/bin/env node
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let language = process.argv[3]
rl.setPrompt('cop> ');
rl.prompt();

rl.on('line', function(line) {
	let language = line.split(',')[0];
	let name = line.split(',')[1];
    switch(name) {
        case 'exit':
            rl.close();
            break;
        default:
            catOrPig(language, name);
            break;
    }
    rl.prompt();
});

rl.on('close', function() {
    process.exit(0);
});

const cat = ['cat', 'qm', 'mmz', 'qumeng', 'kmno2', '屈萌', '萌妹子'];
const pig = ['pig', 'pangzi', 'counter', 'counterxing', 'xingbofeng', 'juju', '臭猪', '邢博峰'];

function checkType (arg) { //统一检测类型的函数，标准的输出
	let type = Object.prototype.toString.call(arg);
	return type.slice(8, type.length - 1);
}
function checkString(language, string) {
	string.toString(); //可能传入数字类型，所以要统一转换
	if(cat.indexOf(string) > -1) {
		if(language === 'zh') { //我在想这里的判断函数要不要提出去
			console.log(`${string}是猫`);
		} else if(language === 'en') {
			console.log(`${string} is cat`);
		} 
	} else if(pig.indexOf(string) > -1) {
		if(language === 'zh') {
			console.log(`${string}是猪`);
		} else if(language === 'en') {
			console.log(`${string} is pig`);
		}
	} else {
		if(language === 'zh') {
			console.log(`${string}: 我不认识他或者她`);
		} else if(language === 'en') {
			console.log(`${string}: I do not know him or her`);
		}
	}
}
function checkArray(language, arr) {
	arr.forEach(item => { //数组每一项的检测
		if(checkType(item) === 'String' || checkType(item) === 'Number') {
			checkString(language, item);
		} else if(checkType(item) === 'Array'){
			checkArray(language, item);
		} else if(checkType(item) === 'Null' || checkType(item) === 'Undefined') {
			if(language === 'zh') {
				console.log(`${item}: 不标准的输入`);
			} else if(language === 'en') {
				console.log(`${item}: Non-standard input!`);
			}
		}
	});
}
function catOrPig(language, ...args) {
	if(language !== 'zh'&&language !== 'en') {
		console.log(`Please deliver a standard parameter for language. (请传递标准的语言配置参数)`);
		return
	}
	args.forEach(item => {
		let type = checkType(item);
		if(type === 'String' || type === 'Number') {
			checkString(language, item);
		} else if(type === 'Array') {
			checkArray(language, item);
		} else if(type === 'Null' || type === 'Undefined') {
			if(language === 'zh') {
				console.log(`${item}: 不标准的输入`);
			} else if(language === 'en') {
				console.log(`${item}: Non-standard input!`);
			}
		} 
	})
}

module.exports = catOrPig;
// test
// catOrPig('n',['qm','counter','jack'],null); 