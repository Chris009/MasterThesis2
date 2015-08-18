


var choices = [{
  title: "Bier1",
  alk: true,
  url: "./../../../../img/GetraenkeMarkt/piece1.jpg"
}, {
  title: "Bier2",
  alk: true,
  url: "./../../../../img/GetraenkeMarkt/piece2.jpg"
}, {
  title: "Bier3",
  alk: true,
  url: "./../../../../img/GetraenkeMarkt/piece3.jpg"
}, {
  title: "Bier4",
  alk: true,
  url: "./../../../../img/GetraenkeMarkt/piece4.jpg"
}, {
  title: "Bier5",
  alk: true,
  url: "./../../../../img/GetraenkeMarkt/piece5.jpg"
}, {
  title: "Bionade1",
  alk: false,
  url: "./../../../../img/GetraenkeMarkt/piece6.jpg"
}, {
  title: "Bionade2",
  alk: false,
  url: "./../../../../img/GetraenkeMarkt/piece7.jpg"
}, {
  title: "Bionade3",
  alk: false,
  url: "./../../../../img/GetraenkeMarkt/piece8.jpg"
},  {
  title: "Bionade4",
  alk: false,
  url: "./../../../../img/GetraenkeMarkt/piece9.jpg"
}, {
  title: "Monster",
  alk: false,
  url: "./../../../../img/GetraenkeMarkt/piece10.jpg"
},

];



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
  $("#imageSizer").attr("src", "../../../../img/GetraenkeMarkt/inside2.jpg");
  $(".doorNo1").css("visibility", "hidden");
  $(".doorNo21").css("visibility", "visible");
  $(".doorNo21").addClass("hvr-reveal");
  $(".doorNo22").css("visibility", "visible");
  $(".doorNo22").addClass("hvr-reveal");
  resize();
}

function insideOut() {
  $(".imgHolder").css("background-image", "url(../../../../img/GetraenkeMarkt/outside.jpg)");
  $("#imageSizer").attr("src", "../../../../img/GetraenkeMarkt/outside.jpg");
  $(".doorNo1").css("visibility", "visible");
  $(".doorNo21").css("visibility", "hidden");
  $(".doorNo22").css("visibility", "hidden");
  resize();
}

function insideTwo() {
  $(".imgHolder").css("background-image", "url(../../../../img/GetraenkeMarkt/inside3.jpg)");
  $("#imageSizer").attr("src", "../../../../img/GetraenkeMarkt/inside3.jpg");
  $("#imageSizer").css("width", "2913.4px");
  $(".doorNo21").css("visibility", "hidden");
  $(".doorNo22").css("visibility", "hidden");
  $(".doorNo31").css("visibility", "visible");
  $(".doorNo32").css("visibility", "visible");
  resize();

}

function insideBackTwo() {
  $(".imgHolder").css("background-image", "url(../../../../img/GetraenkeMarkt/inside2.jpg)");
  $("#imageSizer").attr("src", "../../../../img/GetraenkeMarkt/inside2.jpg");
  $(".doorNo21").css("visibility", "visible");
  $(".doorNo22").css("visibility", "visible");
  $(".doorNo31").css("visibility", "hidden");
  $(".doorNo32").css("visibility", "hidden");
  resize();
}

function insideThree() {
  $(".imgHolder").css("background-image", "url(../../../../img/GetraenkeMarkt/inside4.jpg)");
  $("#imageSizer").attr("src", "../../../../img/GetraenkeMarkt/inside4.jpg");
  $(".doorNo31").css("visibility", "hidden");
  $(".doorNo32").css("visibility", "hidden");
  $(".doorNo41").css("visibility", "visible");
  $(".doorNo42").css("visibility", "visible");
  resize();
}

function insideBackThree() {
  $(".imgHolder").css("background-image", "url(../../../../img/GetraenkeMarkt/inside3.jpg)");
  $("#imageSizer").attr("src", "../../../../img/GetraenkeMarkt/inside3.jpg");
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
var count = 0;
var counter;

function timerStart() {

  count++;
  $(".timer").text(count);
}


function gameBegin() {
  counter = setInterval(timerStart, 1000);
  $(".randombox").removeClass("hidden");
  $(".preGame").addClass("hidden");
  choicesLength = choices.length;
  count = 0;
  if (round == 1) {
    for (var i = choicesLength; i >= 1; i--) {
      var choice = choices[Math.floor(Math.random() * choices.length)];

      choices.splice($.inArray(choice, choices), 1);

      var URL = choice.url;
      var attribute = choice.alk;
      var title = choice.title;
      var piece = $(".piece" + i);
      $(piece).attr("value", attribute);
      $(piece).attr("title", title);
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
    clearInterval(counter);
    score = points - count;
    if (score <= 0) {
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

if(round <= 2){
  $(".randombox").removeClass("hidden");
  $(".congratsBox").addClass("hidden");
}
  $("#congratsMessage").remove();
  round++;
  gameUpdate();
}



function gameUpdate() {
  $(".timer").text("0");
  counter = setInterval(timerStart,1000);
  var randomObj = {};
  var swapArr = [];
  count = 0;
  checksum = 0;
  points = 50;
  if (round <= 3) {
    for (var i = choicesLength; i >= 1; i--) {

      $(".piece" + i).css("border", "1px solid black");

      var cssURL = $(".piece" + i).css("background-image");
      cssURL = cssURL.replace('url(', '').replace(')', '');

      arrObj = {
        title: $(".piece" + i).title,
        alk: $(".piece" + i).value,
        url: cssURL
      }
      swapArr.push(arrObj);
    }

    for (var j = choicesLength; j >= 1; j--) {
      var randomObj = swapArr[Math.floor(Math.random() * swapArr.length)];

      swapArr.splice($.inArray(randomObj, swapArr), 1);

      var URL = randomObj.url;
      var attribute = randomObj.alk;
      var title = randomObj.title;
      var piece = $(".piece" + j);
      $(piece).attr("value", attribute);
      $(piece).attr("title", title);
      $(piece).css("background-image", "url(" + URL + ")");
    }

  } else {
    endGameProtocol();
  }
}

var endScore, endCounter;

function endGameProtocol() {
  endScore = roundOnePoints + roundTwoPoints + roundThreePoints;
  endCounter = roundOneTime + roundTwoTime + roundThreeTime;
  var e = "<label id='congratsMessage'>Herzlichen Glückwunsch du hast das Spiel mit " + endScore + " Punkte in insgesamt " + endCounter + " Sekunden absolviert!</label>";

  $("#retryBtn").addClass("hidden");
  $("#nextBtn").addClass("hidden");
  $("#homeBtn").removeClass("hidden");
  $(".congratsBox").prepend(e);
}

function home() {
sessionStorage.setItem("afScore",endScore);
sessionStorage.setItem("afTime",endCounter);


  window.location.replace('../../story.html');
}
