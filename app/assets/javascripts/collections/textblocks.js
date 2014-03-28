window.CaptivaterApp.Collections.Textblocks = Backbone.Collection.extend({
  url: "api/textblocks",
  model: CaptivaterApp.Models.Textblock,

  getOrFetch: function (id){
    var model;
    var blocks = this;

    if(model = this.get(id)){
      model.fetch();
      return model;
    } else {
      model = new CaptivaterApp.Models.Textblock({ id: id });
      model.fetch({
        success: function(){ blocks.add(model) }
      });
      return model
    }
  }
});

window.CaptivaterApp.Collections.blocks = new CaptivaterApp.Collections.Textblocks();