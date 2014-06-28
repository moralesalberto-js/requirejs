// Using require.js to load the necessary files in here

require(['jquery', 'underscore', 'underscore.string', 'haml', 'aircraft', 'queue'], function(jquery, underscore, underscore_string, haml, aircraft, queue) {
  $(document).ready(function() {
    alert('here');
    // compile all the haml files
    fn = haml.haml.compileHaml({ sourceId: 'main_body'});

    // paint the haml file in the main area div
    $('#main-content').html('testing');
    alert('here');

  });
});
