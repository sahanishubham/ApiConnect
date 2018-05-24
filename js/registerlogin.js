
  // reset form
  $('#buyers-report-modal').on('hidden.bs.modal', function (e) {
    $(this)
      .find("input")
        .val('')
        .end()
  });

  // log in to log in pane show
  // $('a[data-toggle=modal][data-target]').click(function () {
  //   var target = $(this).attr('href');
  //   $('a[data-toggle=tab][href=' + target + ']').tab('show');
  // });


  // login_function
  $('#login_btn').click(function () {
    var newtokenvalue=document.cookie;
    var email=$('#email0').val();
    var pswd=$('#pswd0').val();

    if(email!='' && pswd!='' )
    {
      // var data="email="+ email +"&password="+pswd;
      var data = '{ "email":"'+email+'", "password":"'+pswd+'"}';
      var data=JSON.parse(data);
      // var data="{"email": "shubhamsahaninitkkr@gmail.com", "password": "1234567"}";
      $.ajax({
        url: 'http://aqi.in/webAPI/api/protected/logIn',
        headers: {
            'Authorization':'Bearer '+newtokenvalue,
            'Content-Type':' application/x-www-form-urlencoded',
            'Accept':'application/json',
        },
        method: 'POST',
        dataType: 'json',
        data: JSON.stringify(data),
        processData: false,
        async: false,
        contentType: 'application/json',
        success:function(data){
          if(data.message=='Access is successful!')
          {
            $('#error_msg').hide();
            $('#login_btn').hide();
            $('#loading').html("<center><img src='img/lo.gif' style='height:80px;margin-top:-30px;margin-bottom:-66px;box-shadow:none;padding:8px;'/></center> ");

            setTimeout(function () {
            $('#loading').hide();
            $('#welcomeuser').html('<div class="alert alert-success">Logged in SuccessFully !</div>'); }, 1100);

            setTimeout(function () {
            window.location.href = "index.html"; }, 2200);
          }

        if(data.message=='This email is not registered!')
          {
            $('#error_msg').html("<img src='img/lo.gif' style='height:80px;margin-top:-30px;margin-bottom:-66px;box-shadow:none;'/> ");
            $('#error_msg').css('display','block');
            $('#error_msg').html('Email is not registered !');
          }

          if(data.message=='Access is denied!')
          {
            $('#error_msg').html("<img src='img/lo.gif' style='height:80px;margin-top:-30px;margin-bottom:-66px;box-shadow:none;'/> ");
            $('#error_msg').css('display','block');
            $('#error_msg').html('Email or Password is incorrect !');
          }
        },

        error:function()
        {
          $('#login_btn').html('Login Failed !');
          $('#error_msg').css('display','block');
          $('#error_msg').html('Please check Your internet connection !');
        }
      });
    }
    else {
      $('#error_msg').css('display','block');
      $('#error_msg').html('Email or Password cannot be empty !');
    }


  });


// signup function
  $('#signup_btn').click(function() {
    var newtokenvalue=document.cookie;
    var name=$('#name1').val();
    var email=$('#email1').val();
    var pswd=$('#pswd1').val();

    if(email!='' && pswd!='' &&name!='')
    {

          var data = '{ "userName":"'+name+'","email":"'+email+'", "password":"'+pswd+'"}';
          var data=JSON.parse(data);
          $.ajax({
            url: 'http://aqi.in/webAPI/api/protected/signUp',
            headers: {
                'Authorization':'Bearer '+newtokenvalue,
                'Content-Type':' application/x-www-form-urlencoded',
                'Accept':'application/json',
            },
            method: 'POST',
            dataType: 'json',
            data: JSON.stringify(data),
            processData: false,
            async: false,
            contentType: 'application/json',
            success:function(data){
              if(data.message=='Insert OK!')
              {
                $('#error_msg1').hide();
                $('#signup_btn').hide();
                $('#loading1').html("<center><img src='img/lo.gif' style='height:80px;margin-top:-30px;margin-bottom:-66px;box-shadow:none;padding:8px;'/></center> ");

                setTimeout(function () {
                $('#loading').hide();
                $('#welcomeuser1').html('<div class="alert alert-success">Registered SuccessFully !</div>'); }, 1100);

                setTimeout(function () {
                window.location.href = "index.html"; }, 2200);
              }

            if(data.message=='This email is already registered!')
              {
                $('#error_msg1').html("<img src='img/lo.gif' style='height:80px;margin-top:-30px;margin-bottom:-66px;box-shadow:none;'/> ");
                $('#error_msg1').css('display','block');
                $('#error_msg1').html('This email is already registered!');
              }

              if(data.message=='Access is denied!')
              {
                $('#error_msg1').html("<img src='img/lo.gif' style='height:80px;margin-top:-30px;margin-bottom:-66px;box-shadow:none;'/> ");
                $('#error_msg1').css('display','block');
                $('#error_msg1').html('Email or Password is incorrect !');
              }
            },


            error:function()
            {
              $('#login_btn').html('Login Failed !');
              $('#error_msg1').css('display','block');
              $('#error_msg1').html('Please check Your internet connection !');
            }
          });
    }
    else {
      $('#error_msg1').css('display','block');
      $('#error_msg1').html('All fields are required !');
    }

});
