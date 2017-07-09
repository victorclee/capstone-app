// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require turbolinks
//= require_tree .



function initMap() {
  var actualize = {lat: 41.892136, lng: -87.634830};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: actualize
  });
  var marker = new google.maps.Marker({
    position: actualize,
    map: map
  });

  var rectangleCoords = [
    new google.maps.LatLng(41.892400, -87.635600),
    new google.maps.LatLng(41.891500, -87.635600),
    new google.maps.LatLng(41.891500, -87.634075),
    new google.maps.LatLng(41.892400, -87.634075)
  ];
  // Styling & Controls
  myRectangle = new google.maps.Polygon({
    paths: rectangleCoords,
    draggable: true,
    editable: true,
    strokeColor: '#eb5e88',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#eb5e88',
    fillOpacity: 0.5
  });

  myRectangle.setMap(map);
  //google.maps.event.addListener(myRectangle, "dragend", getPolygonCoords);
  google.maps.event.addListener(myRectangle.getPath(), "insert_at", getPolygonCoords);
  //google.maps.event.addListener(myRectangle.getPath(), "remove_at", getPolygonCoords);
  google.maps.event.addListener(myRectangle.getPath(), "set_at", getPolygonCoords);

}


    //Display Coordinates below map
    function getPolygonCoords() {
      var len = myRectangle.getPath().getLength();
      var htmlStr = "";
      for (var i = 0; i < len; i++) {
        htmlStr += "(" + myRectangle.getPath().getAt(i).toUrlValue(6) + "), ";
        //Use this one instead if you want to get rid of the wrap > new google.maps.LatLng(),
        //htmlStr += "" + myRectangle.getPath().getAt(i).toUrlValue(5);
      }
      document.getElementById('info').innerHTML = htmlStr;
    }
    function copyToClipboard(text) {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    }
