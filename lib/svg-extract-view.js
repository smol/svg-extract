'use babel';

import { Anchor } from './anchor';
import { Toolbar } from './toolbar';
import { CanvasView } from './canvas-view';
import { FileManager } from './file-manager';

export default class SvgExtractView {
	constructor(serializedState, provider) {
		// Create root element
		var self = this;

		this.element = document.createElement('div');
		this.element.style.width = (window.innerWidth / 2) + 'px';
		this.element.classList.add('svg-extract');

		this.canvas = new CanvasView(provider);

		this.anchor = new Anchor(this);
		this.element.appendChild(this.anchor.getElement());

		this.fileManager = new FileManager(this.canvas);

		this.toolbar = new Toolbar(this.fileManager);
		this.toolbar.zoom.canvas = self.canvas;

		this.toolbar.navigatorToggle = function(){ self.canvas.toggleNavigator(); };

		this.element.appendChild(this.toolbar.getElement());
		this.element.appendChild(this.canvas.getElement());
	}

	resize(){
		this.canvas.navigator.resize();
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
