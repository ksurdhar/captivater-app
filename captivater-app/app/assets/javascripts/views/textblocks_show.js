window.CaptivaterApp.Views.textblocksShow = Backbone.View.extend({
  template: JST["textblocks/show"],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
    setInterval(this.highlight.bind(this), 2000);
  },

  events: {
    "click .next-sentence": "nextSentence",
    "click .prev-sentence": "prevSentence"
  },

  render: function () {
    var renderedContent = this.template({ block: this.model });

    this.$el.html(renderedContent);
    this.$el.find(".current_sentence").html(this.model.currentSentence());

    return this;
  },

  nextSentence: function(){
    this.model.nextSentence();
    this._counterNum = 0
    this.render();
  },

  prevSentence:function(){
    this.model.prevSentence();
    this._counterNum = 0
    this.render();
  },

  highlight: function() {

    var that = this;
    var word_hash = this.model.currentImgs();
    var words = [];
    for(var k in word_hash) words.push(k);

    var match = words[that._counter()]
    that.$el.find(".current_imgs").html(word_hash[match]);
    that.$el.find('.current_sentence').html(function(q, v) {
      return v.replace(match, '<span>' + match + '</span>');
    });

    that._counterNum++;
  },

  _counter: function(){
    if(!this._counterNum){
      this._counterNum = 0
    }
    return this._counterNum;
  }
});
