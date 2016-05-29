'use babel';

import Dictionary from './svg-extract-dictionary';

export default class Provider {
	constructor(){
		this.selector = '.source.css, .source.scss, .source.less';
		this.inclusionPriority = 0;
		this.excludeLowerPriority = false;
		this.dictionary = new Dictionary();
	}

	init(){

	}

	setSelected(attributes){
		this.dictionary.setSelected(attributes);
	}

	getSuggestions({editor, bufferPosition, scopeDescriptor, prefix, activatedManually}) {

		return new Promise(this.dictionary.resolve).catch((err) => {
			console.warn(err);
		});
	}

	forceCompletion() {
		this.force = true;
		atom.commands.dispatch(atom.views.getView(atom.workspace.getActiveTextEditor()), 'autocomplete-plus:activate');
		this.force = false;
	}
}
