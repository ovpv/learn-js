export default class Document {
	init() {
		this.body();
		this.charset();
		this.childCount();
		this.children();
		this.compat();
		this.contentType();
		this.currentScript();
		this.defaultView();
		// this.designMode();
		this.contentEditable();
		this.dir();
		this.doctype();
		this.documentElement();
		this.documentURI();
		this.domain();
		this.embed();
		this.firstChildElement();
		this.forms();
		this.fullscreenEnabled();
		this.head();
		this.images();
	}
	body() {
		const body = document.body;
		console.info(body);
	}
	head() {
		const head = document.head;
		console.dirxml(head);
	}
	charset() {
		const charset = document.characterSet;
		console.info(charset);
	}
	childCount() {
		const body = document.childElementCount;
		console.info(body);
	}
	children() {
		const children = document.children;
		console.dir(children);
	}
	compat() {
		const compat = document.compatMode;
		console.info(compat);
	}
	contentType() {
		const contentType = document.contentType;
		console.info(contentType);
	}
	currentScript() {
		const currScript = document.currentScript;
		console.info(currScript);
	}
	defaultView() {
		const defaultView = document.defaultView;
		console.dir(defaultView);
	}
	designMode() {
		document.designMode = 'on';
		console.info(document.designMode);
	}
	contentEditable() {
		const el = document.querySelector('.heading');
		el.contentEditable = true;
		console.info(el.contentEditable);
	}
	dir() {
		const dir = 'rtl';
		document.dir = dir;
		console.info(document.dir);
	}
	doctype() {
		const doctype = document.doctype;
		console.dir(doctype);
	}
	documentElement() {
		const root = document.documentElement;
		console.dirxml(root);
	}
	documentURI() {
		const uri = document.documentURI;
		console.info(uri);
	}
	domain() {
		const domain = document.domain;
		console.info(domain);
	}
	embed() {
		const embeds = document.embeds;
		console.dirxml(embeds);
	}
	firstChildElement() {
		const body = document.querySelector('body');
		const firstel = body.firstElementChild;
		console.dirxml(firstel);
	}
	forms() {
		const forms = document.forms;
		console.dirxml(forms);
	}
	fullscreenEnabled() {
		const enabled = document.webkitIsFullScreen;
		console.info(enabled);
	}
	images() {
		const images = document.images;
		console.dir(images);
	}
}
