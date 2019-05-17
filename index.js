const cat = ['cat', 'qm', 'mmz', 'qumeng', 'kmno2'];
const pig = ['pig', 'pangzi', 'counter', 'counterxing', 'xingbofeng'];

function checkType (arg) { //有一点疑问就是这里的checkType函数是否有必要
	let type = Object.prototype.toString.call(arg); 
	if(type === '[object Null]') {
		return 'Null'
	} else if(type === '[object Undefined]') {
		return 'Undefined'
	} else if(type === '[object String]') { //传入一个字符串
		return 'String'
	} else if(type === '[object Array]') { //传入一个数组
		return 'Array'
	} else if(type === '[object Number]') {
		console.log('WARNING：The input type will be forcibly converted to a string!')
		return 'String'
	}
}
function checkString(string) {
	string.toString();
	if(cat.indexOf(string) > -1) {
		console.log(string + ' is cat');
	} else if(pig.indexOf(string) > -1) {
		console.log(string + ' is pig');
	} else {
		console.log(string + ': I do not know him or her');
	}
}
function checkArray(arr) {
	arr.forEach(item => { //数组每一项的检测
		if(checkType(item) === 'String') {
			checkString(item);
		} else if(checkType(item) === 'Array'){
			checkArray(item);
		} else if(checkType(item) === 'Null' || checkType(item) === 'Undefined') {
			console.log('Non-standard input!');
		}
	});
}
function catOrPig() {
	for(let i = 0; i < arguments.length; i++) {
		let type = checkType(arguments[i]);
		if(type === 'String') {
			checkString(arguments[i]);
		} else if(type === 'Array') {
			checkArray(arguments[i]);
		} else if(type === 'Null' || type === 'Undefined') {
			console.log('Non-standard input!')
		} 
	}
	
}
module.exports = catOrPig;
// test
// catOrPig(['qm','qumeng','counter']); 