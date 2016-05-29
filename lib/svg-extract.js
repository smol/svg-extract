'use babel';

import SvgExtractView from './svg-extract-view';
import Provider from './svg-extract-provider';
import { CompositeDisposable } from 'atom';

export default {
	svgExtractView: null,
	modalPanel: null,
	subscriptions: null,
	provider: null,

	activate(state) {
		this.provider = new Provider();
		this.svgExtractView = new SvgExtractView(state.svgExtractViewState, this.provider);

		this.modalPanel = atom.workspace.addRightPanel({
			item: this.svgExtractView.getElement(),
			visible: false
		});

		// Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
		this.subscriptions = new CompositeDisposable();

		// Register command that toggles this view
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'svg-extract:toggle': () => this.toggle()
		}));


	},

	deactivate() {
		this.modalPanel.destroy();
		this.subscriptions.dispose();
		this.svgExtractView.destroy();
	},

	serialize() {
		return {
			svgExtractViewState: this.svgExtractView.serialize()
		};
	},

	toggle() {
		return (
			this.modalPanel.isVisible() ?
			this.modalPanel.hide() :
			this.modalPanel.show()
		);
	},

	provide(){
		return this.provider;
	}

};
