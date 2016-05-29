'use babel';

var self = this;

export default class Dictionary {
	constructor(){
		self = this;

		this.selected = null;
		this.keywords = {
			'font-family' : 'font-family',
			'font-size' : 'font-size',
			'fill' : 'background'
		}

	}

	setSelected(attributes){
		this.selected = attributes;
	}

	resolve(resolver){
		if (!self.selected){
			resolver([]);
			return;
		}

		self.suggestions = [];

		for (var i = 0; i < self.selected.length; i++){
			var css_property = self.keywords[self.selected[i].name];
			if (css_property){
				self.suggestions.push({
					text : css_property + ': ' + self.selected[i].nodeValue + ';',
					snippet: css_property + ': ' + self.selected[i].nodeValue + ';',
					displayText: css_property + ': ' + self.selected[i].nodeValue + ';',
					type: 'property'
				});
			}
		}

		resolver(self.suggestions);
		// resolver([{
		// 	text : 'toto',
		// 	snippet: 'toto(${1:myArg})',
		// 	displayText: 'toto', // (optional)
		// 	replacementPrefix: 'to', // (optional)
		// 	type: '', // (optional)
		// 	leftLabel: '', // (optional)
		// 	leftLabelHTML: '', // (optional)
		// 	rightLabel: '', // (optional)
		// 	rightLabelHTML: '', // (optional)
		// 	className: '', // (optional)
		// 	iconHTML: '', // (optional)
		// 	description: '', // (optional)
		// 	descriptionMoreURL: '', // (optional)
		// }]);
	}
}
