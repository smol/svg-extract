'use babel';

var self = this;

export default class Dictionary {
	constructor(){
		self = this;

		this.selected = null;
		this.keywords = {
			'font-family' : { property : 'font-family', unit: '' },
			'font-size' : { property : 'font-size', unit : 'px' },
			'fill' : { property : 'background', unit: '' },
			'width' : { property : 'width', unit : 'px' },
			'height' : { property : 'height', unit: 'px'}
		}

	}

	setSelected(selected_elements){
		this.selected = selected_elements;
		console.warn(this.selected);
	}

	resolve(resolver){
		if (!self.selected){
			resolver([]);
			return;
		}

		self.suggestions = [];

		for (var i = 0; i < self.selected.length; i++){
			var current_element = self.selected[i];
			console.warn(current_element);
			for (var i_attr = 0; i_attr < current_element.attributes.length; i_attr++){
				var css_property = self.keywords[current_element.attributes[i_attr].name];
				console.warn(css_property, current_element.attributes[i_attr]);
				if (css_property){
					self.suggestions.push({
						text : css_property.property + ': ' + current_element.attributes[i_attr].nodeValue + css_property.unit + ';',
						snippet: css_property.property + ': ' + current_element.attributes[i_attr].nodeValue + css_property.unit + ';',
						displayText: css_property.property + ': ' + current_element.attributes[i_attr].nodeValue + css_property.unit + ';',
						type: 'property'
					});
				}
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
