window.CaptivaterApp.Views.textblocksShow = Backbone.View.extend({
  template: JST["textblocks/show"],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);

    this.sentenceShowView = new CaptivaterApp.Views.SentenceShow({
      collection: this.model.sentences()
    });

  },

  render: function () {
    var renderedContent = this.template({ block: this.model });

    this.$el.html(renderedContent);

    this.$el.find(".sentences").html(this.sentenceShowView.render().$el)
    
    return this;
  }


});