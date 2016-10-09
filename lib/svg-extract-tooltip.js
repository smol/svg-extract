'use babel';

export class Tooltip {
	constructor(){
		var self = this;

		this.element = document.createElement('div');
		this.element.classList.add('info');

		this.close_button = document.createElement('div');
		this.close_button.classList.add('close');
		this.close_button.classList.add('fa');
		this.close_button.classList.add('fa-times');

		this.close_button.onclick = function(e){
			self.element.classList.remove('active');
			e.stopPropagation();
		};

		this.element.appendChild(this.close_button);
	}

	getElement(){
		return this.element;
	}

	toggle(svg_element){
		if (svg_element){
			this.element.classList.add('active');
			var parent = this.element.parentElement.getBoundingClientRect();
			var rect = svg_element.getBoundingClientRect();

			this.element.style.top = (rect.top - parent.top + rect.height + 10) + 'px';
			this.element.style.left = (rect.left - parent.left + ((rect.width - 200) / 2)) + 'px';
		} else
			this.element.classList.remove('active');
	}
}
