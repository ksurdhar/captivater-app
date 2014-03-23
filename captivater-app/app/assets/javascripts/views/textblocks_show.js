window.CaptivaterApp.Views.textblocksShow = Backbone.View.extend({
  template: JST["textblocks/show"],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click .next-sentence": "nextSentence",
    "click .prev-sentence": "prevSentence"
  },

  render: function () {
    var renderedContent = this.template({ block: this.model });

    this.$el.html(renderedContent);
    this.$el.find(".current_sentence").html(this.model.currentSentence())
    // loop thru currentImgs, insert into current_imgs tag: "<img src=" + url + "></img>"
    // probably want to give each img it's own id or class for controlling appearance
    
    return this;
  },

  nextSentence: function(){
    this.model.nextSentence();
    this.render();
  },

  prevSentence:function(){
    this.model.prevSentence();
    this.render();
  }
});
