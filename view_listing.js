// one is able to get the haml template from the same location
// as the page being loaded
var ListingView = Backbone.View.extend({
  el: '#main-content',
    initialize: function() {
    },
    render: function() {
      var template = haml.compileHaml({ sourceUrl: 'listing_view.html.haml'} );
      this.$el.html(template());
    }
});

