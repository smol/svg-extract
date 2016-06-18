'use babel';

const dialog = require('remote').require('dialog');
const fs = require('fs');

export class FileManager {
	constructor(canvas){
		this.canvas = canvas;
	}

	openFile(path){
		var self = this;

		fs.readFile(path, 'utf-8', function(err, data){
			if (err)
				return;

			self.canvas.setSvg(data);
		});
	}

	getElement(){
		return this.element;
	}
}
