window.CaptivaterApp.Routers.AppRouter = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl
  },

  routes: {
    "":"textblockNew",
    "textblocks/:id":"textblockShow",
    "textblocks":"textblockIndex"
  },

  textblockNew: function(){
    var view = new CaptivaterApp.Views.textblocksNew();
    this._swapView(view);
    $(".form-control").focus();
  },

  textblockShow: function(id){
    var block = CaptivaterApp.Collections.blocks.getOrFetch(id);

    var view = new CaptivaterApp.Views.textblocksShow({
      model: block
    });
    this._swapView(view);
  },

  textblockIndex: function(){
    CaptivaterApp.Collections.blocks.fetch();
    var view = new CaptivaterApp.Views.textblocksIndex({
      collection: CaptivaterApp.Collections.blocks
    });
    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});