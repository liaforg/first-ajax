document.addEventListener("DOMContentLoaded", function() {

  var runAjaxRequest = document.getElementById('run_ajax_request');
  var runPingPong = document.getElementById('run_ping_pong');

  /* Your code goes here */

  runAjaxRequest.addEventListener('click', function(){

    $.ajax({
      url: ' http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text',
    });
  });

  runPingPong.addEventListener('click', function(){

    $.ajax({
      url: ' http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text',
      })

      .done(function (responseData){
      console.log(responseData);
      var element = document.createElement('div');
      element.innerHTML = responseData;
      document.querySelector('#step3456').append(element);
      })

      .fail(function( jqXHR, textStatus, errorThrown){
      console.log('inside .fail()');
      console.log(textStatus, errorThrown);
      var fail = document.createElement('div');
      fail.innerHTML = "Your request has failed!";
      document.querySelector('#step3456').append(fail);
      })

      .always(function(){
      console.log('inside .always()');
      });

  });

});
