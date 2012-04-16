define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/player/page.html'
], function($, _, Backbone, playerPageTemplate){
  var LoginPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(playerPageTemplate);
    }
  });
  return LoginPage;
});
