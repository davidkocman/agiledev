export default class EncodeValue extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		if (this.dataset.email) {
			const base64 = atob(this.dataset.email);
			(this.dataset.text)
				? this.innerHTML = `<a href="mailto:${base64}">${this.dataset.text}</a>`
				: this.innerHTML = `<a href="mailto:${base64}">${base64}</a>`
		} else if (this.dataset.phone) {
			const base64 = atob(this.dataset.phone);
			(this.dataset.text)
				? this.innerHTML = `<a href="tel:${base64}">${this.dataset.text}</a>`
				: this.innerHTML = `<a href="tel:${base64}">${base64}</a>`
		}
	}
}