'use babel';

var self = this;

export default class Dictionary {
	constructor(){
		self = this;

		this.selected = null;
		this.keywords = {
			'font-family' : { property : 'font-family', unit: false },
			'font-size' : { property : 'font-size', unit : true },
			'fill' : { property : 'background', unit: false },
			'width' : { property : 'width', unit : true },
			'height' : { property : 'height', unit: false }
		}

	}

	setSelected(selected_elements){
		this.selected = selected_elements;
		console.warn(this.selected);
	}

	setMarginSuggestion(first, second){
		var first_position = { x : +first.attributes.x.nodeValue, y : +first.attributes.y.nodeValue, width: +first.attributes.width.nodeValue, height: +first.attributes.height.nodeValue };
		var second_position = { x : +second.attributes.x.nodeValue, y : +second.attributes.y.nodeValue, width: +second.attributes.width.nodeValue, height: +second.attributes.height.nodeValue };

		if (first_position.x < second_position.x){

		}

		console.warn('x', first.attributes.x);
		return {
			text : 'x' + first_position.x
		}
	}

	resolve(resolver){
		if (!self.selected){
			resolver([]);
			return;
		}

		self.suggestions = [];

		for (var i = 0; i < self.selected.length; i++){
			var current_element = self.selected[i];

			for (var i_attr = 0; i_attr < current_element.attributes.length; i_attr++){
				var css_property = self.keywords[current_element.attributes[i_attr].name];
				console.warn(css_property, current_element.attributes[i_attr]);
				if (css_property){

					var text = css_property.property + ': ' + current_element.attributes[i_attr].nodeValue;

					if (css_property.unit)
						text += 'px';
					text += ';';

					self.suggestions.push({ text : text, snippet: text, displayText: text, type: 'property' });
				}
			}
		}

		if (self.selected.length === 2){
			self.suggestions.push(self.setMarginSuggestion(self.selected[0], self.selected[1]));
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
