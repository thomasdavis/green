define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/login/page.html'
], function($, _, Backbone, loginPageTemplate){
  var LoginPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(loginPageTemplate);
    },
    events: {
      'submit form.login': 'login'
    },
    login: function (ev) {
      var SessionModel = Backbone.Model.extend({
        urlRoot: 'http://64.31.17.14/session'
      });
      var sessionModel = new SessionModel();
      sessionModel.fetch();
      var creds = $(ev.currentTarget).serializeObject();
      sessionModel.save(creds, {
        success: function () {
          console.log('err');
        }
      });
      console.log(creds);
      return false;
    }
  });
  return LoginPage;
});
