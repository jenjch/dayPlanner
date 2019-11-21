// moment().format("dddd, MMMM Do YYYY,")

// var moment = require('moment');
// moment().format();

$(document).ready(function(){

    var momentDate = moment().format("dddd, MMMM Do, YYYY");
    // Use jquery instead of pure javascript
    // var displayMomentDate = document.getElementById('currentDay');
    // displayMomentDate.innerHTML = momentDate;
    $("#currentDay").text(momentDate);  
});

