'use babel';

import { Tooltip } from './svg-extract-tooltip';
import { Navigator } from './navigator-view';

export class CanvasView {
	constructor(provider){
		this.selected_elements = [];
		this.element = document.createElement('div');
		this.element.classList.add('canvas');

		var self = this;

		this.tooltip = new Tooltip();
		this.navigator = new Navigator();

		this.element.onclick = function(e){
			if (!e.shiftKey){
				for (var i = 0; i < self.selected_elements.length; i++)
					self.selected_elements[i].classList.remove('selected');

				self.selected_elements = [];
			}

			if (self.selected_elements[0] === e.srcElement){
				self.selected_elements[0] = null;
				e.srcElement.classList.remove('selected');
				provider.setSelected(self.selected_elements);
				return;
			}

			self.selected_elements.push(e.srcElement);
			self.tooltip.toggle(e.srcElement);
			e.srcElement.classList.add('selected');
			provider.setSelected(self.selected_elements);
		};

		this.element.onmouseover = function(e){

		};
	}

	toggleNavigator(){
		this.navigator.toggle();
	}

	setSvg(svg_text){
		this.element.innerHTML = svg_text;
		this.element.appendChild(this.tooltip.getElement());
		this.element.appendChild(this.navigator.getElement());

		this.navigator.setContent(svg_text);

		var children = this.element.getElementsByTagName('*');

		for (var i = 0; i < children.length; i++) {
			children[i].onmouseover = function(e){
				e.srcElement.classList.add('hover');
				e.stopPropagation();
			};

			children[i].onmouseleave = function(e){
				e.srcElement.classList.remove('hover');
			};
		}
	}

	getElement(){
		return this.element;
	}

	destroy(){
		this.element.remove();
	}
}
