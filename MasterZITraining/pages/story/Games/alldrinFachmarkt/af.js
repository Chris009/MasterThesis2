﻿


var choices = [{
  title: "Bier1",
  alk: false,
  url: "./../../../../img/GetraenkeMarkt/piece1.jpg"
}, {
  title: "Bier2",
  alk: false,
  url: "./../../../../img/GetraenkeMarkt/piece2.jpg"
}, {
  title: "Bier3",
  alk: true,
  url: "./../../../../img/GetraenkeMarkt/piece3.jpg"
}, {
  title: "Bier4",
  alk: false,
  url: "./../../../../img/GetraenkeMarkt/piece4.jpg"
}, {
  title: "Bier5",
  alk: true,
  url: "./../../../../img/GetraenkeMarkt/piece5.jpg"
}, ];



function backNav() {

  window.location.replace('../../story.html');

}

function homeNav() {

  window.location.replace('../../../start/start.html');

}


var imgPanorama;
var divXstart, divYstart, backgroundX, backgroundY;
$(document).ready(function() {


  resize();


  $('#makeMeDraggable').draggable({
    containment: '#containment',
    cursor: 'move'
  });


});


function resize() { //init
  $("body").addClass("stop-scrolling");
  imgPanorama = $('#imageSizer');




  var widthContainer = ($(imgPanorama).width() + ($(imgPanorama).width() - $(window).width()));
  var heightContainer = ($(imgPanorama).height() + ($(imgPanorama).height() - $(window).height()));

  $("#containment").width(widthContainer);
  $("#containment").height(heightContainer);

  var containerPosTop = (-heightContainer / 2) + ($(window).height() / 2);
  var containerPosLeft = (-widthContainer / 2) + ($(window).width() / 2);

  $("#containment").css({
    top: containerPosTop,
    left: containerPosLeft,
    position: 'absolute'
  });

  // Placements


}

var panoHeight = $('.imgHolder').height();
var panoWidth = $('.imgHolder').width();
var aspectRatio = panoWidth / panoHeight;



function outsideIn() {
  $(".imgHolder").css("background-image", "url(../../../../img/GetraenkeMarkt/inside2.jpg)");
  $("#imageSizer").attr("src", "../../../../img/GetraenkeMarkt/inside2.jpg")
  $(".doorNo1").css("visibility", "hidden");
  $(".doorNo21").css("visibility", "visible");
  $(".doorNo21").addClass("hvr-reveal");
  $(".doorNo22").css("visibility", "visible");
  $(".doorNo22").addClass("hvr-reveal");
  resize();
}

function insideOut() {
  $(".imgHolder").css("background-image", "url(../../../../img/GetraenkeMarkt/outside.jpg)");
  $("#imageSizer").attr("src", "../../../../img/GetraenkeMarkt/outside.jpg")
  $(".doorNo1").css("visibility", "visible");
  $(".doorNo21").css("visibility", "hidden");
  $(".doorNo22").css("visibility", "hidden");
  resize();
}

function insideTwo() {
  $(".imgHolder").css("background-image", "url(../../../../img/GetraenkeMarkt/inside3.jpg)");
  $("#imageSizer").attr("src", "../../../../img/GetraenkeMarkt/inside3.jpg")
  $("#imageSizer").css("width", "2913.4px");
  $(".doorNo21").css("visibility", "hidden");
  $(".doorNo22").css("visibility", "hidden");
  $(".doorNo31").css("visibility", "visible");
  $(".doorNo32").css("visibility", "visible");
  resize();

}

function insideBackTwo() {
  $(".imgHolder").css("background-image", "url(../../../../img/GetraenkeMarkt/inside2.jpg)");
  $("#imageSizer").attr("src", "../../../../img/GetraenkeMarkt/inside2.jpg")
  $(".doorNo21").css("visibility", "visible");
  $(".doorNo22").css("visibility", "visible");
  $(".doorNo31").css("visibility", "hidden");
  $(".doorNo32").css("visibility", "hidden");
  resize();
}

function insideThree() {
  $(".imgHolder").css("background-image", "url(../../../../img/GetraenkeMarkt/inside4.jpg)");
  $("#imageSizer").attr("src", "../../../../img/GetraenkeMarkt/inside4.jpg")
  $(".doorNo31").css("visibility", "hidden");
  $(".doorNo32").css("visibility", "hidden");
  $(".doorNo41").css("visibility", "visible");
  $(".doorNo42").css("visibility", "visible");
  resize();
}

function insideBackThree() {
  $(".imgHolder").css("background-image", "url(../../../../img/GetraenkeMarkt/inside3.jpg)");
  $("#imageSizer").attr("src", "../../../../img/GetraenkeMarkt/inside3.jpg")
  $(".doorNo31").css("visibility", "visible");
  $(".doorNo32").css("visibility", "visible");
  $(".doorNo41").css("visibility", "hidden");
  $(".doorNo42").css("visibility", "hidden");
  resize();
}



function insideFour() {
  $(".imgHolder").css("background-image", "url(../../../../img/GetraenkeMarkt/shelf.jpg)");
  $("#imageSizer").attr("src", "../../../../img/GetraenkeMarkt/shelf.jpg");
  $("#imageSizer").width($(window).width());
  $("#imageSizer").height($(window).height());
  $(".doorNo41").css("visibility", "hidden");
  $(".doorNo42").css("visibility", "hidden");

  gameStart();

}

