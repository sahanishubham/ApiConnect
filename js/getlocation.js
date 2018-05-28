var lat ="28.704059";
var long ="77.102490";

  var newtokenvalue=document.cookie;
  var MyData;
  // var MyData="lat="+lat+"&long="+long;

  var m;
  $.ajax({
      url: 'http://aqi.in/WebAPI/api/protected/getNearestLocation',
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
        // console.log(data);
      for(key in data) {
        if(data.hasOwnProperty(key)) {
        var value = data[key];
        // document.getElementById("LocationName").innerHTML = value[0]['locationName'];
        // document.getElementById("cityName").innerHTML = value[0]['cityName'];
        var aqi=value[0]['airComponents'][0]['sensorData'];
        document.getElementById("aqi").innerHTML = aqi;
        document.getElementById("times").innerHTML = value[0]['timeStamp'];
        document.getElementById("ti").innerHTML = "Last Update :";
        if(aqi>=0 && aqi<=50)
        {
          document.getElementById("env").innerHTML = "Good";
          document.getElementById("myImg").src = "img/man/good.png";
          document.getElementById("inf").style.borderColor = "#a8c449";
          // document.getElementById("LocationName").style.color = "#a8c449";
          // document.getElementById("cityName").style.color = "#a8c449";
          document.getElementById("env").style.background = "#a8c449";
            document.getElementById("env").style.background = "#a8c449";
            document.getElementById("aqi").style.color= "#a8c449";
            document.getElementById("aqi").style.borderColor = "#a8c449";

        }
        else if(aqi>50 && aqi<=100)
        {
          document.getElementById("env").innerHTML = "Moderate";
          document.getElementById("myImg").src = "img/man/Moderate.png";
          document.getElementById("inf").style.borderColor = "#dad444";
          // document.getElementById("LocationName").style.color = "#dad444";
          document.getElementById("env").style.background = "#dad444";
            document.getElementById("env").style.background = "#dad444";
            document.getElementById("aqi").style.color= "#dad444";
            document.getElementById("aqi").style.borderColor = "#dad444";
            // document.getElementById("cityName").style.color = "#dad444";

        }
        else if(aqi>100 && aqi<=150)
        {
          document.getElementById("env").innerHTML = "Unhealthy";
          document.getElementById("myImg").src = "img/man/unhealthyforgroups.png";
          document.getElementById("inf").style.borderColor = "#e45833";
          // document.getElementById("LocationName").style.color = "#e45833";
          // document.getElementById("cityName").style.color = "black";
          document.getElementById("env").style.background = "#e45833";
            document.getElementById("env").style.background = "#e45833";
            document.getElementById("aqi").style.color= "#e45833";
            document.getElementById("aqi").style.borderColor = "#e45833";


        }
        else if(aqi>150 && aqi<=200)
        {
          document.getElementById("env").innerHTML = "Unhealthy";
          document.getElementById("myImg").src = "img/man/unhealthy.png";
          // document.getElementById("LocationName").style.color = "black";
          document.getElementById("inf").style.borderColor = "black";
          // document.getElementById("cityName").style.color = "black";
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
          // document.getElementById("LocationName").style.color = "black";
          // document.getElementById("cityName").style.color = "black";
          document.getElementById("env").style.background = "black";
          document.getElementById("env").style.background = "black";
          document.getElementById("aqi").style.color= "black";
          document.getElementById("aqi").style.borderColor = "black";
        }
        else if(aqi>300)
        {
          document.getElementById("env").innerHTML = "Hazardous";
          document.getElementById("myImg").src = "img/man/hazardous.png";
          // document.getElementById("LocationName").style.color = "black";
          document.getElementById("inf").style.borderColor = "black";
          // document.getElementById("cityName").style.color = "black";
          document.getElementById("env").style.background = "black";
          document.getElementById("env").style.background = "black";

        }

        }
        document.getElementById("PM25").innerHTML = value[0]['airComponents'][1]['sensorData'];
        document.getElementById("Temp").innerHTML = value[0]['airComponents'][2]['sensorData'];
        document.getElementById("Hum").innerHTML = value[0]['airComponents'][3]['sensorData'];
        document.getElementById("PM1").innerHTML = value[0]['airComponents'][4]['sensorData'];
        document.getElementById("PM10").innerHTML = value[0]['airComponents'][5]['sensorData'];
      }
    }
  });

