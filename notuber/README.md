

```
for (var key in vehicles){
  if (vehicles.hasOwnProperty(key)){
    var id = vehicles[key].id;
  	var lat = vehicles[key].latitude;
  	var lng = vehicles[key].longitude;
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

    markers.addListener('click', function(){
        infowindow.open(map,marker);
    });
  }
}
```