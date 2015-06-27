

var choices = [
    { title: "Cappucino", alk: false, url: "./../../../../img/drinks/Cappuccino.jpg" },
    { title: "Kaffee", alk: false, url: "./../../../../img/drinks/kaffeSchwarz.JPG" },
    { title: "Long Drink", alk: false, url: "./../../../../img/drinks/longDrink.jpg" },
    { title: "Latte Macchiato", alk: false, url: "./../../../../img/drinks/lattemacchiato.png" },
    { title: "Bier", alk: true, url: "./../../../../img/drinks/Bier.jpg" },
    { title: "Cola", alk: false, url: "./../../../../img/drinks/Cola.jpg" },
    { title: "Fanta", alk: false, url: "./../../../../img/drinks/fanta.png" },
    { title: "Sprite", alk: false, url: "./../../../../img/drinks/Sprite.jpg" },
    { title: "Apfelsaftschorle", alk: false, url: "./../../../../img/drinks/Apfelsaftschorle.jpg" }
];

function backNav() {

    window.location.replace('../../story.html');

}

function homeNav() {

    window.location.replace('../../../start/start.html');

}


var imgPanorama;
var divXstart, divYstart, backgroundX, backgroundY;
$(document).ready(function () {

 
   	resize();


    $('#makeMeDraggable').draggable({
        containment: '#containment',
        cursor: 'move'
    });

   
});


function resize() {
    //init
    $("body").addClass("stop-scrolling");
    imgPanorama = $('#imageSizer');
    
   


    var widthContainer = ($(imgPanorama).width() + ($(imgPanorama).width() - $(window).width()));
    var heightContainer = ($(imgPanorama).height() + ($(imgPanorama).height() - $(window).height()));

    $("#containment").width(widthContainer);
    $("#containment").height(heightContainer);

    var containerPosTop = (-heightContainer / 2) + ($(window).height() / 2);
    var containerPosLeft = (-widthContainer / 2) + ($(window).width() / 2);

    $("#containment").css({ top: containerPosTop, left: containerPosLeft, position: 'absolute' });

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
}

function insideBackThree() {
    $(".imgHolder").css("background-image", "url(../../../../img/GetraenkeMarkt/inside3.jpg)");
    $("#imageSizer").attr("src", "../../../../img/GetraenkeMarkt/inside3.jpg")
    $(".doorNo31").css("visibility", "visible");
    $(".doorNo32").css("visibility", "visible");
    $(".doorNo41").css("visibility", "hidden");
    $(".doorNo42").css("visibility", "hidden");
}

function insideFour() {
    $(".imgHolder").css("background-image", "url(../../../../img/GetraenkeMarkt/shelf.jpg)");
    $("#imageSizer").attr("src", "../../../../img/GetraenkeMarkt/shelf.jpg")
    $(".doorNo41").css("visibility", "hidden");
    $(".doorNo42").css("visibility", "hidden");
    
}

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