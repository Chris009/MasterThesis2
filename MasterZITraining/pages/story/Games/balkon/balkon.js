var protoChoices = [{
  title: "Bier1",
  alk: true,
  url: "./../../../../img/balkon/bier1.png"
}, {
  title: "Bier2",
  alk: true,
  url: "./../../../../img/balkon/bier2.png",
}, {
  title: "Bier3",
  alk: true,
  url: "./../../../../img/balkon/bier3.png",
}, {
  title: "Bier4",
  alk: true,
  url: "./../../../../img/balkon/bier4.png",
}, {
  title: "MuellerMilch",
  alk: false,
  url: "./../../../../img/balkon/muellermilch.png",
}, {
  title: "Cola",
  alk: false,
  url: "./../../../../img/balkon/cola.png",
}, {
  title: "Fanta",
  alk: false,
  url: "./../../../../img/balkon/fanta.png",
}, {
  title: "Wein",
  alk: true,
  url: "./../../../../img/balkon/vino.png",
}, {
  title: "Prosecco",
  alk: true,
  url: "./../../../../img/balkon/secco.png",
}, {
  title: "Eistee",
  alk: false,
  url: "./../../../../img/balkon/eistee.png",
}, {
  title: "Wasser",
  alk: false,
  url: "./../../../../img/balkon/wasser.png",
}];




function backNav() {

  window.location.replace('../../story.html');

}

function homeNav() {

  window.location.replace('../../../start/start.html');

}


$(document).ready(function() {
  $("#imageSizer").css("width", $(window).width()* 1.1);
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

function initialToStart() {
  window.location.replace('gameBalkon.html');

  resize();


}

function preGame() {
  $(".preGame").removeClass("hidden");
  $(".gameDoor").addClass("hidden");
  $(".gameBox").addClass("hidden");
}

function gameBegin() {
  $(".preGame").addClass("hidden");
  $(".gameBox").removeClass("hidden");
  gameStart();

}


var count = 0;
var counter;

function timerStart() {

  count++;
  $(".timer").text(count);
}

var arrLengthOne = protoChoices.length;


function gameStart() {
  counter = setInterval(timerStart, 1000);
  for (var i = arrLengthOne; i >= 1; i--) {
    var protoChoice = protoChoices[Math.floor(Math.random() * protoChoices.length)];
    protoChoices.splice($.inArray(protoChoice, protoChoices), 1);
    $(".proto" + i).css("background-image", "url("+protoChoice.url+")");
    $(".proto" + i).attr("value", protoChoice.alk);
    $(".proto" + i).removeClass("hidden");
  }

}

var checksum = 0;
var points = 50;
var round = 1;
var score = 0;

function check(obj) {
  var sender = (obj || window.event.target);
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



function retry() {

  $(".gameBox").removeClass("hidden");
  $(".congratsBox").addClass("hidden");
  $("#congratsMessage").remove();




  gameUpdate();
}

var roundOnePoints, roundOneTime, roundTwoPoints, roundTwoTime, roundThreePoints, roundThreeTime;


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

  $(".gameBox").removeClass("hidden");
  $(".congratsBox").addClass("hidden");
  $("#congratsMessage").remove();
  round++;
  gameUpdate();
}




function congrats() {

  var e = "<label id='congratsMessage'>Herzlichen Glückwunsch du hast Runde " + round + " absolviert! Du hast dabei " + score + " Punkte in " + count + " Sekunden erreicht!</label>";

  $(".gameBox").addClass("hidden");
  $(".congratsBox").removeClass("hidden");


  $(".congratsBox").prepend(e);

}

function gameUpdate() {
  $(".timer").text("0");
  counter = setInterval(timerStart, 1000);
  var arrObjOne = {};
  var swapArrOne = [];
  var arrObjTwo = {};
  var swapArrTwo = [];
  count = 0;
  checksum = 0;
  points = 50;
//proto
  if (round <= 3) {
    for (var i = arrLengthOne; i >= 1; i--) {
      $(".proto" + i).css("border-style", "none");
      var cssURL = $(".proto" + i).css("background-image");
      cssURL = cssURL.replace('url(', '').replace(')', '');

      arrObj = {
        title: $(".proto" + i + " .title").text(),
        alk: $(".proto" + i).attr("value"),
        url: cssURL,

      }

      swapArrOne.push(arrObj);
    }

    //proto
    for (var j = arrLengthOne; j >= 1; j--) {
      var randomObjOne = swapArrOne[Math.floor(Math.random() * swapArrOne.length)];
      swapArrOne.splice($.inArray(randomObjOne, swapArrOne), 1);

      $(".proto" + j + " .title").text(randomObjOne.title);
      $(".proto" + j).css("background-image", "url("+randomObjOne.url+")");
      $(".proto" + j).attr("value", randomObjOne.alk);
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
  $(".gameBox").addClass("hidden");
  $(".congratsBox").removeClass("hidden");
  $("#nextBtn").addClass("hidden");
  $("#retryBtn").addClass("hidden");

  $("#homeBtn").removeClass("hidden");
  $(".congratsBox").prepend(e);
}

function home() {
  sessionStorage.setItem("balkonScore",endScore);
  sessionStorage.setItem("balkonTime",endCounter);
  window.location.replace('../../story.html');
}
