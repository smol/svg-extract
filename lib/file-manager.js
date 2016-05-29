'use babel';

const dialog = require('remote').require('dialog');
const fs = require('fs');

export class FileManager {
	constructor(canvas){
		this.element = document.createElement('div');

		var button = document.createElement('button');
		button.innerText = 'load svg file';
		this.element.appendChild(button);

		fs.readFile('/Users/smol/Projects/test.svg', 'utf-8', function(err, data){
			if (err)
				return;

			canvas.setSvg(data);
		});

		button.onclick = function(){
			dialog.showOpenDialog({}, function(files){
				fs.readFile(files[0], 'utf-8', function(err, data){
					if (err)
						return;

					canvas.setSvg(data);
				});
			});
		};
	}

	getElement(){
		return this.element;
	}
}
