export default class EncodeEmail extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		const base64 = atob(this.dataset.email);
		(this.dataset.text)
			? this.innerHTML = `<a href="mailto:${base64}">${this.dataset.text}</a>`
			: this.innerHTML = `<a href="mailto:${base64}">${base64}</a>`
	}
}