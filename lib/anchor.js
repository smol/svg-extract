'use babel';

export class Anchor {
	constructor(parent){
		this.element = document.createElement('div');
		this.element.classList.add('anchor');

		var start_position = 0;
		var button_pressed = false;
		var container = parent.getElement();


		this.element.addEventListener('mousedown', function(evt){
			button_pressed = true;
		});

		document.addEventListener('mousemove', function(evt){
			if (button_pressed){
				container.style.width = (window.innerWidth - evt.x) + 'px';
				parent.resize();
			}
		});

		document.addEventListener('mouseup', function(evt){
			button_pressed = false;
		});
	}

	serialize() {}

	// Tear down any state and detach
	destroy() {
		this.element.remove();
	}

	getElement() {
		return this.element;
	}}
