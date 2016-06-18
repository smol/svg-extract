'use babel';

export class Navigator {
	constructor(){
		this.element = document.createElement('div');
		this.element.classList.add('navigator');
		this.active = false;
	}

	setContent(svg){
		this.element.innerHTML = svg;
		this.element.innerHTML += ''+
			'<mask id="masking" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">' +
				'<rect y="0.3" width="1" height=".7" fill="url(#gradient)" />' +
				'<circle cx=".5" cy=".5" r=".35" fill="white" />' +
			'</mask>';
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
