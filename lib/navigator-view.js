'use babel';

export class Navigator {
	constructor(canvas){
		var self = this;

		this.canvas = canvas;
		this.element = document.createElement('div');
		this.element.classList.add('navigator');

		this.mask = document.createElement('div');
		this.mask.classList.add('mask');

		this.current_position = {x : 0, y : 0};
		this.current_zoom = 0;

		this.element.onmousemove = function(evt){

			if (evt.buttons === 1){
				var bounding = self.element.getBoundingClientRect();
				var offset = {
					x : evt.x - bounding.left,
					y : evt.y - bounding.top
				};

				self.navigate(offset);
			}
		};

		this.active = false;
	}

	setContent(svg){
		this.element.innerHTML = svg;
		this.element.appendChild(this.mask);
	}

	navigate(offset){
		this.canvas.navigate(offset);

		var position = this.canvas.position;

		var bounds = this.mask.getBoundingClientRect();

		var temp = {
			x: (offset.x - (bounds.width / 2)),
			y: (offset.y - (bounds.height / 2))
		};

		if (temp.x <= 0) temp.x = 0;
		if (temp.y <= 0) temp.y = 0;

		if (temp.x >= (bounds.width / 2)) temp.x = bounds.width / 2;
		if (temp.y >= bounds.height / 2) temp.y = bounds.height / 2;

		this.mask.style.transform = 'translate(' + temp.x + 'px,' + temp.y + 'px)';
	}

	resize(){
		var canvas_bounding = this.canvas.element.getBoundingClientRect();
		var element_bounding = this.element.getBoundingClientRect();

		this.element.style.width = ((canvas_bounding.width * element_bounding.height) / canvas_bounding.height) + 'px';
	}

	zoom(value){
		if (value < 100)
			return;

		this.current_zoom = 1 - (value / 100) + 1;
		this.mask.style.transform = 'scale3d('+ this.current_zoom +', '+ this.current_zoom +', 1) translate3d('+ (this.current_position.x - 50) +'%, '+ (this.current_position.y - 50) +'%, 0px)';
	}

	navigate(position){
		this.current_position = position;
		this.mask.style.transform = 'scale3d('+ this.current_zoom +', '+ this.current_zoom +', 1) translate3d('+ (this.current_position.x - 50) +'%, '+ (this.current_position.y - 50) +'%, 0px)';
	}

	toggle(){
		this.active = !this.active;

		if (this.active)
			this.element.classList.add('navigator');
		else
			this.element.classList.remove('navigator');
	}

	getElement(){
		return this.element;
	}
}
