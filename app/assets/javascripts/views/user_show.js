window.CaptivaterApp.Views.userView = Backbone.View.extend({
  template: JST["user_show"],

  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }

});