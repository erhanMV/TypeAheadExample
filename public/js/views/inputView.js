define(['jquery', 'backbone', 'typeahead'], 
	function($, Backbone, typeahead) {
		var self,
		inCollection = function(value) {
			var isInCollection = false;
			self.collection.forEach(function(model) {
				isInCollection = model.get("value") == value;
			})
			return isInCollection;
		},
		resetTypeAhead = function() {
			$('#typeahead-input').val('');
			$('#typeahead-input').typeahead('destroy');
			$('#typeahead-input').typeahead({
				local: self.collection.toJSON(),
				limit: '10'
			});
		},
		reverseCollection = function(collection) {		
			collection.forEach(function(model) {
				var reverseVal = reverse(model.get("value"));
				var reverseTokens = []
				model.get("tokens").forEach(function(token) {
					reverseTokens.push(reverse(token));
				})
				model.set({
					value : reverseVal,
					tokens : reverseTokens
				})
			});
			return collection.toJSON();
		},
		reverse =  function(str) {
			return str.split("").reverse().join("");
		},
		
		InputView = Backbone.View.extend({
			el : "body",			
			
			events: {
				'click #submit' : 'addToSet',
				'keydown #typeahead-input' : 'clearText',
			},
			initialize: function() {
				var reverseFunc = reverseCollection(this.collection);				
				$('#typeahead-input').typeahead({
					source : function() {
						return reverseFunc;
					},
					limit: '10'
				});	
				self = this	
			},
			addToSet : function() {
				var value = $('#typeahead-input').val()
				if(value.length > 3) {
					if(!inCollection(value)) {
						this.collection.create({
							value: value
						})
						resetTypeAhead();
					}
					$('#message').text("Thanks for selecting " + value);
				}
					
			},
			clearText : function() {
				$('#message').text('')
			}
			
		});
		
		return InputView;
	}
)