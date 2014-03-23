window.CaptivaterApp.Views.SentenceShow = Backbone.View.extend({

  template: JST["sentences/show"],

  initialize: function (options) {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    debugger
    var renderedContent = this.template({ sentences: this.collection });

    this.$el.html(renderedContent);
    return this;
  }

});