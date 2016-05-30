'use babel';

import Dictionary from './svg-extract-dictionary';

export default class Provider {
	constructor(){
		this.selector = '.source.css, .source.scss, .source.less .entity';
		this.disableForSelector = '.source.css .comment, .source.css .string, .source.sass .comment, .source.sass .string';
		this.inclusionPriority = 2;
		this.excludeLowerPriority = false;
		this.filterSuggestions = true;
		this.dictionary = new Dictionary();
	}

	init(){
	}

	setSelected(selected_elements){
		this.dictionary.setSelected(selected_elements);
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
