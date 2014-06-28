// Using require.js to load the necessary files in here

require(['jquery'], function(jquery) {
  $(document).ready(function() {
    // compile all the haml files
    fn = haml.compileHaml({ sourceId: 'main-body'});

    // paint the haml file in the main area div
    $('#main-content').html(fn());

  });
});
