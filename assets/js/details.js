$(function () {
  'use strict';


});  // end of document.ready()

/*
* initial mutiple Google Maps
*/
function initMap()
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
        // mapTypeId: google.maps.MapTypeId.HYBRID
        mapTypeId: google.maps.MapTypeId.ROADMAP
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
