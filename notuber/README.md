
## Name
chxw

## Date
6/17/2020

## Summary
Ride-Hailing Service (Client-side) Part 2

Implement four features into ride-hailing map from last week:

- Determine geolocation using JS `navigator.geolocation` object. Place a marker of where the user is located on the map. 
- Make a request to the ride-hailing API, providing your `username`, `lat`, `lng` as parameters. Upon successful request, ride-hailing API will give a list of vehicles to mark onto map in a string JSON list. The ride request API `https://jordan-marsh.herokuapp.com/rides` is HTTP POST only. CORS is enabled for this API. As in part 1, each vehicle on the map will be a marker with the car icon.
- Upon click on user marker on th emap, display an information window noting the closest vehicle form where you are including the distance away in miles.
- Render a polyline (any color) that connects user marker to the marker of the closeset vehicle.

This lab has been correctly implemented, no errors show in the console, and all requirements have been fulfilled. Additionally, one of the "Going Beyond" items was implemented: upon clicking on a maerk for a vehicle, show popu infowindow noting how far away the vehicle is, in miles, from you. No direct collaboration or discussion outside of Piazza and the Internet. This lab took 4-5 hours.

## Files
```
.
├── README.md
├── dev
│   ├── developer.css
│   └── developer.js
├── images
│   ├── before-opt.png
│   ├── car.png
│   ├── graph-bar.png
│   ├── graph-line.png
│   ├── opt-1.png
│   ├── opt-2.png
│   ├── opt-3.png
│   ├── opt-4.png
│   ├── script-archived.png
│   └── working-stack.png
├── index.html
├── script.js
└── style.css
```


## References:
[https://developers.google.com/maps/documentation/javascript/tutorial](https://developers.google.com/maps/documentation/javascript/tutorial)

[https://dmitripavlutin.com/foreach-iterate-array-javascript/](https://dmitripavlutin.com/foreach-iterate-array-javascript/)

[https://stackoverflow.com/questions/36240520/creating-an-indefinite-amount-of-items](https://stackoverflow.com/questions/36240520/creating-an-indefinite-amount-of-items)

[https://stackoverflow.com/questions/5634991/styling-google-maps-infowindow](https://stackoverflow.com/questions/5634991/styling-google-maps-infowindow)

[https://stackoverflow.com/questions/37600543/google-maps-a-lat-is-not-a-function](https://stackoverflow.com/questions/37600543/google-maps-a-lat-is-not-a-function)

[https://developers.google.com/maps/documentation/javascript/reference/geometry](https://developers.google.com/maps/documentation/javascript/reference/geometry)

[https://www.metric-conversions.org/length/meters-to-miles.htm](https://www.metric-conversions.org/length/meters-to-miles.htm)

[https://stackoverflow.com/questions/47544564/how-geolocation-getcurrentposition-return-value](https://stackoverflow.com/questions/47544564/how-geolocation-getcurrentposition-return-value)

[https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call](https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call)

[https://stackoverflow.com/questions/45872878/google-map-infowindow-not-opening-on-click-in-loop](https://stackoverflow.com/questions/45872878/google-map-infowindow-not-opening-on-click-in-loop)
