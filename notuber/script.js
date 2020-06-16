var map;
var vehicleStack = [];

function initUser(pos){
  var marker = new google.maps.Marker({
    position: pos,
    map: map,
    animation: google.maps.Animation.DROP
  })
}

function getJSON(lat, lng){
  // Make instance of XMLHttpRequest object
  var http = new XMLHttpRequest();

  // Variables for HTTP request
  var url = "https://jordan-marsh.herokuapp.com/rides";
  var username = 'xIHNcana';
  var params = 'username='+username+'&lat='+lat+'&lng='+lng;

  // Make POST request
  http.open('POST', url, true);

  // Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  // Set up handler / callback function to deal with HTTP response
  http.onreadystatechange = function(){
    if(http.readyState == 4 && http.status == 200) {
        var data = JSON.parse(http.responseText);
        data.forEach(initVehicle);
    }
  }

  // Send ("fire off") the request
  http.send(params);
}

function initVehicle(vehicle){
  var id = vehicle.id;
  var lat = parseFloat(vehicle.latitude);
  var lng = parseFloat(vehicle.longitude);
  var pos = {lat, lng};
  var created_at = vehicle.created_at;
  var car = 'images/car.png'

  var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">'+
        '<p>' + '<b> id: </b>' + id + '</p>' +
        '<p>' + '<b> lat: </b>' + lat + '</p>' +
        '<p>' + '<b> lng: </b>' + lng + '</p>' +
        '<p>' + '<b> created at: </b>' + created_at + '</p>' +
        '</div>'+
        '</div>';

  var infowindow = new google.maps.InfoWindow({
          content: contentString
      });

  var marker = new google.maps.Marker({
    position: pos,
    icon: car, 
    animation: google.maps.Animation.DROP
  });

  marker.setMap(map);

  marker.addListener('click', function(){
      infowindow.open(map,marker);
  });

  vehicle.contentString = contentString;
  vehicle.infoWindow = infowindow;
  vehicle.marker = marker;

  vehicleStack.push(vehicle);
} d

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14
  });

  // Get user position
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    var pos = {
      lat: lat,
      lng: lng
    };

    map.setCenter(pos);

    // Create user marker
    initUser(pos);

    // Make request to ride-hailing API
    getJSON(lat, lng);
  });

}