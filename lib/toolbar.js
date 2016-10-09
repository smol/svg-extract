'use babel';

import { Zoom } from './toolbar/zoom';

export class Toolbar {
	constructor(fileManager){
		var self = this;

		this.element = document.createElement('div');
		this.element.classList.add('toolbar');

		this.navigator_button = document.createElement('span');
		this.navigator_button.classList.add('fa');
		this.navigator_button.classList.add('fa-life-ring');
		this.navigator_button.attributes.title = 'navigator';
		this.navigator_button.onclick = function(e){
			self.navigatorToggle();
		};

		this.element.appendChild(this.navigator_button);

		this.zoom = new Zoom();

		this.element.appendChild(this.zoom.getElement());

		this.open_file = document.createElement('span');
		this.open_file.classList.add('icon');
		this.open_file.classList.add('file-directory');

		this.open_file.onclick = function(){
			dialog.showOpenDialog({}, function(files){
				fileManager.openFile(files[0]);
			});
		};

		fileManager.openFile('/Users/smol/Documents/cv.svg');

		// this.element.innerHTML = '<span class=\'icon icon-eye\'></span><span class=\'icon icon-gear\'>gear</span>';
	}

	getElement(){
		return this.element;
	}
}
