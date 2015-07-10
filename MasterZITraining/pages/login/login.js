
$( "#login-button" ).click(function() {

    var userInputs = [$("#username").val(), $("#password").val()];

    var dataArrlength = data.users.length;
    var dataArr = data.users;



    for (var i = 0; i <= dataArrlength - 1; i++){
        if((dataArr[i].userName == userInputs[0]) && (dataArr[i].password == userInputs[1])){

          window.location.replace("../start/start.html");
        } else {
          $("#username").css("border","solid 1px red");
          $("#password").css("border","solid 1px red");
          $(".form").append("<p>Username oder Passwort waren falsch!</p>");
        }
      }


});




  /*for (var i = 0; i <= dataArrlength - 1; i++){
    if((dataArr[i].userName == userInputs[0]) && (dataArr[i].password == userInputs[1])){

      window.location.replace('start.html');
    }
  }*/
//$('.wrapper').addClass('form-success');
