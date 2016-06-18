'use babel';

export class Toolbar {
	constructor(fileManager){
		var self = this;

		this.element = document.createElement('div');
		this.element.classList.add('toolbar');

		this.navigator_button = document.createElement('span');
		this.navigator_button.classList.add('icon');
		this.navigator_button.classList.add('icon-eye');
		this.navigator_button.onclick = function(e){
			self.navigatorToggle();
		};

		this.element.appendChild(this.navigator_button);

		this.zoomin_button = document.createElement('span');
		this.zoomin_button.classList.add('icon');
		this.zoomin_button.classList.add('icon-eye');
		this.zoomin_button.onclick = function(){
			self.zoomin();
		};

		this.element.appendChild(this.zoomin_button);

		this.open_file = document.createElement('span');
		this.open_file.classList.add('icon');
		this.open_file.classList.add('file-directory');

		this.open_file.onclick = function(){
			dialog.showOpenDialog({}, function(files){
				fileManager.openFile(files[0]);
			});
		};

		fileManager.openFile('/Users/smol/Projects/test_crea.svg');

		// this.element.innerHTML = '<span class=\'icon icon-eye\'></span><span class=\'icon icon-gear\'>gear</span>';
	}



	getElement(){
		return this.element;
	}
}
