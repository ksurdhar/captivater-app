window.CaptivaterApp.Views.greetView = Backbone.View.extend({
  template: JST["greet"],

  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }

});