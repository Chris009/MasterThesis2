$("#login-button").click(function() {

  var userInputs = [$("#username").val(), $("#password").val()];

  var dataArrlength = data.users.length;
  var dataArr = data.users;



  for (var i = 0; i <= dataArrlength - 1; i++) {
    if ((dataArr[i].userName == userInputs[0]) && (dataArr[i].password == userInputs[1])) {

      sessionStorage.setItem("username", dataArr[i].userName);

      window.location.replace("../start/start.html");
    } else {
      $("#username").css("border", "solid 1px red");
      $("#password").css("border", "solid 1px red");

    }
  }


});
