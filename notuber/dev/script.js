function initMap(){
  var map, user, infoWindow;
  var closest = {};
  var sboston = {lat: 42.352271, lng: -71.05524200000001};
  var vehicleStack = [];

  // Create map
  map = new google.maps.Map(document.getElementById('map'),{
    center: sboston,
    zoom: 7
  });

  // Create user marker and infowindow
  infoWindow = new google.maps.InfoWindow;
  user = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP
  });

  navigator.geolocation.getCurrentPosition(function(position) {
    // Get user location
    var userPos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    // Set information window to user
    infoWindow.setPosition(userPos);
    user.addListener('click', function(){
      infoWindow.open(map,user);
    });

    // Move marker to and center map to user location
    user.setPosition(userPos);
    map.setCenter(userPos);

    // Make instance of XMLHttpRequest object
    var http = new XMLHttpRequest();

    // Set variables for POST request to API
    var url = "https://jordan-marsh.herokuapp.com/rides";
    var username = 'xIHNcana';
    var params = "username="+username+"&lat="+userPos.lat+"&lng="+userPos.lng;

    // Make POST request
    http.open('POST', url, true);

    // Send proper header information along with request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


    // Call back function to deal with HTTP response
    http.onreadystatechange = function(){
      if (http.readyState == 4 && http.status == 200){
        var jsonObject = JSON.parse(http.responseText);

        closest["distance"] = Number.POSITIVE_INFINITY;
        // Create markers for every car in JSON
        for (var key in jsonObject){
          if (jsonObject.hasOwnProperty(key)){
            var vehicle = jsonObject[key];
            var id = vehicle.id;
            var lat = parseFloat(vehicle.lat);
            var lng = parseFloat(vehicle.lng);
            var un = vehicle.username;
            var icon = 'images/car.png';
            var pos = {lat: lat, lng: lng};

            var marker = new google.maps.Marker({
              position: pos,
              map: map,
              icon: icon,
              animation:google.maps.Animation.DROP
            })

            // Translate to LatLng object
            var carLatLng = new google.maps.LatLng(lat, lng);

            // Compute distance between car and user
            var distance = google.maps.geometry.spherical.computeDistanceBetween(userLatLng, carLatLng);

            // Check if it is the shortest distance
            if (distance < closest["distance"]){
              closest["lat"] = lat;
              closest["lng"] = lng
              closest["distance"] = distance;
            }
          }
        }

        // Determine to and from coordinates for car closest to user
        var closestCarCoords = [userPos,{lat: closest["lat"], lng: closest["lng"]}];

        // Draw polyline
        var path = new google.maps.Polyline({
          path:closestCarCoords,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        path.setMap(map);

        // Convert distance from meters to miles
        var distanceInMiles = closest["distance"]*0.00062137;

        // Set infoWindow content
        var contentString = 
        '<h1>' + 'You are here' + '</h1>' +
        '<p>' + 'The closest car to you is ' + distanceInMiles + ' miles away. </p>';

        infoWindow.setContent(contentString);
      }
    }

    // Send request
    http.send(params);
  });
}