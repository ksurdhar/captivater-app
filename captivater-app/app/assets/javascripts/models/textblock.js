window.CaptivaterApp.Models.Textblock = Backbone.Model.extend({
  urlRoot: "/api/textblocks",

  sentences: function(){
    if(!this._sentences){
      this._sentences = new CaptivaterApp.Collections.Sentences([], {
        textblock: this
      });
    }
    return this._sentences;
  }, 

  parse: function(jsonResp){
    if (jsonResp.sentences) {
      this.sentences().set(jsonResp.sentences);
      delete jsonResp.sentences;
    }

    return jsonResp;
  },

  currentSentence: function(){

    if(!this._currentPos){
      this._currentPos = 0;
    }
    var sentences = this.get("body").split(".");
    return sentences[this._currentPos];
  },

  nextSentence: function(){
    this._currentPos += 1
  },

  prevSentence: function(){
    this._currentPos -= 1
  }


});