const revString = str => {
	let strArr = str.split('');
	let newArr = [];
	for (let i = strArr.length; i >= 0; i -= 1) {
		newArr.push(strArr[i]);
	}
	newArr.splice(0, 1);
	newArr = newArr.toString();
	newArr = newArr.replace(/,/g, '');
	return newArr;
};

export default revString;
