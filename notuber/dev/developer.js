var vehicles = [
    {
        "id": "mXfkjrFw",
        "latitude":42.3453,
        "longitude":-71.0464
    },
    {
        "id": "nZXB8ZHz",
        "latitude":42.3662,
        "longitude":-71.0621
    },
    {
        "id": "Tkwu74WC",
        "latitude":42.3603,
        "longitude":-71.0547
    },
    {
        "id": "5KWpnAJN",
        "latitude":42.3472,
        "longitude":-71.0802
    },
    {
        "id": "uf5ZrXYw",
        "latitude":42.3663,
        "longitude":-71.0544
    },
    {
        "id": "VMerzMH8",
        "latitude":42.3542,
        "longitude":-71.0704
    }
];

var map;
var sboston = {lat: 42.352271, lng: -71.05524200000001};
var car = 'car.png'
var vehicleStack = [];

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
    center: sboston,
    zoom: 14
  });

  vehicles.forEach(initVehicle);
}