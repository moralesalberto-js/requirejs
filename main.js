
// Starting to use requirejs to load dependencies

// This is a backbone view
// el is the div that we will replace
var TheView = Backbone.View.extend({
  el: '#main-content',
    initialize: function() {
    },
    // This is the render function that will use the sourceId haml content
    // to paint the form
    render: function(model) {
      var template = haml.compileHaml('main-body');
      this.$el.html(template(model));
    }
});



$(document).ready(function() {
  // instantiate the view
  //var theView = new TheView();
  // call the render function to paint

  //theView.render({fullName: "Alberto Morales"});
  var theView = new ListingView();
  theView.render();
});
