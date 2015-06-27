

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

function backNav() {http://localhost:5447/../../../../img/drinks/Apfelsaftschorle.jpg

    window.location.replace('../../story.html');

}

function homeNav() {

    window.location.replace('../../../start/start.html');

}



var j = 0;
function gameStart() {
    
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

function openDoor() {
    $('.door').addClass('hidden');
    $('.img1').addClass('hidden');

    $('.order').removeClass('hidden');
    $('.img2').removeClass('hidden');
}

function startOrder() {
    $('.order').addClass('hidden');
    $('.img2').addClass('hidden');

    $('.randomBox').removeClass('hidden');
    gameStart()
}

