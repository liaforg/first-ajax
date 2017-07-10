document.addEventListener("DOMContentLoaded", function() {

  var runAjaxRequest = document.getElementById('run_ajax_request');
  var runPingPong = document.getElementById('run_ping_pong');
  var runAjaxCount = document.getElementById('run_ajax_count');

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
      url: ' http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      dataType: 'text',
      })

      .done(function (responseData){
      console.log('yay we did it!')
      console.log(responseData);
      var element = document.createElement('div');
      element.innerHTML = responseData;
      document.querySelector('#step3456').append(element);
      })

      .fail(function( jqXHR, textStatus, errorThrown){
      console.log('that did not go well!');
      console.log(textStatus, errorThrown);
      var fail = document.createElement('div');
      fail.innerHTML = "Your request has failed!";
      document.querySelector('#step3456').append(fail);
      })

      .always(function(){
      console.log('all i know is, its over');
      var always = document.createElement('div');
      always.innerHTML = "Hey the request finished!";
      document.querySelector('#step3456').append(always);
      });
  });

  runAjaxCount.addEventListener('click', function(){

    $.ajax({
      url: ' http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text',
    })

    .done(function (responseData){
    console.log('yay we did it!')
    console.log(responseData);
    var element = document.createElement('div');
    element.innerHTML = responseData;
    document.querySelector('#step7').append(element);
    })
  });





});
