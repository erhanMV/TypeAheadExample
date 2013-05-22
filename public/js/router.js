define(['jquery', 'backbone', 'underscore', 'js/views/inputView.js', 'gemCollection'], 
	function($, Backbone, _, InputView, GemCollection) {
		var AppRouter = Backbone.Router.extend({
			routes: {
				"typeahead" : "typeahead"
			},
			
			typeahead: function() {		
				var gemCollection = new GemCollection([
					{value: "Blue Sapphire", tokens: ['Blue', 'Sapphire']},
					{value: "Green Emerald", tokens: ['Green', 'Emerald']},
					{value: "Red Ruby", tokens: ['Red', 'Ruby']},
				])		
				var view = new InputView({
					collection: gemCollection
				});
				
			}
		});
		
		var initialize = function() {
			router = new AppRouter();
			Backbone.history.start();
			router.navigate('#typeahead', {trigger: true})
		}
		
		return {
			initialize : initialize
		}
	}
)