function gameStart() {

  window.location.replace('gameAf.html');

}
var round = 1;
var newArr = [];
var choicesLength;
function gameBegin() {
  choicesLength = choices.length;
  count = 0;
  if (round == 1) {
    for(var i = choicesLength; i >=1; i--) {
      var choice = choices[Math.floor(Math.random() * choices.length)];

      choices.splice($.inArray(choice, choices), 1);

      var URL = choice.url;
      var attribute = choice.alk;
      var piece = $(".piece" + i);
      $(piece).attr("value", attribute);
      $(piece).css("background-image", "url(" + URL + ")");
    }
  }

}

var checksum = 0;
var points = 50;

function check() {

  var sender = $(window.event.target);
  var attribute = $(sender).attr("value");
  checksum++;
  if (checksum <= 1) {
    if (attribute == "false") {
      $(sender).css("border", "5px solid rgb(25, 255, 25)");
      points += 50;
    } else {
      $(sender).css("border", "5px solid red");
      points -= 25;
    }
  } else if (checksum == 2) {

    if (attribute == "false") {
      $(sender).css("border", "5px solid rgb(25, 255, 25)");
      points += 50;
    } else {
      $(sender).css("border", "5px solid red");
      points -= 25;
    }

    score = points - count;
    if(score <= 0){
      score = 0;
    }
    congrats();
  }
}

var score;
var e;

function congrats() {

  e = "<label id='congratsMessage'>Herzlichen Glückwunsch du hast Runde " + round + " absolviert! Du hast dabei " + score + " Punkte in " + count + " Sekunden erreicht!</label>";

  $(".randombox").addClass("hidden");
  $(".congratsBox").removeClass("hidden");


  $(".congratsBox").prepend(e);

}

function retry() {

  $("#congratsMessage").remove();
  $(".congratsBox").addClass("hidden");
  $(".randombox").removeClass("hidden");
  gameUpdate();
}

var round = 1;
var roundOnePoints;
var roundTwoPoints;
var roundThreePoints;
var roundOneTime;
var roundTwoTime;
var roundThreeTime;

function nextRound() {
  if (round == 1) {
    roundOnePoints = score;
    roundOneTime = count;
  } else if (round == 2) {
    roundTwoPoints = score;
    roundTwoTime = count;
    $("#nextBtn").html("Endergebnis");
  } else {
    roundThreePoints = score;
    roundThreeTime = count;

  }

  $(".randombox").removeClass("hidden");
  $(".congratsBox").addClass("hidden");
  $("#congratsMessage").remove();
  round++;
  gameUpdate();
}

var count = 0;
var counter = setInterval(timerStart, 1000);

function timerStart() {

  count++;
  $(".timer").text(count);
}


function gameUpdate() {

  count = 0;
  checksum = 0;
  points = 50;
  if (round <= 3) {
    for (var i = choicesLength; i >= 1; i--) {
      $(".piece" + i).css("border", "1px solid black");
    }
  } else {
    endGameProtocol();
  }
}


/*function endGameProtocol() {
  $(".randombox").addClass("hidden");

  var endScore = roundOnePoints + roundTwoPoints + roundThreePoints;
  var endTime = roundOneTime + roundTwoTime + roundThreeTime;

  e = '<p class="endScreen">Herzlichen Glückwunsch! Du hast ' + endScore + ' Punkte in insgesamt ' + endTime + ' Sekunden erreicht!</p>';
  $("#hurra").append(e);
}*/

function endGameProtocol() {
  var endScore = roundOnePoints + roundTwoPoints + roundThreePoints;
  var endCounter = roundOneTime + roundTwoTime + roundThreeTime;
  var e = "<label id='congratsMessage'>Herzlichen Glückwunsch du hast das Spiel mit " + endScore + " Punkte in insgesamt " + endCounter + " Sekunden absolviert!</label>";
  $(".randomBox").addClass("hidden");
  $(".congratsBox").removeClass("hidden");
  $("#retryBtn").addClass("hidden");
  $("#nextBtn").addClass("hidden");
  $("#homeBtn").removeClass("hidden");
  $(".congratsBox").prepend(e);
}

function home() {
  window.location.replace('../../story.html');
}


/*else {

  for (var i = choicesLength; i >= 1; i--) {
    var cssURL = $(".piece" + i).css("background-image");
    cssURL = cssURL.replace('url(', '').replace(')', '');
    newArr.push(cssURL);
  }

  for (var i = choicesLength; i >= 1; i--) {
    var newCssUrl = newArr[Math.floor(Math.random() * newArr.length)];
    newArr.splice($.inArray(newCssUrl, newArr), 1);
    $(".piece" + i).css("background-image", "url(" + newCssUrl + ")");
  }

}
*/










//ZOOM

//function zoomIn(){
//    //img
//    var imgWidth = $('.imgHolder').width() * 1.1;
//    var imgHeight = $('.imgHolder').width() / aspectRatio;
//    $('.imgHolder').width(imgWidth);
//    $('.imgHolder').height(imgHeight);

//    //door1
//    var door1Width = $('.doorNo1').width() * 1.1;
//    var door1Height = $('.doorNo1').height() * 1.1;
//    $('.doorNo1').width(door1Width);
//    $('.doorNo1').height(door1Height);
//	resize();
//}

//function zoomOut() {
//    //img
//    var imgWidth = $('.imgHolder').width() * 0.9;
//    var imgHeight = $('.imgHolder').width() / aspectRatio;
//    $('.imgHolder').width(imgWidth);
//    $('.imgHolder').height(imgHeight);



//    //door1
//    var door1Width = $('.doorNo1').width() * 0.9;
//    var door1Height = $('.doorNo1').height() * 0.9;
//    $('.doorNo1').width(door1Width);
//    $('.doorNo1').height(door1Height);

//	resize();
//}
