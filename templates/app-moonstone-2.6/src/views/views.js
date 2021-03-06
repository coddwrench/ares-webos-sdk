/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/

var 
	kind = require('enyo/kind'),
	Panels = require('moonstone/Panels'),
	Panel = require('moonstone/Panel'),
	BodyText = require('moonstone/BodyText'),
	IconButton = require('moonstone/IconButton');

module.exports = kind({
	name: "myapp.MainView",
	kind: Panels,
	classes: "moon enyo-fit main-view",
	pattern:"activity",
	components: [
		{kind: Panel, title: "Hello World!", headerComponents: [
			{kind: IconButton, src: "assets/icon-like.png"}
		], components: [
			{kind: BodyText, content: "Your content here"}
		]}
	]
});
