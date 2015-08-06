var choices = [
    { title: "Cappucino", alk: false, url: "./../../../../img/drinks/Cappuccino.jpg", text:"Milchkaffee mit Milchschaum",price:"4.50€" },
    { title: "Kaffee", alk: false, url: "./../../../../img/drinks/kaffeSchwarz.JPG", text:"Kaffee schwarz",price:"3.50€" },
    { title: "Long Drink", alk: true, url: "./../../../../img/drinks/longDrink.jpg", text: "Ein alkoholischer Long Drink (fruchtig)", price: "6.50€" },
    { title: "Bier", alk: true, url: "./../../../../img/drinks/Bier.jpg", text: "Unser Hausbier, kühl und erfrischend", price: "4.50€" },
    { title: "Cola", alk: false, url: "./../../../../img/drinks/Cola.jpg", text: "Coca Cola, koffeinhaltig", price: "3.50€" },
    { title: "Fanta", alk: false, url: "./../../../../img/drinks/fanta.png", text: "Fanta, Orangenlimonade", price: "3.50€" },
    { title: "Sprite", alk: false, url: "./../../../../img/drinks/Sprite.jpg", text: "Sprite, Zitronenlimonde", price: "3.50€" },
    { title: "Apfelsaftschorle", alk: false, url: "./../../../../img/drinks/Apfelsaftschorle.jpg", text: "Apfelsaftschorle, Apfelsaft gemischt mit Mineralwasser", price: "3.50€" }
];

function backNav() {

    window.location.replace('../../story.html');

}

function homeNav() {

    window.location.replace('../../../start/start.html');

}


$(document).ready(function () {

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


function outsideIn() {
    $(".imgHolder").css("background-image", "url(./../../../../img/spreisel/spreiselInside1.jpg)");
    $(".imgHolder").css("height","1300px");
    $(".doorNo1").addClass("hidden");
    $(".doorNo2").removeClass("hidden");
    resize();


}

function insideToTables() {
    $(".imgHolder").css("background-image", "url(./../../../../img/spreisel/spreiselInside2.jpg)");
    $(".doorNo2").addClass("hidden");
    $(".doorNo3").removeClass("hidden");
    $(".doorNo31").removeClass("hidden");
    $(".doorNo32").removeClass("hidden");
    $(".doorNo33").removeClass("hidden");

}

function tablesChoice() {
    window.location.replace('gameSpreisel.html');
}

function gameBegin(){
  $("#randombox").css("background-image","url(./../../../../img/spreisel/spreiselGame.jpg)")
  $(".gameDoor").addClass("hidden");
  $(".gameBox").removeClass("hidden");
  gameStart();
  timerStart();
}


var count = 0;
var counter = setInterval(timerStart, 1000);
function timerStart() {

  count++;
  $(".timer").text(count);
}

var arrLength = choices.length;

function gameStart(){

  for(var i = arrLength; i >=1; i--){
    var choice = choices[Math.floor(Math.random() * choices.length)];
    choices.splice($.inArray(choice, choices), 1);

    $(".proto."+i+" .title").text(choice.title);
    $(".proto."+i+" .item").text(choice.text);
    $(".proto."+i+" .price").text(choice.price);
    $(".proto."+i+" img").attr("src", choice.url);
    $(".proto."+i).attr("value",choice.alk);

  }

}

var checksum = 0;
var points = 50;
var round = 0;

function check(){
  var sender = $(window.event.target);
  var attribute = $(sender).attr("value");
  checksum++;
  if(checksum <= 1){
    if(attribute == true){
      $(sender).css("border", "2px solid rgb(25, 255, 25)");
      points += 50;
    }else{
      $(sender).css("border", "2px solid red");
      points -= 25;
    }
  }else{
    congrats();
  }
}

function retry(){
  // TODO: implement
}
function nextRound(){
  // TODO: implement
}


function congrats(){
  // TODO: implement
}
