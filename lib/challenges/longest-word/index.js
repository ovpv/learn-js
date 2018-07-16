const longestWord = str => {
	let largest = '';
	let newstr = str.replace(/[^a-zA-Z0-9 ]/g, '');
	newstr = newstr.split(' ');
	newstr.map((singleStr, index) => {
		if (singleStr.length > largest.length) {
			largest = singleStr;
		}
	});
	return largest;
};

export default longestWord;
