require.config({
  paths: {
    jquery: 'libs/jquery',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
    typeahead: 'libs/typeahead',
    localstorage: 'libs/backbone.localStorage'
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    typeahead: {
      deps: ['jquery'],
      exports: 'typeahead'
    }
  }

});

require([
  'router',
], function(Router){  
  Router.initialize();
});