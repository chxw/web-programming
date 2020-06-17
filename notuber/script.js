function getPosition() {
    // Simple wrapper
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
    });
}

function initUser(result){
	var user = new Object();

	user.position ={
		lat: result.coords.latitude,
		lng: result.coords.longitude
	}

	user.latLng = new google.maps.LatLng(result.coords.latitude, result.coords.longitude);
	infoWindow = new google.maps.InfoWindow;

	var userMarker = new google.maps.Marker({
		animation: google.maps.Animation.DROP
	})

	infoWindow.setPosition(user.position);
	userMarker.setPosition(user.position);

	user.marker = userMarker;
	user.infoWindow = infoWindow;

	return user;
}

function calibrateMap(user){
	// Create map
	map = new google.maps.Map(document.getElementById('map'),{
		zoom: 7
	});

	map.setCenter(user.position);

	user.marker.addListener('click', function(){
		user.infoWindow.open(map,user);
	})

	user.marker.setMap(map);
}

function initMap(){
	var map;

	getPosition()
		.then((result)=>initUser(result))
		.then((user)=>calibrateMap(user))
	;
}