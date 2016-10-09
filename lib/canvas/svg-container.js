'use babel';

export class SvgContainer {
	constructor(){
		this.element = document.createElement('div');
		this.element.classList.add('svg-container');

		this.position = { x: 0, y : 0};
		this.current_zoom = 0;

		this.element.onclick = function(e){
			if (e.srcElement.classList.contains('mask') || e.srcElement.classList.contains('navigator'))
				return;

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

	set(svg_text){
		this.element.innerHTML = svg_text;

		this.svg = this.element.getElementsByTagName('svg')[0];

		var children = this.svg.getElementsByTagName('*');

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

	navigate(position){
		this.position = position;
		this.svg.style.transform = 'scale3d('+ this.current_zoom +', '+ this.current_zoom +', 1) translate3d('+ this.position.x +'%, '+ this.position.y +'%, 0px)';
	}

	zoom(value){
		this.current_zoom = value / 100;
		this.svg.style.transform = 'scale3d('+ this.current_zoom +', '+ this.current_zoom +', 1) translate3d('+ this.position.x +'%, '+ this.position.y +'%, 0px)';
	}

	getElement(){
		return this.element;
	}
}
