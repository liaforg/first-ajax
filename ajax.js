document.addEventListener("DOMContentLoaded", function() {

  var runAjaxRequest = document.getElementById('run_ajax_request');

  /* Your code goes here */

  runAjaxRequest.addEventListener('click', function(){

    $.ajax({
      url: ' http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text',
    });

  });



});
