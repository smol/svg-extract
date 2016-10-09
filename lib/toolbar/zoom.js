'use babel';

export class Zoom {
	constructor(){
		var self = this;

		// creation du bouton pour zoomer
		this.zoomin_button = document.createElement('span');
		this.zoomin_button.classList.add('fa');
		this.zoomin_button.classList.add('fa-search-plus');
		this.zoomin_button.onclick = function(){
			self.zoomIn();
		};

		// creation du bouton pour dézoomer
		this.zoomout_button = document.createElement('span');
		this.zoomout_button.classList.add('fa');
		this.zoomout_button.classList.add('fa-search-minus');
		this.zoomout_button.onclick = function(){
			self.zoomOut();
		};
	}

	zoomIn(){
		console.warn('zoomIn');
		this.canvas.zoomIn();
	}

	zoomOut(){
		console.warn('zoomOut');
		this.canvas.zoomOut();
	}

	getElement(){
		var element = document.createElement('span');

		element.appendChild(this.zoomin_button);
		element.appendChild(this.zoomout_button);

		return element;
	}
}
