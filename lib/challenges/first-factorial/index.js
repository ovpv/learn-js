const firstFactorial = num => {
	let factorial = 1;
	for (let i = 1; i <= num; i += 1) {
		factorial = factorial * i;
	}
	console.info(factorial);
	return factorial;
};

export default firstFactorial;
