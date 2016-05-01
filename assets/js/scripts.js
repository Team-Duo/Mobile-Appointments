$(function () {
  'use strict';

  // save appointment when button is clicked
  $("#create-submit-btn").on("click", function(){

    var myAppt = new Appointment("appt" + parseInt(localStorage.length + 1, 10));

    myAppt.apptTitle = $("#create-title").val();
    myAppt.appointmentDate = $("#create-date").val();
    myAppt.street = $("#create-street").val();
    myAppt.city = $("#create-city-state").val();
    myAppt.state = $("#create-city-state").val();
    myAppt.temperature = "55"
    myAppt.desciption = "mostly cloudy"
    myAppt.weatherType = "10b"
    console.log(myAppt);

    // window.localStorage.setItem(myAppt.apptId, JSON.stringify(myAppt));
    // console.log("** localStorage.setItem **");
    store(myAppt.apptId, myAppt);

    $("#create-form").submit();
  });

  //  how to use parseQueryString() function
  // var queryString = window.location.search;
  // console.log("queryString = " + queryString);
  //
  // var parameters = parseQueryString(queryString);
  // console.log(parameters);
  //


  // For adding appointments to localStorge for testing
  // var myApptSeed = new Appointment("appt5");
  // myApptSeed.appointmentDate = new Date();
  // myApptSeed.street = "1212 Boogie Boogie Ave.";
  // myApptSeed.city = "Norfolk";
  // myApptSeed.state = "VA";
  // myApptSeed.temperature = 55;
  // myApptSeed.desciption = "Cold!";
  // myApptSeed.weatherType = "rainy";
  // console.log(myApptSeed);
  // store(myApptSeed.apptId, myApptSeed);

  // console.log(retrieve("appt5"));


});  // end of document.ready()

/*
*
*/
function Appointment(apptId) {
  this.apptId = apptId;
  this.apptTitle = "";
  this.createDate = new Date();
  this.appointmentDate = null;
  // location data
  this.street = "";
  this.city = "";
  this.state = "";
  // weather data
  this.temperature = 0;
  this.desciption = "";
  this.weatherType = "";  // cloudy, rainy, sunny
  // methods
  // this.getInfo = function() {
  //     return "title = " + this.aaptTitle + " \n" +
  //            "create date = " + this.createDate + " \n" +
  //            "appointment date = " + this.appointmentDate + "\n" +
  //            "street = " + this.street + "\n" +
  //            "city = " + this.city + "\n" +
  //            "state = " + this.state + "\n" +
  //            "temperature = " + this.temperature + "\n" +
  //            "description = " + this.desciption + "\n" +
  //            "weather type = " + this.weatherType + "\n";
  // };
}

/*
*
*/
function store(apptId, apptObj) {
  console.log("** store() : apptId => " + apptId + " **");
  window.localStorage.setItem(apptId, JSON.stringify(apptObj));
}


/*
*
*/
function retrieve(apptId) {
  console.log("** retrieve() : apptId => " + apptId + " **");
  return JSON.parse(window.localStorage.getItem(apptId));
}

/*
*
*/
function remove(apptId) {
  console.log("** delete() : apptId => " + apptId + " **");
  window.localStorage.removeItem(apptId);
}

/*
*
*/
function parseQueryString(queryString) {
  var params = {} ;
  var queries = [];
  var temp = [];
  // remove "?" character
  queryString = queryString.substring(1);
  // Split into key/value pairs
  queries = queryString.split("&");
  // Convert the array of strings into an object
  $.each(queries, function(i) {
      temp = queries[i].split('=');
      params[temp[0]] = temp[1];  // tricky syntax params[] is the key
    });
  return params;
};
