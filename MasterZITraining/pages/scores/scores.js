
$(document).ready(function () {

    /*patients.sort(function (a, b) {
        return a.score - b.score;
    });

    for (var i = patients.length - 1; i >= 0; i--) {

        var $row = $('<tr>' +
      '<td class="userName">' + patients[i].username + '</td>' +
      '<td class="scoreCell">' + patients[i].score + '</td>' +

      '</tr>');

        $('.score').append($row);
}
    */

    var storageData = sessionStorage;

    $(".firstTr").append("<th>Persönliche Auswertung für " + storageData.username + "</th>");
    $(".score").append("<tr><th>Zu Hause</th><th>"+storageData.kuecheScore+"</th><th>"+storageData.kuecheTime+" Sekunden</th></tr>");
    $(".score").append("<tr><th>Getränkemarkt</th><th>"+storageData.afScore+"</th><th>"+storageData.afTime+" Sekunden</th></tr>");
    $(".score").append("<tr><th>Balkon</th><th>"+storageData.balkonScore+"</th><th>"+storageData.balkonTime+" Sekunden</th></tr>");
    $(".score").append("<tr><th>Spreisel</th><th>"+storageData.spreiselScore+"</th><th>"+storageData.spreiselTime+" Sekunden</th></tr>");


});


function homeNav() {

    window.location.replace('../start/start.html');

}
