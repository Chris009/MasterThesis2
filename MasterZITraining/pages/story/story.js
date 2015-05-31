
var map = null;




function homeNav() {
   
    window.location.replace('../start/start.html');
  
}



function sammoNav() {
   
    window.location.replace('Games/SammoGame/sammo.html');
  
}

function wsNav() {

    window.location.replace('Games/WoodstöcklGame/ws.html');

}



function getMap() {


    // ======================================= Map Boundaries

    var boundingBox = Microsoft.Maps.LocationRect.fromLocations(
        new Microsoft.Maps.Location(49.4941772, 8.4666827),
        new Microsoft.Maps.Location(49.4811188, 8.4551811),
        new Microsoft.Maps.Location(49.4800314, 8.4778404));


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
    var locationSammo = new Microsoft.Maps.Location(49.4859215, 8.4643577);
    var sammoPinOptions = {
        width: null, height: null,
        htmlContent: "<div class='pushpin'>Café Sammo</div>"
    };
    //Woodstöckl 
    var locationWs = new Microsoft.Maps.Location(49.4972434, 8.4701803);
    var wsPinOptions = {
        width: null, height: null,
        htmlContent: "<div class='pushpin'>Woodstöckl</div>"
    };

    // Add a pin to the cafe location of the map
    //Sammo
    var pinSammo = new Microsoft.Maps.Pushpin(locationSammo, sammoPinOptions); 
    //Woodstöckl
    var pinWs = new Microsoft.Maps.Pushpin(locationWs, wsPinOptions);

    // Create the infobox for the pushpin
    //Sammo
        pinSammoInfobox = new Microsoft.Maps.Infobox(pinSammo.getLocation(), 
        {title: 'Café Sammo', 
        description: 'Infobox description',
        actions: [{ label: 'GoTo Game', eventHandler: sammoNav }],
        visible: false,
        });
    //Woodstöckl
        pinWsInfobox = new Microsoft.Maps.Infobox(pinWs.getLocation(),
       {
           title: 'Woodstöckl',
           description: 'Infobox description',
           actions: [{ label: 'GoTo Game', eventHandler: wsNav }],
           visible: false,
       });
    // Add handler for the pushpin click event.
    //Sammo
        Microsoft.Maps.Events.addHandler(pinSammo, 'click', displaySammoInfobox);
    //Woodstöckl
        Microsoft.Maps.Events.addHandler(pinWs, 'click', displayWsInfobox);

    // Hide the infobox when the map is moved.
    //Sammo
    Microsoft.Maps.Events.addHandler(map, 'viewchange', hideSammoInfobox);
    //Woodstöckl
    Microsoft.Maps.Events.addHandler(map, 'viewchange', hideWsInfobox);

    // Add the pushpins and infobox to the map
    //Sammo
    map.entities.push(pinSammo);
    map.entities.push(pinSammoInfobox);
    //Woodstöckl
    map.entities.push(pinWs);
    map.entities.push(pinWsInfobox);
}
//Sammo
function displaySammoInfobox(e)
{pinSammoInfobox.setOptions({ visible:true });}                    
function hideSammoInfobox(e)
{ pinSammoInfobox.setOptions({ visible: false }); }

//Woodstöckl
function displayWsInfobox(e)
{ pinWsInfobox.setOptions({ visible: true }); }
function hideWsInfobox(e)
{ pinWsInfobox.setOptions({ visible: false }); }