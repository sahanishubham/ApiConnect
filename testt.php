<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- <link rel="stylesheet" href="css/custom.css"> -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style media="screen">

  *:focus {
      outline: 0;
  }

  a{
      color: inherit;
  }

  a:focus, a:hover {
      text-decoration:none;
  }

  body{
      font-family: 'Roboto', sans-serif;
  }

    .form-control{
      height: 59px;
      border-radius: 0px;
    }
    .btn-success {
      color: #fff;
      font-size: 20px;
      background: linear-gradient(to right, #5989e5, #37cfdc);
      border-color: #2c8585;
    }
    .btn-success:hover{
      color: #fff;
      font-size: 20px;
      background-color: #2c8585;
      border-color: #2c8585;
    }
    .nav-tabs>li>a{
      font-size: 20px;
    }

    .nav-tabs {
      margin-left: 105px;
      border-bottom: none;
  }

  .nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {
      border: 0px solid #ddd;
      border-bottom: 3px solid rgb(79, 154, 227);

  }
  .nav-tabs>li>a:hover {
      background: transparent;
  }

  .nav-tabs>li>a{
    border: 0px;
  }

  .alert-danger{
    text-align: center;
  }

  .nav-tabs{
    margin-left: 130px;
  }




  @media (min-width: 768px){
  .modal-dialog {
      width: 430px;
      margin: 30px auto;
    }
  }

  </style>
</head>
  <body>

    <ul class="nav navbar-nav navbar-right">
      <a href="#tab-wrong-vehicle"  data-toggle="modal" onMouseOver="this.style.color='white'" onMouseOut="this.style.color='white'"data-target="#buyers-report-modal">Log in</a>
    </ul>
    <!-- login signup modal start -->
    <div class="modal fade" id="buyers-report-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-md modal-offset-top">
            <div class="modal-content" style="border-radius: 0px; border-top: 8px solid #5989e5; border-bottom: 8px solid #37cfdc;">
                <div class="modal-body" style="margin-top: -72px;">
                    <div class="sd-tabs sd-tab-interaction" style="margin-top: 30px;">
                        <div class="row">
                          <center>
                           <img src="img/aqi.png" alt="" style="height:120px;margin-top:40px;">
                         </center>
                           <!-- <button type="button" class="close" data-dismiss="modal" style="position:relative; left:-18px;" onclick="reset();">&times;</button> -->
                            <hr>
                            <ul class="nav nav-tabs custom-bullet">
                                <li class="active"><a data-toggle="tab" href="#tab-wrong-vehicle"> Log in</a></li>
                                <li><a data-toggle="tab" href="#tab-mileage"> Sign up</a></li>
                            </ul>

                            <div class="tab-content col-md-12">
                              <br>
                                <div id="tab-wrong-vehicle" class="tab-pane  active" action="" method="post">
                                    <!-- log in start -->
                                      <div class="form-group">
                                      <input type="email" class="form-control reset" id="email" placeholder="Email" name="email">
                                      </div>
                                      <div class="form-group">
                                        <input type="password" class="form-control" id="pswd" placeholder="Password" name="pswd">
                                      </div>
                                      <div id="loading" style="padding:10px;"></div>
                                      <button type="btn" class="btn btn-success form-control" id="login_btn" onclick="">Log in</button>
                                      <p style="text-align:center;color:#2c8585;margin-top:11px;" id="welcomeuser" >Forgot your Password?</p>
                                      <div class="alert alert-danger" id="error_msg" style="display:none;"></div>
                                      <div class="alert alert-success" id="welcomeuser" style="display:none;"></div>
                                </div>
                                <!-- Log in end -->

                                <!-- Sign Up-->
                                <div id="tab-mileage" class="tab-pane">
                                    <div class="form-group">
                                      <input type="name" class="form-control" id="name1" placeholder="Name" name="name">
                                    </div>
                                    <div class="form-group">
                                       <input type="email" class="form-control" id="email1" placeholder="Email" name="email">
                                    </div>
                                    <div class="form-group">
                                       <input type="password" class="form-control" id="pswd1" placeholder="Password" name="pswd">
                                    </div>

                                   <div id="loading1" style="padding:10px;"></div>
                                      <button type="btn submit" id="signup_btn" class="btn btn-success form-control">Sign up</button>
                                    <br>
                                    <div class="alert alert-danger" id="error_msg1" style="display:none;margin-top: 15px;"></div>
                                    <div class="alert alert-success" id="welcomeuser1" style="padding: 0px 0px;margin: 14px 2px;border:none;display:none;margin-top: 15px;"></div>
                                </div>
                                <!-- sign Up end -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="js/registerlogin.js"></script>
  </body>
</html>
