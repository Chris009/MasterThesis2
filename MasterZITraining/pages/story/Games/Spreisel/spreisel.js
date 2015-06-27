

var choices = [
    { title: "Cappucino", alk: false, url: "./../../../../img/drinks/Cappuccino.jpg", text:"Milchkaffee mit Milchschaum",price:"4.50€" },
    { title: "Kaffee", alk: false, url: "./../../../../img/drinks/kaffeSchwarz.JPG", text:"Kaffee schwarz",price:"3.50€" },
    { title: "Long Drink", alk: false, url: "./../../../../img/drinks/longDrink.jpg", text: "Ein alkoholischer Long Drink (fruchtig)", price: "6.50€" },
    { title: "Latte Macchiato", alk: false, url: "./../../../../img/drinks/lattemacchiato.png", text: "Latte Macchiato: ein Warmgetränk aus Milch und Espresso, das dem Milchkaffee ähnelt, aber in der Regel mehr Milch enthält und aus stärker gerösteten Bohnen zubereitet wird.", price: "5.50€" },
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




});


function doorToBar() {
    $(".imgHolder").css("background-image", "url(img/SpreiselBar.jpg)");
    $(".doorNo1").css("visibility", "hidden");
    $(".doorNo2").css("visibility", "visible");
    $(".doorNo2").addClass("hvr-reveal");

}

function doorToTable() {
    $(".imgHolder").css("background-image", "url(img/SpreiselTisch.jpg)");
    $(".doorNo2").css("visibility", "hidden");
    $(".doorNo3").css("visibility", "visible");
    $(".doorNo3").addClass("hvr-reveal");
}

function doorToMenu() {
    $(".imgHolder").css("background-image", "url(img/SpreiselKarte.jpg)");
    $(".doorNo3").css("visibility", "hidden");
    $(".menueGame").css("visibility", "visible");
    $(".menueGame").addClass("hvr-reveal");

}

function startGame() {
    $(".menueGame").addClass("hidden");
    $('.randomBox').removeClass('hidden');
        for (var i = choices.length; i >= 1; i--) {
            var choice = choices[Math.floor(Math.random() * choices.length)];

            choices.splice($.inArray(choice, choices), 1);

            var URL = choice.url;
            var e = $('<img></img>');
            e.attr('class', 'choice ' + i);
            e.attr('src', URL);

            $('.randomBox').append(e);



        
    }
}