<html>
  <head>
   <script type="text/javascript">
     function initGeolocation()
     {
        if( navigator.geolocation )
        {
           // Call getCurrentPosition with success and failure callbacks
           navigator.geolocation.getCurrentPosition( success, fail );
        }
        else
        {
           alert("Sorry, your browser does not support geolocation services.");
        }
     }
     function success(position)
     {

         var long = position.coords.longitude;
         var lat= position.coords.latitude;

         alert(long);
         alert(lat);

     }

     function fail()
     {
        // Could not obtain location
     }
   </script>
 </head>

 <body onLoad="initGeolocation();">
   <FORM NAME="rd" METHOD="POST" ACTION="index.html">
     <INPUT TYPE="text" NAME="long" ID="long" VALUE="">
     <INPUT TYPE="text" NAME="lat" ID="lat" VALUE="">
 </body>
</html>
