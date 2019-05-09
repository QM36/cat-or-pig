function catOrPig(name, anotherName) {
	let resultObj = {[name]: '', [anotherName]:''};
	if(name === 'qumeng' ||
		name === 'qm' ||
		name === 'kmno2' ||
		name === 'mmz') {
		resultObj[name] = 'cat'
	} else if(name === 'xingbofeng' ||
		name === 'counter' ||
		name === 'counterxing' ||
		name === 'pangzi' ||
		name === 'juju') {
		resultObj[name] = 'pig'
	} else {
		resultObj[name] = 'I do not know him or her!'
	}
	if(anotherName === 'qumeng' ||
		anotherName === 'qm' ||
		anotherName === 'kmno2' ||
		anotherName === 'mmz') {
		resultObj[anotherName] = 'cat'
	} else if(anotherName === 'xingbofeng' ||
		anotherName === 'counter' ||
		anotherName === 'counterxing' ||
		anotherName === 'xbf' ||
		anotherName === 'pangzi' ||
		anotherName === 'juju') {
		resultObj[anotherName] = 'pig'
	} else {
		resultObj[anotherName] = 'I do not know him or her!'
	}
	console.log(resultObj);
	return resultObj;
}
module.exports = catOrPig;
// test
// catOrPig('mmz', 'pangzi'); 