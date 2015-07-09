function storyNav() {
    window.location.replace('../story/story.html');
}
function miniNav() {
    window.location.replace('../story/story.html');
}
function scoresNav() {
    window.location.replace('../scores/scores.html');
}
function settingsNav() {
    window.location.replace('../settings/settings.html');
}


function login(){
    check();

  $('form').fadeOut(500);

}


function check(){
  var userInputs = [$("#username").val(), $("#password").val()];

  var dataArrlength = data.users.length;
  var dataArr = data.users;



  for (var i = 0; i <= dataArrlength - 1; i++){
    if((dataArr[i].userName == userInputs[0]) && (dataArr[i].password == userInputs[1])){

      window.location.replace('start.html');
    }
  }
//$('.wrapper').addClass('form-success');

}
