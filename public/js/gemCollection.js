define(['jquery', 'backbone', 'localstorage'], 
function($, Backbone, Localstorage) {
	
	var GemCollection = Backbone.Collection.extend({
		localStorage: new Backbone.LocalStorage("gemCollection"),
	})	
	return GemCollection;	
})
	
	 