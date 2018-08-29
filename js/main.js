
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 20,
    zoomcontrol: true, 
    fullscreencontrol: true 
  });

 //  SETTING UP THE MARKER
	var marker = new google.maps.Marker({
		position: {lat: 40.8054491, lng: -73.9654415},
		map: map
	});
}
