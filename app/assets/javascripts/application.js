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

var rectangle;
var map;
var infoWindow;

function initMap() {
  var actualize = {lat: 41.892136, lng: -87.634830};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: actualize
  });
  var marker = new google.maps.Marker({
    position: actualize,
    map: map
  });

  // var bounds = [
  //   new google.maps.LatLng(41.892400, -87.635600),
  //   new google.maps.LatLng(41.891500, -87.635600),
  //   new google.maps.LatLng(41.891500, -87.634075),
  //   new google.maps.LatLng(41.892400, -87.634075)
  // ];

  var bounds = {
    north: 41.892400,
    south: 41.891500,
    east: -87.634075,
    west: -87.635600
  };

  // Styling & Controls
  // rectangle = new google.maps.Polygon({
  rectangle = new google.maps.Rectangle({
    // paths: bounds,
    bounds: bounds,
    draggable: true,
    editable: true,
    strokeColor: '#eb5e88',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#eb5e88',
    fillOpacity: 0.5
  });
  rectangle.setMap(map);

  // Below is event listener for polygon
  //google.maps.event.addListener(rectangle, "dragend", getPolygonCoords);
  // google.maps.event.addListener(rectangle.getPath(), "insert_at", getPolygonCoords); (use this line)
  //google.maps.event.addListener(rectangle.getPath(), "remove_at", getPolygonCoords);
  // google.maps.event.addListener(rectangle.getPath(), "set_at", getPolygonCoords); (use this line)
  // end


  // Add an event listener on the rectangle.
  rectangle.addListener('bounds_changed', showNewRect);

  // Define an info window on the map.
  infoWindow = new google.maps.InfoWindow();

}

// Show the new coordinates for the rectangle in an info window.

/** @this {google.maps.Rectangle} */
function showNewRect(event) {
  var ne = rectangle.getBounds().getNorthEast();
  var sw = rectangle.getBounds().getSouthWest();

  var contentString = '<b>Zone information:</b><br>' +
      'North-east corner: ' + ne.lat() + ', ' + ne.lng() + '<br>' +
      'South-west corner: ' + sw.lat() + ', ' + sw.lng();

  infoWindow.setContent(contentString);
  infoWindow.setPosition(ne);

  var params = {maxLat: ne.lat(), maxLong: ne.lng(), minLat: sw.lat(), minLong: sw.lng()};

  // $.post('/zones/' + zone.id , params, function(data){

  // });

  infoWindow.open(map);
}



// function showNewRect(event) {
//   var nw = rectangle.getBounds().getNorthWest();
//   var se = rectangle.getBounds().getSouthEast();

//   var contentString = '<b>Rectangle moved.</b><br>' +
//       'New north-west corner: ' + nw.lat() + ', ' + nw.lng() + '<br>' +
//       'New south-east corner: ' + se.lat() + ', ' + se.lng();

//   infoWindow.setContent(contentString);
//   infoWindow.setPosition(nw);

//   infoWindow.open(map);
// }

    //Display Coordinates below map (for polygon)
    // function getPolygonCoords() {
    //   var len = rectangle.getPath().getLength();
    //   var htmlStr = "";
    //   for (var i = 0; i < len; i++) {
    //     htmlStr += "(" + rectangle.getPath().getAt(i).toUrlValue(6) + "), ";
    //   }
    //   document.getElementById('info').innerHTML = htmlStr;
    // }
    // function copyToClipboard(text) {
    //   window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    // }
