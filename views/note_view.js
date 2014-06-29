var NoteView = Backbone.View.extend({
  el: '#main-content',

  initialize: function () {

  },

  render: function () {
    var template = haml.compileHaml({sourceUrl: '../templates/note_view.html.haml'});
    this.$(el).html(template());
  }
});