function dlocation() {

  var lat ="28.704059";
  var long ="77.102490";

    var newtokenvalue=document.cookie;
    var MyData;
    // var MyData="lat="+lat+"&long="+long;

    var m;
    $.ajax({
        url: 'http://aqi.in/WebAPI/api/protected/getNearestLocation',
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
          // console.log(data);
        for(key in data) {
          if(data.hasOwnProperty(key)) {
          var value = data[key];
          // document.getElementById("LocationName").innerHTML = value[0]['locationName'];
          // document.getElementById("cityName").innerHTML = value[0]['cityName'];
          var aqi=value[0]['airComponents'][0]['sensorData'];
          document.getElementById("aqi").innerHTML = aqi;
          document.getElementById("times").innerHTML = value[0]['timeStamp'];
          document.getElementById("ti").innerHTML = "Last Update :";
          if(aqi>=0 && aqi<=50)
          {
            document.getElementById("env").innerHTML = "Good";
            document.getElementById("myImg").src = "img/man/good.png";
            document.getElementById("inf").style.borderColor = "#a8c449";
            // document.getElementById("LocationName").style.color = "#a8c449";
            // document.getElementById("cityName").style.color = "#a8c449";
            document.getElementById("env").style.background = "#a8c449";
              document.getElementById("env").style.background = "#a8c449";
              document.getElementById("aqi").style.color= "#a8c449";
              document.getElementById("aqi").style.borderColor = "#a8c449";

          }
          else if(aqi>50 && aqi<=100)
          {
            document.getElementById("env").innerHTML = "Moderate";
            document.getElementById("myImg").src = "img/man/Moderate.png";
            document.getElementById("inf").style.borderColor = "#dad444";
            // document.getElementById("LocationName").style.color = "#dad444";
            document.getElementById("env").style.background = "#dad444";
              document.getElementById("env").style.background = "#dad444";
              document.getElementById("aqi").style.color= "#dad444";
              document.getElementById("aqi").style.borderColor = "#dad444";
              // document.getElementById("cityName").style.color = "#dad444";

          }
          else if(aqi>100 && aqi<=150)
          {
            document.getElementById("env").innerHTML = "Unhealthy";
            document.getElementById("myImg").src = "img/man/unhealthyforgroups.png";
            document.getElementById("inf").style.borderColor = "#e45833";
            // document.getElementById("LocationName").style.color = "#e45833";
            // document.getElementById("cityName").style.color = "black";
            document.getElementById("env").style.background = "#e45833";
              document.getElementById("env").style.background = "#e45833";
              document.getElementById("aqi").style.color= "#e45833";
              document.getElementById("aqi").style.borderColor = "#e45833";


          }
          else if(aqi>150 && aqi<=200)
          {
            document.getElementById("env").innerHTML = "Unhealthy";
            document.getElementById("myImg").src = "img/man/unhealthy.png";
            // document.getElementById("LocationName").style.color = "black";
            document.getElementById("inf").style.borderColor = "black";
            // document.getElementById("cityName").style.color = "black";
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
            // document.getElementById("LocationName").style.color = "black";
            // document.getElementById("cityName").style.color = "black";
            document.getElementById("env").style.background = "black";
            document.getElementById("env").style.background = "black";
            document.getElementById("aqi").style.color= "black";
            document.getElementById("aqi").style.borderColor = "black";
          }
          else if(aqi>300)
          {
            document.getElementById("env").innerHTML = "Hazardous";
            document.getElementById("myImg").src = "img/man/hazardous.png";
            // document.getElementById("LocationName").style.color = "black";
            document.getElementById("inf").style.borderColor = "black";
            // document.getElementById("cityName").style.color = "black";
            document.getElementById("env").style.background = "black";
            document.getElementById("env").style.background = "black";

          }

          }
          document.getElementById("PM25").innerHTML = value[0]['airComponents'][1]['sensorData'];
          document.getElementById("Temp").innerHTML = value[0]['airComponents'][2]['sensorData'];
          document.getElementById("Hum").innerHTML = value[0]['airComponents'][3]['sensorData'];
          document.getElementById("PM1").innerHTML = value[0]['airComponents'][4]['sensorData'];
          document.getElementById("PM10").innerHTML = value[0]['airComponents'][5]['sensorData'];
        }
      }
    });

  }

  $(document).ready(function(){
   setInterval(dlocation,10000);
  });




  // setInterval(function(){dlocation();}, 10000);

