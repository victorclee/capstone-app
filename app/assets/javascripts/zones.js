[{"featureType":"all","elementType":"geometry","stylers":[{"color":"#dddddd"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"saturation":-31},{"lightness":100},{"weight":3},{"gamma":0.8}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#050505"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"color":"#fef3f3"},{"weight":"3.01"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#0a0a0a"},{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.stroke","stylers":[{"color":"#fffbfb"},{"weight":"3.01"},{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":100},{"saturation":30}]},{"featureType":"poi.attraction","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":100},{"saturation":-20}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#a1a1a1"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#292929"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#202020"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"simplified"},{"hue":"#0006ff"},{"saturation":"-100"},{"lightness":"13"},{"gamma":"0.00"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#686868"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#8d8d8d"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#353535"},{"lightness":"6"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":"3.45"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#d0d0d0"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"lightness":"2"},{"visibility":"on"},{"color":"#999898"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#383838"}]},{"featureType":"road.local","elementType":"labels.text.stroke","stylers":[{"color":"#faf8f8"}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":-20}]}]




var rectangle;
var map;
var infoWindow;
var params;


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
function showNewRect(event) {
  var ne = rectangle.getBounds().getNorthEast();
  var sw = rectangle.getBounds().getSouthWest();
  var contentString = '<b>Zone information:</b><br>' +
      'North-east corner: ' + ne.lat() + ', ' + ne.lng() + '<br>' +
      'South-west corner: ' + sw.lat() + ', ' + sw.lng();
  infoWindow.setContent(contentString);
  infoWindow.setPosition(ne);
  params = {maxLat: ne.lat(), maxLong: ne.lng(), minLat: sw.lat(), minLong: sw.lng()};
  infoWindow.open(map);
}

function updateZone() {
  var zoneId = document.getElementById('zone-id');
  $.ajax({
          url: '/api/v1/zones/'+ zoneId.innerHTML, 
          type: 'PATCH', 
          dataType: 'json', 
          data: params, 
          success: function(data) {
                                  console.log(data);
                                  },
          error: function(e) {
                              console.log(e.message);
                              }
          });
}





  // $.post('/zones/' + zone.id , params, function(data){});


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

