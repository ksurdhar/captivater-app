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
  }

});