// function initGeolocation()
// {
//    if( navigator.geolocation )
//    {
      // Call getCurrentPosition with success and failure callbacks
      // navigator.geolocation.getCurrentPosition( success, fail );
   // }
   //  else
   // {
     // var lat ="28.704059";
     // var long ="77.102490";
     //
     //   var newtokenvalue=document.cookie;
     //   var MyData;
     //   // var MyData="lat="+lat+"&long="+long;
     //
     //   var m;
     //   $.ajax({
     //       url: 'http://aqi.in/AppAPI/api/protected/addNearestLocation',
     //       headers: {
     //           'Authorization':'Bearer '+newtokenvalue,
     //           'Content-Type':'application/json',
     //           'Accept':'application/json',
     //           'lat':lat,
     //           'lon':long
     //       },
     //       method: 'GET',
     //       dataType: 'json',
     //       data: MyData,
     //       async: false,
     //       success: function(data){
     //         // console.log(data);
     //       for(key in data) {
     //         if(data.hasOwnProperty(key)) {
     //         var value = data[key];
     //         document.getElementById("LocationName").innerHTML = value[0]['locationName'];
     //         document.getElementById("cityName").innerHTML = value[0]['cityName'];
     //         var aqi=value[0]['airComponents'][0]['sensorData'];
     //         document.getElementById("aqi").innerHTML = aqi;
     //         document.getElementById("times").innerHTML = value[0]['timeStamp'];
     //         document.getElementById("ti").innerHTML = "Last Update :";
     //         if(aqi>=0 && aqi<=50)
     //         {
     //           document.getElementById("env").innerHTML = "Good";
     //           document.getElementById("myImg").src = "img/man/good.png";
     //           document.getElementById("inf").style.borderColor = "#a8c449";
     //           document.getElementById("LocationName").style.color = "#a8c449";
     //           document.getElementById("cityName").style.color = "#a8c449";
     //           document.getElementById("env").style.background = "#a8c449";
     //             document.getElementById("env").style.background = "#a8c449";
     //             document.getElementById("aqi").style.color= "#a8c449";
     //             document.getElementById("aqi").style.borderColor = "#a8c449";
     //
     //         }
     //         else if(aqi>50 && aqi<=100)
     //         {
     //           document.getElementById("env").innerHTML = "Moderate";
     //           document.getElementById("myImg").src = "img/man/Moderate.png";
     //           document.getElementById("inf").style.borderColor = "#dad444";
     //           document.getElementById("LocationName").style.color = "#dad444";
     //           document.getElementById("env").style.background = "#dad444";
     //             document.getElementById("env").style.background = "#dad444";
     //             document.getElementById("aqi").style.color= "#dad444";
     //             document.getElementById("aqi").style.borderColor = "#dad444";
     //             document.getElementById("cityName").style.color = "#dad444";
     //
     //         }
     //         else if(aqi>100 && aqi<=150)
     //         {
     //           document.getElementById("env").innerHTML = "Unhealthy";
     //           document.getElementById("myImg").src = "img/man/unhealthyforgroups.png";
     //           document.getElementById("inf").style.borderColor = "#e45833";
     //           document.getElementById("LocationName").style.color = "#e45833";
     //           document.getElementById("cityName").style.color = "black";
     //           document.getElementById("env").style.background = "#e45833";
     //             document.getElementById("env").style.background = "#e45833";
     //             document.getElementById("aqi").style.color= "#e45833";
     //             document.getElementById("aqi").style.borderColor = "#e45833";
     //
     //
     //         }
     //         else if(aqi>150 && aqi<=200)
     //         {
     //           document.getElementById("env").innerHTML = "Unhealthy";
     //           document.getElementById("myImg").src = "img/man/unhealthy.png";
     //           document.getElementById("LocationName").style.color = "black";
     //           document.getElementById("inf").style.borderColor = "black";
     //           document.getElementById("cityName").style.color = "black";
     //           document.getElementById("env").style.background = "black";
     //             document.getElementById("env").style.background = "black";
     //             document.getElementById("aqi").style.color= "black";
     //             document.getElementById("aqi").style.borderColor = "black";
     //         }
     //         else if(aqi>200 && aqi<=300)
     //         {
     //           document.getElementById("env").innerHTML = "Very Unhealthy";
     //           document.getElementById("myImg").src = "img/man/veryunhealthy.png";
     //           document.getElementById("inf").style.borderColor = "black";
     //           document.getElementById("LocationName").style.color = "black";
     //           document.getElementById("cityName").style.color = "black";
     //           document.getElementById("env").style.background = "black";
     //           document.getElementById("env").style.background = "black";
     //           document.getElementById("aqi").style.color= "black";
     //           document.getElementById("aqi").style.borderColor = "black";
     //         }
     //         else if(aqi>300)
     //         {
     //           document.getElementById("env").innerHTML = "Hazardous";
     //           document.getElementById("myImg").src = "img/man/hazardous.png";
     //           document.getElementById("LocationName").style.color = "black";
     //           document.getElementById("inf").style.borderColor = "black";
     //           document.getElementById("cityName").style.color = "black";
     //           document.getElementById("env").style.background = "black";
     //           document.getElementById("env").style.background = "black";
     //
     //         }
     //
     //         }
     //         document.getElementById("PM25").innerHTML = value[0]['airComponents'][1]['sensorData'];
     //         document.getElementById("Temp").innerHTML = value[0]['airComponents'][2]['sensorData'];
     //         document.getElementById("Hum").innerHTML = value[0]['airComponents'][3]['sensorData'];
     //         document.getElementById("PM1").innerHTML = value[0]['airComponents'][4]['sensorData'];
     //         document.getElementById("PM10").innerHTML = value[0]['airComponents'][5]['sensorData'];
     //       }
     //     }
     //   });
   //    alert("Sorry, your browser does not support geolocation services. Open in Other browser !");
