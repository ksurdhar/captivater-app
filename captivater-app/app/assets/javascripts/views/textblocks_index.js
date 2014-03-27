window.CaptivaterApp.Views.textblocksIndex = Backbone.View.extend({
  template: JST["textblocks/index"],

  initialize: function (options){
    this.listenTo(this.collection, "sync add remove", this.render);
  },

  render: function(){
    var renderedContent = this.template({ blocks: this.collection });
    this.$el.html(renderedContent);
    return this;
  }

});