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
  }

  // currentImgs: function(){
  //   //return an array of all the images
  //   //call helper function inside of render method
  //   var current_urls = [];
  //   var current_words = this.currentSentence().split(" "); // all words in current sente
  //   // call function which returns all images
  //   var potential_urls = this.urls();
  //   _.each(potential_urls, function(url){
  //     if( _.contains(current_words, url.get("word") ){
  //       current_urls.push(url);
  //     }
  //   });
  //   return current_urls;
  // }

});