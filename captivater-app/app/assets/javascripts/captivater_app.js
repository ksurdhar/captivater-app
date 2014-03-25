window.CaptivaterApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new CaptivaterApp.Routers.AppRouter({
      $rootEl: $("#content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  CaptivaterApp.initialize();
});
