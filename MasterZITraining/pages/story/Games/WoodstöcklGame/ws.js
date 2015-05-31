

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


function resize(){
    $("body").addClass("stop-scrolling");

    imgPanorama = $('.imgHolder');
    



    var widthContainer = ($(imgPanorama).width() + ($(imgPanorama).width() - $(window).width()));
    var heightContainer = ($(imgPanorama).height() + ($(imgPanorama).height() - $(window).height()));

    $("#containment").width(widthContainer);
    $("#containment").height(heightContainer);

    var containerPosTop = (-heightContainer / 2) + ($(window).height() / 2);
    var containerPosLeft = (-widthContainer / 2) + ($(window).width() / 2);

    $("#containment").css({ top: containerPosTop, left: containerPosLeft, position: 'absolute' });
}

var panoHeight = $('.imgHolder').height();
var panoWidth = $('.imgHolder').width();
var aspectRatio = panoWidth / panoHeight;

function zoomIn(){

    var imgWidth = $('.imgHolder').width() * 1.1;
    var imgHeight = $('.imgHolder').width() / aspectRatio;
    $('.imgHolder').width(imgWidth);
    $('.imgHolder').height(imgHeight);
	resize();
}

function zoomOut(){
    var imgWidth = $('.imgHolder').width() * 0.9;
    var imgHeight = $('.imgHolder').width() / aspectRatio;
    $('.imgHolder').width(imgWidth);
    $('.imgHolder').height(imgHeight);
	resize();
}