$(function () {
  'use strict';

  // initialize Google Maps
  // initialize();

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

  /*
  * how to use parseQueryString() function
  */
  // var queryString = window.location.search;
  // console.log("queryString = " + queryString);
  //
  // var parameters = parseQueryString(queryString);
  // console.log(parameters);
  //

  /*
  * For adding appointments to localStorge for testing
  */
  //var myApptSeed = new Appointment("appt5");
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

  getWeather("Apex, NC");

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

/*
* str = 'City, State' for example 'Boston, MA'
*/
function getWeather(str) {

  var apiURL = "",
      htmlStr = "",
      windStr = "",
      cityStr = "",
      locationStr = "";

  if (str !== undefined && str.length > 5 && str.indexOf(", ") >= 0) {

    cityStr = str.split(", ")[0].replace(" ","_");
    locationStr = str.split(", ")[1].toUpperCase();
    apiURL += "http://api.wunderground.com/api/bb07f40ea899d427/conditions/q/" +
              locationStr +  "/" + cityStr + ".json";

    console.log(apiURL);

    $.getJSON(apiURL)

      .done( function (data) {
        // console.log(value);
        // console.log(value.response.error);
        if (data.response.error !== undefined) {
          console.log("ERROR => getWeather() => " + data.response.error.type);
        } else {
          htmlStr +=
            data.current_observation.display_location.full + "\n" +
            data.current_observation.temperature_string + "\n" +
            data.current_observation.weather + "\n" +
            data.current_observation.icon_url + "\n";

          windStr += data.current_observation.wind_string
          if ( windStr !== "NA" && windStr.length > 0 ) {
            htmlStr += windStr.charAt(0).toLowerCase() + windStr.slice(1) + " winds\n";
          }
        }
        console.log(htmlStr);
      })  // end .done()

      .fail( function(data) {
        console.log('$.getJSON() => Error!', data);
      });  // end .fail()

  }
}

/*
* initialize mutiple Google Maps
*/
function initialize()
{
    // var durham = new google.maps.LatLng(35.994,-78.898);
    var apex = new google.maps.LatLng(35.732,-78.850);
    // var landstuhl = new google.maps.LatLng(49.412,7.572);

    // var myOptions1 =
    // {
    //     zoom: 15,
    //     center: durham,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    // };

    var myOptions2 =
    {
        zoom: 15,
        center: apex,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };

    // var myOptions3 =
    // {
    //     zoom: 15,
    //     center: landstuhl,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    // };

    // var myMap1 = new google.maps.Map(document.getElementById("details-map"), myOptions1);
    var myMap2 = new google.maps.Map(document.getElementById("details-map"), myOptions2);
    // var myMap3 = new google.maps.Map(document.getElementById("details-map"), myOptions3);


    // var myMarker1 = new google.maps.Marker(
    // {
    //     position: durham,
    //     map: myMap1,
    //     title:"Durham"
    // });

    var myMarker2 = new google.maps.Marker(
    {
        position: apex,
        map: myMap2,
        title:"Apex"
    });

    // var myMarker3 = new google.maps.Marker(
    // {
    //     position: landstuhl,
    //     map: myMap3,
    //     title:"Landstuhl"
    // });
  }
