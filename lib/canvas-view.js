'use babel';

import { Tooltip } from './svg-extract-tooltip';
import { Navigator } from './navigator-view';
import { SvgContainer } from './canvas/svg-container';

export class CanvasView {
	constructor(provider){
		var self = this;

		this.zoom = 100;
		this.position = { x : 0, y : 0 };

		this.selected_elements = [];

		this.element = document.createElement('div');
		this.element.classList.add('canvas');

		this.svg_container = new SvgContainer();
		this.element.appendChild(this.svg_container.getElement());

		this.tooltip = new Tooltip();
		this.navigator = new Navigator(this);

		this.element.appendChild(this.tooltip.getElement());
		this.element.appendChild(this.navigator.getElement());
	}

	navigate(){

	}

	zoomIn(){
		this.zoom += 25;

		this.svg_container.zoom(this.zoom);
		this.navigator.zoom(this.zoom);
	}

	zoomOut(){
		this.zoom -= 25;

		this.svg_container.zoom(this.zoom);
		this.navigator.zoom(this.zoom);
	}

	toggleNavigator(){
		this.navigator.toggle();
	}

	setSvg(svg_text){
		this.svg_container.set(svg_text);
		this.navigator.setContent(svg_text);

		this.zoom = 100;
		this.position = { x : 0, y : 0 };

		this.svg_container.zoom(this.zoom);
		this.navigator.zoom(this.zoom);

		this.svg_container.navigate(this.position);
		this.navigator.navigate(this.position);
	}

	resize(){

	}

	getElement(){
		return this.element;
	}

	destroy(){
		this.element.remove();
	}
}
