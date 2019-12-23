/*
 * @title App
 * @description Application entry point
 */

// Polyfills
import 'Utils/_closest.polyfill.js';
import 'Utils/_matches.polyfill.js';

// Misc
// Use log() instead of console.log()
// const log = console.log.bind(console);

// Components
import smoothScroll from 'Components/smooth-scroll';
import encodeValue from 'Components/custom_elements/encodeValue';

document.addEventListener('DOMContentLoaded', () => {

	// Components
	smoothScroll();

	//Custom Elements
	window.customElements.define('encode-value', encodeValue);
});