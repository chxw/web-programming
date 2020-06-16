var map;
var sboston = {lat: 42.352271, lng: -71.05524200000001};
var car = 'images/car.png' 
var vehicleStack = [];

function initUser(pos){
  var marker = new google.maps.Marker({
    position: pos,
    map: map,
    animation: google.maps.Animation.DROP
  })
}

function initVehicle(vehicle){
  var id = vehicle.id;
  var lat = vehicle.latitude;
  var lng = vehicle.longitude;
  var pos = {lat, lng};

  var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">'+
        '<p>' + '<b> id: </b>' + id + '</p>' +
        '<p>' + '<b> lat: </b>' + lat + '</p>' +
        '<p>' + '<b> lng: </b>' + lng + '</p>' +
        '</div>'+
        '</div>';
  var infowindow = new google.maps.InfoWindow({
          content: contentString
      });

  var marker = new google.maps.Marker({
    position: pos,
    icon: car, 
    map: map,
    animation: google.maps.Animation.DROP
  });

  marker.addListener('click', function(){
      infowindow.open(map,marker);
  });

  vehicle.contentString = contentString;
  vehicle.infoWindow = infowindow;
  vehicle.marker = marker;

  vehicleStack.push(vehicle);
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14
  });

  // Get user position and create user marker
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng:position.coords.longitude
    };
    map.setCenter(pos);
    initUser(pos);
  });

  // Create vehicles and place markers on map of where they are
  vehicles.forEach(initVehicle);
}