'use babel';

export class CanvasView {
	constructor(provider){
		this.selected_elements = [];
		this.element = document.createElement('div');
		this.element.classList.add('canvas');

		this.element.onclick = function(e){
			e.srcElement.classList.add('selected');

			provider.setSelected(e.srcElement.attributes);
		}

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
	}

	getElement(){
		return this.element;
	}

	destroy(){
		this.element.remove();
	}
}
