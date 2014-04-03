window.CaptivaterApp.Models.Textblock = Backbone.Model.extend({
  urlRoot: "/api/textblocks",

  urls: function(){
    if(!this._urls){
      this._urls = new CaptivaterApp.Collections.Urls([], {
        textblock: this
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
    var sentences = this.get("body").split(/[.?!]/);
    var currentSen = sentences[this._currentPos];
    
    var endingArr = this.get("body").split(currentSen);
    var ending = endingArr[endingArr.length -1];
    var punctuation = ending.split("")[0];
    return currentSen + punctuation;
  },

  strippedCurrentSentence: function(){
    if(!this._currentPos){
      this._currentPos = 0;
    }
    var sentences = this.get("body").split(/[.?!]/);
    return sentences[this._currentPos];
  },

  nextSentence: function(){
    if(this.get('body').slice(-1) === /[.?!]/){
      if(this._currentPos < this.get("body").split(/[.?!]/).length -2){
        this._currentPos += 1
      };
      return
    }
    if(this._currentPos < this.get("body").split(/[.?!]/).length -2){
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

    var current_words = this.strippedCurrentSentence().split(" "); 
    var all_urls = this.urls();


    all_urls.each( function(url){
  
      if( _.contains(current_words, url.get("word")) ){
        current_urls[url.get("word")] = "<img class='animated fadeInDown' src=" + url.get("url") + ">"
      }

    });
    return current_urls;
  }

  // fetchMoreUrls: function(){

  //   var that = this;

  //   var otherSentences = this.get("body").split(".").slice(1);
  //   var all_words = otherSentences.join(" ").split(" ");


  //   for(var i=0; i < all_words.length; i++) {
  //     all_words[i] = all_words[i].replace(/\W+/, '');
  //   }
  //   var uniq_words = _.uniq(all_words);

  //   var filter = "aboard about above across after against along amid among anti around as " +
  //       "at before behind below beneath beside besides between beyond but by concerning " +
  //       "considering despite down during except excepting excluding following for from in " +
  //       "inside into like minus near of off on onto opposite outside over past per plus regarding " +
  //       "round save since than through to toward towards under underneath unlike until up upon " +
  //       "versus via with within without the to then when a distrust and there was" 
  //   filter.split(" ");
    
  //   var url_words = [];
  //   for(var i = 0, l = uniq_words.length; i < l; ++i){
  //     if(filter.indexOf(uniq_words[i]) === -1){
  //       url_words.push(uniq_words[i])
  //     }
  //   };

  //   //start url building
  //   _.each(url_words, function(url_word){

  //     var url = "http://api.thenounproject.com/icon/" + url_word
  //     var accessor = {
  //       consumerKey : api_key,
  //       consumerSecret: api_secret
  //     };

  //     var message = {
  //       action: url,
  //       method: "GET",
  //       parameters: {}
  //     };

  //     OAuth.completeRequest(message, accessor);
  //     url = url + '?' + OAuth.formEncode(message.parameters);

  //     debugger

  //     $.getJSON(url, function(e){
  //       debugger
  //     });
  //     // $.ajax({
  //     //   url: url,
  //     //   success: function(response){
  //     //     debugger
  //     //   },
  //     //   error: function(e){
  //     //     debugger
  //     //   }
  //     // });

  //     // debugger

  //     var newUrl = new CaptivaterApp.Models.Url( {url: {url: url, word: url_word, textblock_id: that.get("id") }} );
  //     newUrl.save({}, {
  //       success: function () {
  //         that.urls().add(newUrl);
  //       }
  //     });
  //   });
  //   //end urlbuilding
  // }

});






