//    }
// }
// function success(position)
// {
//
//     var long = position.coords.longitude;
//     var lat= position.coords.latitude;
//
//       var newtokenvalue=document.cookie;
//       var MyData;
//       // var MyData="lat="+lat+"&long="+long;
//
//       var m;
//       $.ajax({
//           url: 'http://aqi.in/AppAPI/api/protected/addNearestLocation',
//           headers: {
//               'Authorization':'Bearer '+newtokenvalue,
//               'Content-Type':'application/json',
//               'Accept':'application/json',
//               'lat':lat,
//               'lon':long
//           },
//           method: 'GET',
//           dataType: 'json',
//           data: MyData,
//           async: false,
//           success: function(data){
//             // console.log(data);
//           for(key in data) {
//             if(data.hasOwnProperty(key)) {
//             var value = data[key];
//             document.getElementById("LocationName").innerHTML = value[0]['locationName'];
//             document.getElementById("cityName").innerHTML = value[0]['cityName'];
//             var aqi=value[0]['airComponents'][0]['sensorData'];
//             document.getElementById("aqi").innerHTML = aqi;
//             document.getElementById("times").innerHTML = value[0]['timeStamp'];
//             document.getElementById("ti").innerHTML = "Last Update :";
//             if(aqi>=0 && aqi<=50)
//             {
//               document.getElementById("env").innerHTML = "Good";
//               document.getElementById("myImg").src = "img/man/good.png";
//               document.getElementById("inf").style.borderColor = "#a8c449";
//               document.getElementById("LocationName").style.color = "#a8c449";
//               document.getElementById("cityName").style.color = "#a8c449";
//               document.getElementById("env").style.background = "#a8c449";
//                 document.getElementById("env").style.background = "#a8c449";
//                 document.getElementById("aqi").style.color= "#a8c449";
//                 document.getElementById("aqi").style.borderColor = "#a8c449";
//
//             }
//             else if(aqi>50 && aqi<=100)
//             {
//               document.getElementById("env").innerHTML = "Moderate";
//               document.getElementById("myImg").src = "img/man/Moderate.png";
//               document.getElementById("inf").style.borderColor = "#dad444";
//               document.getElementById("LocationName").style.color = "#dad444";
//               document.getElementById("env").style.background = "#dad444";
//                 document.getElementById("env").style.background = "#dad444";
//                 document.getElementById("aqi").style.color= "#dad444";
//                 document.getElementById("aqi").style.borderColor = "#dad444";
//                 document.getElementById("cityName").style.color = "#dad444";
//
//             }
//             else if(aqi>100 && aqi<=150)
//             {
//               document.getElementById("env").innerHTML = "Unhealthy";
//               document.getElementById("myImg").src = "img/man/unhealthyforgroups.png";
//               document.getElementById("inf").style.borderColor = "#e45833";
//               document.getElementById("LocationName").style.color = "#e45833";
//               document.getElementById("cityName").style.color = "black";
//               document.getElementById("env").style.background = "#e45833";
//                 document.getElementById("env").style.background = "#e45833";
//                 document.getElementById("aqi").style.color= "#e45833";
//                 document.getElementById("aqi").style.borderColor = "#e45833";
//
//
//             }
//             else if(aqi>150 && aqi<=200)
//             {
//               document.getElementById("env").innerHTML = "Unhealthy";
//               document.getElementById("myImg").src = "img/man/unhealthy.png";
//               document.getElementById("LocationName").style.color = "black";
//               document.getElementById("inf").style.borderColor = "black";
//               document.getElementById("cityName").style.color = "black";
//               document.getElementById("env").style.background = "black";
//                 document.getElementById("env").style.background = "black";
//                 document.getElementById("aqi").style.color= "black";
//                 document.getElementById("aqi").style.borderColor = "black";
//             }
//             else if(aqi>200 && aqi<=300)
//             {
//               document.getElementById("env").innerHTML = "Very Unhealthy";
//               document.getElementById("myImg").src = "img/man/veryunhealthy.png";
//               document.getElementById("inf").style.borderColor = "black";
//               document.getElementById("LocationName").style.color = "black";
//               document.getElementById("cityName").style.color = "black";
//               document.getElementById("env").style.background = "black";
//               document.getElementById("env").style.background = "black";
//               document.getElementById("aqi").style.color= "black";
//               document.getElementById("aqi").style.borderColor = "black";
//             }
//             else if(aqi>300)
//             {
//               document.getElementById("env").innerHTML = "Hazardous";
//               document.getElementById("myImg").src = "img/man/hazardous.png";
//               document.getElementById("LocationName").style.color = "black";
//               document.getElementById("inf").style.borderColor = "black";
//               document.getElementById("cityName").style.color = "black";
//               document.getElementById("env").style.background = "black";
//               document.getElementById("env").style.background = "black";
//
//             }
//
//             }
//             document.getElementById("PM25").innerHTML = value[0]['airComponents'][1]['sensorData'];
//             document.getElementById("Temp").innerHTML = value[0]['airComponents'][2]['sensorData'];
//             document.getElementById("Hum").innerHTML = value[0]['airComponents'][3]['sensorData'];
//             document.getElementById("PM1").innerHTML = value[0]['airComponents'][4]['sensorData'];
//             document.getElementById("PM10").innerHTML = value[0]['airComponents'][5]['sensorData'];
//           }
//         }
//       });
// }
//
// function fail()
// {
//
// }
