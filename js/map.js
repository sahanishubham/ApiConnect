var tokenvalue=document.cookie;
var MyData;
var m;
$.ajax({
    url: 'http://aqi.in/WebAPI/api/protected/getAllLocations',
    headers: {
        'Authorization':'Bearer '+tokenvalue,
        'Content-Type':'application/json',
        'Accept':'application/json'
    },
    method: 'GET',
    dataType: 'json',
    data: MyData,
    success: function(data){

  for(key in data) {
    if(data.hasOwnProperty(key)) {
    var value = data[key];
    var i=0;


    var styles = [ { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#444444" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "color": "#f4f4f4" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [ { "saturation": "-100" }, { "lightness": "57" } ] }, { "featureType": "poi", "elementType": "geometry.stroke", "stylers": [ { "lightness": "1" } ] }, { "featureType": "poi", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": -100 }, { "lightness": 45 } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit.station.bus", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "transit.station.bus", "elementType": "labels.text.fill", "stylers": [ { "saturation": "0" }, { "lightness": "0" }, { "gamma": "1.00" }, { "weight": "1" } ] }, { "featureType": "transit.station.bus", "elementType": "labels.icon", "stylers": [ { "saturation": "-100" }, { "weight": "1" }, { "lightness": "0" } ] }, { "featureType": "transit.station.rail", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "transit.station.rail", "elementType": "labels.text.fill", "stylers": [ { "gamma": "1" }, { "lightness": "40" } ] }, { "featureType": "transit.station.rail", "elementType": "labels.icon", "stylers": [ { "saturation": "-100" }, { "lightness": "30" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "color": "#33B3F9" }, { "visibility": "on" } ] } ];

   //Styles End
      //Create a styled map using the above stylessea
    var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: new google.maps.LatLng(28.619988,77.292355),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i<value.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(value[i]['lat'], value[i]['lon']),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          if(Number(value[i]['sensorValue'])!=0)
          {
            infowindow.setContent('<h3>'+value[i]['locationName']+'</h3>'+'</br><h4>'+Number(value[i]['sensorValue'])+'</h4>');
          }
          else {
            infowindow.setContent('<h3>'+value[i]['locationName']+'</h3 style="color:white">'+'</br><h3>NA</h2>');
          }
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  }
}
}
});
