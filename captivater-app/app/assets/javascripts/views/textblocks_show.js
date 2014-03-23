window.CaptivaterApp.Views.textblocksShow = Backbone.View.extend({
  template: JST["textblocks/show"],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);

    this.sentenceShowView = new CaptivaterApp.Views.SentenceShow({
      collection: this.model.sentences()
    });
  },

  events: {
    "click .next-sentence": "nextSentence",
    "click .prev-sentence": "prevSentence"
  },

  render: function () {
    var renderedContent = this.template({ block: this.model });

    this.$el.html(renderedContent);
    this.$el.find(".current_sentence").html(this.model.currentSentence())

    this.$el.find(".sentences").html(this.sentenceShowView.render().$el)
    
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


//make a function that prints a list of urls if their word attributes match words in the current sentence