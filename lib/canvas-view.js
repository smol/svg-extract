'use babel';

export class CanvasView {
	constructor(provider){
		this.selected_elements = [];
		this.element = document.createElement('div');
		this.element.classList.add('canvas');

		var self = this;

		this.element.onclick = function(e){
			if (!e.shiftKey){
				for (var i = 0; i < self.selected_elements.length; i++)
					self.selected_elements[i].classList.remove('selected');

				self.selected_elements = [];
			}

			self.selected_elements.push(e.srcElement);

			e.srcElement.classList.add('selected');

			provider.setSelected(self.selected_elements);
		}

		this.element.onmouseover = function(e){

		};

		// this.element.addEventListener('click', function(e) {
		// 	e = e || window.event;
		// 	var target = e.target || e.srcElement;
		// 	console.warn(target);
		//
		// 	e.preventPropagation();
		// }, false);
	}

	setSvg(svg_text){
		this.element.innerHTML = svg_text;

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
