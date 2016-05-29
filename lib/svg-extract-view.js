'use babel';

import { Anchor } from './anchor';
import { FileManager } from './file-manager';
import { CanvasView } from './canvas-view';

export default class SvgExtractView {
	constructor(serializedState, provider) {
		// Create root element

		this.element = document.createElement('div');
		this.element.style.width = (window.innerWidth / 2) + 'px';
		this.element.classList.add('svg-extract');

		this.canvas = new CanvasView(provider);

		this.anchor = new Anchor(this);
		this.element.appendChild(this.anchor.getElement());

		this.fileManager = new FileManager(this.canvas);
		this.element.appendChild(this.fileManager.getElement());
		this.element.appendChild(this.canvas.getElement());

	}

	// Returns an object that can be retrieved when package is activated
	serialize() {}

	// Tear down any state and detach
	destroy() {
		this.element.remove();

		this.canvas.destroy();
	}

	getElement() {
		return this.element;
	}

}
