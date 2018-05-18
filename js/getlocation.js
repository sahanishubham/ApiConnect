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

      var newtokenvalue=document.cookie;
      var MyData;
      // var MyData="lat="+lat+"&long="+long;

      var m;
      $.ajax({
          url: 'http://aqi.in/AppAPI/api/protected/addNearestLocation',
          headers: {
              'Authorization':'Bearer '+newtokenvalue,
              'Content-Type':'application/json',
              'Accept':'application/json',
              'lat':lat,
              'lon':long
          },
          method: 'GET',
          dataType: 'json',
          data: MyData,
          async: false,
          success: function(data){
          for(key in data) {
            if(data.hasOwnProperty(key)) {
            var value = data[key];
            document.getElementById("LocationName").innerHTML = value[0]['locationName'];
            document.getElementById("cityName").innerHTML = value[0]['cityName'];
            var aqi=value[0]['airComponents'][0]['sensorData'];
            document.getElementById("aqi").innerHTML = aqi;
            if(aqi>=0 && aqi<=50)
            {
              document.getElementById("env").innerHTML = "Good";
              document.getElementById("myImg").src = "img/man/good.png";
              document.getElementById("inf").style.borderColor = "black";
              document.getElementById("LocationName").style.color = "black";
              document.getElementById("env").style.background = "black";
                document.getElementById("env").style.background = "black";
                document.getElementById("aqi").style.color= "black";
                document.getElementById("aqi").style.borderColor = "black";

            }
            else if(aqi>50 && aqi<=100)
            {
              document.getElementById("env").innerHTML = "Moderate";
              document.getElementById("myImg").src = "img/man/Moderate.png";
              document.getElementById("inf").style.borderColor = "black";
              document.getElementById("LocationName").style.color = "black";
              document.getElementById("env").style.background = "black";
                document.getElementById("env").style.background = "black";
                document.getElementById("aqi").style.color= "black";
                document.getElementById("aqi").style.borderColor = "black";

            }
            else if(aqi>100 && aqi<=150)
            {
              document.getElementById("env").innerHTML = "Unhealthy";
              document.getElementById("myImg").src = "img/man/unhealthyforgroups.png";
              document.getElementById("inf").style.borderColor = "#e45833";
              document.getElementById("LocationName").style.color = "#e45833";
              document.getElementById("env").style.background = "#e45833";
                document.getElementById("env").style.background = "#e45833";
                document.getElementById("aqi").style.color= "#e45833";
                document.getElementById("aqi").style.borderColor = "#e45833";


            }
            else if(aqi>150 && aqi<=200)
            {
              document.getElementById("env").innerHTML = "Unhealthy";
              document.getElementById("myImg").src = "img/man/unhealthy.png";
              document.getElementById("inf").style.borderColor = "black";
              document.getElementById("LocationName").style.color = "black";
              document.getElementById("env").style.background = "black";
                document.getElementById("env").style.background = "black";
                document.getElementById("aqi").style.color= "black";
                document.getElementById("aqi").style.borderColor = "black";
            }
            else if(aqi>200 && aqi<=300)
            {
              document.getElementById("env").innerHTML = "Very Unhealthy";
              document.getElementById("myImg").src = "img/man/veryunhealthy.png";
              document.getElementById("inf").style.borderColor = "black";
              document.getElementById("LocationName").style.color = "black";
              document.getElementById("env").style.background = "black";
              document.getElementById("env").style.background = "black";
              document.getElementById("aqi").style.color= "black";
              document.getElementById("aqi").style.borderColor = "black";
            }
            else if(aqi>300)
            {
              document.getElementById("env").innerHTML = "Hazardous";
              document.getElementById("myImg").src = "img/man/hazardous.png";
              document.getElementById("inf").style.borderColor = "black";
              document.getElementById("LocationName").style.color = "black";
              document.getElementById("env").style.background = "black";
              document.getElementById("env").style.background = "black";

            }

            }
            // alert(value[0]['airComponents'][1]['sensorData']);

            document.getElementById("PM25").innerHTML = value[0]['airComponents'][1]['sensorData'];

          }
        }
      });
}

function fail()
{
  alert("Sorry Your Bowser does'nt support geolocation !");
}
