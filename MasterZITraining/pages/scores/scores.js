
var patients = [
    { name: "patient13", username: "CoolUserName122", score: "10", avgTime: "" },
    { name: "patient22", username: "CoolUserName21", score: "9", avgTime: "" },
    { name: "patient35", username: "CoolUserName12", score: "82", avgTime: "" },
    { name: "patient43", username: "CoolUserName17", score: "74", avgTime: "" },
    { name: "patient54", username: "CoolUserName16", score: "6", avgTime: "" },
    { name: "patient6", username: "CoolUserName91", score: "51", avgTime: "" },
    { name: "patient7w", username: "CoolUserName12", score: "4", avgTime: "" },
    { name: "patient8", username: "CoolUserName1", score: "32", avgTime: "" },
    { name: "patient9", username: "CoolUserName1", score: "2", avgTime: "" },
    { name: "patient10", username: "CoolUserName11", score: "1", avgTime: "" },
    { name: "patient13", username: "CoolUserName122", score: "10", avgTime: "" },
    { name: "patient22", username: "CoolUserName21", score: "9", avgTime: "" },
    { name: "patient35", username: "CoolUserName12", score: "82", avgTime: "" },
    { name: "patient43", username: "CoolUserName17", score: "74", avgTime: "" },
    { name: "patient54", username: "CoolUserName16", score: "6", avgTime: "" },
    { name: "patient6", username: "CoolUserName91", score: "51", avgTime: "" },
    { name: "patient7w", username: "CoolUserName12", score: "4", avgTime: "" },
    { name: "patient8", username: "CoolUserName1", score: "32", avgTime: "" },
    { name: "patient9", username: "CoolUserName1", score: "2", avgTime: "" },
    { name: "patient10", username: "CoolUserName11", score: "1", avgTime: "" },
    { name: "patient13", username: "CoolUserName122", score: "10", avgTime: "" },
    { name: "patient22", username: "CoolUserName21", score: "9", avgTime: "" },
    { name: "patient35", username: "CoolUserName12", score: "82", avgTime: "" },
    { name: "patient43", username: "CoolUserName17", score: "74", avgTime: "" },
    { name: "patient54", username: "CoolUserName16", score: "6", avgTime: "" },
    { name: "patient6", username: "CoolUserName91", score: "51", avgTime: "" },
    { name: "patient7w", username: "CoolUserName12", score: "4", avgTime: "" },
    { name: "patient8", username: "CoolUserName1", score: "32", avgTime: "" },
    { name: "patient9", username: "CoolUserName1", score: "2", avgTime: "" },
    { name: "patient10", username: "CoolUserName11", score: "1", avgTime: "" }
];

$(document).ready(function () {

    patients.sort(function (a, b) {
        return a.score - b.score;
    });
    
    for (var i = patients.length - 1; i >= 0; i--) {

        var $row = $('<tr>' +
      '<td class="userName">' + patients[i].username + '</td>' +
      '<td class="scoreCell">' + patients[i].score + '</td>' +
      
      '</tr>');
        
        $('.score').append($row);

    }
});


function homeNav() {

    window.location.replace('../start/start.html');

}
