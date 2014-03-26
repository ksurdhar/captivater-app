window.CaptivaterApp.Views.textblocksNew = Backbone.View.extend({
  template: JST["textblocks/new"],
  events: {
    "submit form":"submit"
  },

  render: function(){

    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },

  submit: function (event){
    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON()["textblock"];
    var newBlock = new CaptivaterApp.Models.Textblock(params);
    newBlock.save({}, {
      success: function () {
        CaptivaterApp.Collections.blocks.add(newBlock);
        Backbone.history.navigate("textblocks/" + newBlock.id, { trigger: true });
      }
    });
  }

});