var tokenvalue=document.cookie;
var MyData;
var m;
$.ajax({
    url: 'http://aqi.in/AppAPI/api/protected/getAllLocations',
    headers: {
        'Authorization':'Bearer '+tokenvalue,
        'Content-Type':'application/json',
        'Accept':'application/json'
    },
    method: 'GET',
    dataType: 'json',
    data: MyData,
    success: function(data){


      function initialize() {

      //replace this variable with the json you generate in the google maps api wizard tool
      //Styles Start
       var styles = [ { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#444444" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "color": "#FFFFFF" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [ { "saturation": "-100" }, { "lightness": "57" } ] }, { "featureType": "poi", "elementType": "geometry.stroke", "stylers": [ { "lightness": "1" } ] }, { "featureType": "poi", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": -100 }, { "lightness": 45 } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit.station.bus", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "transit.station.bus", "elementType": "labels.text.fill", "stylers": [ { "saturation": "0" }, { "lightness": "0" }, { "gamma": "1.00" }, { "weight": "1" } ] }, { "featureType": "transit.station.bus", "elementType": "labels.icon", "stylers": [ { "saturation": "-100" }, { "weight": "1" }, { "lightness": "0" } ] }, { "featureType": "transit.station.rail", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "transit.station.rail", "elementType": "labels.text.fill", "stylers": [ { "gamma": "1" }, { "lightness": "40" } ] }, { "featureType": "transit.station.rail", "elementType": "labels.icon", "stylers": [ { "saturation": "-100" }, { "lightness": "30" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "color": "#33B3F9" }, { "visibility": "on" } ] } ];

      //Styles End
         //Create a styled map using the above stylessea
         var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

         var mapProp = {
            center:new google.maps.LatLng(-33.890542, 151.274856),//set the centre of the map. In my case it is the same as the position of the map pin.
            zoom:5,
            mapTypeId:google.maps.MapTypeId.ROADMAP
         };

         var map=new google.maps.Map(document.getElementById("map"),mapProp);

         //Set the map to use the styled map
         map.mapTypes.set('map_style', styledMap);
         map.setMapTypeId('map_style');

         var locations = [
           ['Bondi Beach', -33.890542, 151.274856, 4],
           ['Coogee Beach', -33.923036, 151.259052, 5],
           ['Cronulla Beach', -34.028249, 151.157507, 3],
           ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
           ['Maroubra Beach', -33.950198, 151.259302, 1]
         ];

         var infowindow = new google.maps.InfoWindow();

         var marker, i;

         for (i = 0; i < locations.length; i++) {
           marker = new google.maps.Marker({
             position: new google.maps.LatLng(locations[i][1], locations[i][2]),
             map: map
           });

           google.maps.event.addListener(marker, 'click', (function(marker, i) {
             return function() {
               infowindow.setContent(locations[i][0]);
               infowindow.open(map, marker);
             }
           })(marker, i));
         }


      }

      google.maps.event.addDomListener(window, 'load', initialize);



  }
});
