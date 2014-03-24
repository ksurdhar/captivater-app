window.CaptivaterApp.Models.Textblock = Backbone.Model.extend({
  urlRoot: "/api/textblocks",

  urls: function(){
    if(!this._urls){
      this._urls = new CaptivaterApp.Collections.Urls([], {
        sentence: this
      });
    }
    return this._urls;
  }, 

  parse: function(jsonResp){
    if (jsonResp.urls) {
      this.urls().set(jsonResp.urls);
      delete jsonResp.urls;
    }

    return jsonResp;
  },

  currentSentence: function(){
    if(!this._currentPos){
      this._currentPos = 0;
    }
    //needs to be split on ! and ?
    var sentences = this.get("body").split(".");
    return sentences[this._currentPos];
  },

  nextSentence: function(){
    if(this._currentPos < this.get("body").split(".").length -2){
      this._currentPos += 1
    };
  },

  prevSentence: function(){
    if(this._currentPos > 0){
      this._currentPos -= 1
    }
  },

  currentImgs: function(){
    var current_urls = {};

    var current_words = this.currentSentence().split(" "); 

    var potential_urls = this.urls();
    potential_urls.each( function(url){
  
      if( _.contains(current_words, url.get("word")) ){
        current_urls[url.get("word")] = "<img src=" + url.get("url") + ">"
      }

    });
    return current_urls;
  }

});






















