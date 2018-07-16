export default class Document {
	init() {
		this.body();
		this.charset();
	}
	body() {
		const objref = document.body;
		console.info(objref);
	}
	charset() {
		const charset = document.characterSet;
		console.info(charset);
	}
}
