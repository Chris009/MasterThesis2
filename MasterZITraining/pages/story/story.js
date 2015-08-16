
var map = null;




function homeNav() {

    window.location.replace('../start/start.html');

}



function balkonNav() {

    window.location.replace('Games/balkon/balkon.html');

}

function kuecheNav() {

    window.location.replace('Games/kueche/kueche.html');

}

function spreiselNav() {

    window.location.replace('Games/Spreisel/spreisel.html');

}

function AFNav() {

    window.location.replace('Games/alldrinFachmarkt/af.html');

}



function getMap() {


    // ======================================= Map Boundaries

    var boundingBox = Microsoft.Maps.LocationRect.fromLocations(
        new Microsoft.Maps.Location(54.9524996,4.5848268),
        new Microsoft.Maps.Location(54.5466946,15.5272096),
        new Microsoft.Maps.Location(46.9353963,10.2098268));


//=================================Initialize Map

    map = new Microsoft.Maps.Map(document.getElementById('myMap'),
        {
            credentials: 'AmOYkj23cBi5fjt-GV5v_oEAGYzsPYFUwoqrvSPmXlXhRpIfuhBZHPY4sMTVrKoU',
            showDashboard: false,
            showMapTypeSelector: false,
            showScalebar: false,
            disableZooming: true,
            bounds: boundingBox,
            mapTypeId: Microsoft.Maps.MapTypeId.road
        });

    //============================== Push Pins
    // Retrieve the location of the map center
    //Sammo
    var locationBalkon = new Microsoft.Maps.Location(50.3315630,8.9573854);
    var balkonPinOptions = {
        width: null, height: null,
        htmlContent: "<div class='pushpin'>Balkon</div>"
    };
    //Woodstöckl
    var locationkueche = new Microsoft.Maps.Location(49.4972434, 8.4701803);
    var kuechePinOptions = {
        width: null, height: null,
        htmlContent: "<div class='pushpin'>Zuhause</div>"
    };
    //Spreisel
    var locationSpreisel = new Microsoft.Maps.Location(51.0967475,10.1658815);
    var spreiselPinOptions = {
        width: null, height: null,
        htmlContent: "<div class='pushpin'>Spreisel</div>"
    };

    //AlldrinkGetränkefachmarkt
    var locationAF = new Microsoft.Maps.Location(49.8664446,8.7596315);
    var AFPinOptions = {
        width: null, height: null,
        htmlContent: "<div class='pushpin'>Getränkemarkt</div>"
    };

    // Add a pin to the cafe location of the map
    //Sammo
    var pinBalkon = new Microsoft.Maps.Pushpin(locationBalkon, balkonPinOptions);
    //Woodstöckl
    var pinkueche = new Microsoft.Maps.Pushpin(locationkueche, kuechePinOptions);
    //Spreisel
    var pinSpreisel = new Microsoft.Maps.Pushpin(locationSpreisel, spreiselPinOptions);
    //Alldrink
    var pinAF = new Microsoft.Maps.Pushpin(locationAF, AFPinOptions);

    // Create the infobox for the pushpin
    //Sammo
        pinBalkonInfobox = new Microsoft.Maps.Infobox(pinBalkon.getLocation(),
        {title: 'Balkon',
        description: 'Infobox description',
        actions: [{ label: 'GoTo Game', eventHandler: balkonNav }],
        visible: false,
        });
    //Woodstöckl
        pinkuecheInfobox = new Microsoft.Maps.Infobox(pinkueche.getLocation(),
       {
           title: 'Zuhause',
           description: 'Infobox description',
           actions: [{ label: 'GoTo Game', eventHandler: kuecheNav }],
           visible: false,
       });
    //Spreisel
        pinSpreiselInfobox = new Microsoft.Maps.Infobox(pinSpreisel.getLocation(),
           {
               title: 'Spreisel',
               description: 'Infobox description',
               actions: [{ label: 'GoTo Game', eventHandler: spreiselNav }],
               visible: false,
           });
    //AllDrink
        pinAFInfobox = new Microsoft.Maps.Infobox(pinAF.getLocation(),
           {
               title: 'Alldrink Getränke',
               description: 'Infobox description',
               actions: [{ label: 'GoTo Game', eventHandler: AFNav }],
               visible: false,
           });

    // Add handler for the pushpin click event.
    //Sammo
        Microsoft.Maps.Events.addHandler(pinBalkon, 'click', displayBalkonInfobox);
    //Woodstöckl
        Microsoft.Maps.Events.addHandler(pinkueche, 'click', displaykuecheInfobox);
    //Spreisel
        Microsoft.Maps.Events.addHandler(pinSpreisel, 'click', displaySpreiselInfobox);
    //AF
        Microsoft.Maps.Events.addHandler(pinAF, 'click', displayAFInfobox);

    // Hide the infobox when the map is moved.
    //Sammo
    Microsoft.Maps.Events.addHandler(map, 'viewchange', hideBalkonInfobox);
    //Woodstöckl
    Microsoft.Maps.Events.addHandler(map, 'viewchange', hidekuecheInfobox);
    //Spreisel
    Microsoft.Maps.Events.addHandler(map, 'viewchange', hideSpreiselInfobox);
    //AF
    Microsoft.Maps.Events.addHandler(map, 'viewchange', hideAFInfobox);

    // Add the pushpins and infobox to the map
    //Sammo
    map.entities.push(pinBalkon);
    map.entities.push(pinBalkonInfobox);
    //Woodstöckl
    map.entities.push(pinkueche);
    map.entities.push(pinkuecheInfobox);
    //Spreisel
    map.entities.push(pinSpreisel);
    map.entities.push(pinSpreiselInfobox);
    //AF
    map.entities.push(pinAF);
    map.entities.push(pinAFInfobox);

}
//Sammo
function displayBalkonInfobox(e)
{pinBalkonInfobox.setOptions({ visible:true });}
function hideBalkonInfobox(e)
{ pinBalkonInfobox.setOptions({ visible: false }); }

//Woodstöckl
function displaykuecheInfobox(e)
{ pinkuecheInfobox.setOptions({ visible: true }); }
function hidekuecheInfobox(e)
{ pinkuecheInfobox.setOptions({ visible: false }); }

//Spreisel
function displaySpreiselInfobox(e)
{ pinSpreiselInfobox.setOptions({ visible: true }); }
function hideSpreiselInfobox(e)
{ pinSpreiselInfobox.setOptions({ visible: false }); }

//AF
function displayAFInfobox(e)
{ pinAFInfobox.setOptions({ visible: true }); }
function hideAFInfobox(e)
{ pinAFInfobox.setOptions({ visible: false }); }
