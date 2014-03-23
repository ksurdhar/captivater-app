window.CaptivaterApp.Models.Sentence = Backbone.Model.extend({
  urlRoot: "/api/sentences",

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

  toJSON: function () {
    var json = Backbone.Model.prototype.toJSON.call(this);

    delete json.id;
    delete json.created_at;
    delete json.updated_at;
    return json;
  }

});