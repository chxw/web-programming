function getPosition() {
    // Simple wrapper
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
    });
}

function initUser(result){
	var user = new Object();

	user.lat = result.coords.latitude;
	user.lng = result.coords.longitude;
	user.position ={
		lat: user.lat,
		lng: user.lng
	}
	user.latLng = new google.maps.LatLng(user.lat, user.lng);

	var userMarker = new google.maps.Marker({
		animation: google.maps.Animation.DROP
	})

	userMarker.setPosition(user.position);
	user.marker = userMarker;

	return user;
}

function calibrateMap(user){
	// Create map
	map = new google.maps.Map(document.getElementById('map'),{
		zoom: 7
	});

	map.setCenter(user.position);
	user.marker.setMap(map);
	user.map = map;

	return user;
}

function initCars(jsonObject, user){
	var closest = {};

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

	    // Compute distance between car and user
	    var carLatLng = new google.maps.LatLng(lat, lng);
	    var distance = google.maps.geometry.spherical.computeDistanceBetween(user.latLng, carLatLng);

	    // Check if it is the shortest distance
	    if (distance < closest["distance"]){
	      closest["lat"] = lat;
	      closest["lng"] = lng
	      closest["distance"] = distance;
	    }
	  }
	}

	// Create property that points to exact car marker? user.closestCar = car;
    user.closestCoords = [user.position,{lat: closest["lat"], lng: closest["lng"]}];
    user.closestDistance = closest["distance"];

	return user;
}

function callAPI(user){
	var http = new XMLHttpRequest();
    var url = "https://jordan-marsh.herokuapp.com/rides";
    var username = 'xIHNcana';
    var params = "username="+username+"&lat="+user.lat+"&lng="+user.lng;

    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function(){
    	if (http.readyState == 4 && http.status == 200){
    		var jsonObject = JSON.parse(http.responseText);
    		user = drawLine(initCars(jsonObject, user));
    	}
    }

    http.send(params);

    return user;
}

function drawLine(user){
    var path = new google.maps.Polyline({
      path:user.closestCoords,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    path.setMap(user.map);

    return user;
}

function initInfoWindow(user){
	console.log(user);

    user.closestDistance = user.closestDistance*0.00062137; // convert from meters to miles

    var contentString = 
    '<h1>' + 'You are here' + '</h1>' +
    '<p>' + 'The closest car to you is ' + user.closestDistance + ' miles away. </p>';

    var infoWindow = new google.maps.InfoWindow({
    	content: contentString,
    	position: user.position
    });

	user.marker.addListener('click', function(){
		infoWindow.open(user.map,user.marker);
	});

	return user;
}

function initMap(){
	var map;

	getPosition()
		.then((result)=>initUser(result))
		.then((user)=>calibrateMap(user))
		.then((user)=>callAPI(user))
		.then((user)=>initInfoWindow(user))
	;
}