// moment().format("dddd, MMMM Do YYYY,")

// var moment = require('moment');
// moment().format();

$(document).ready(function(){

    var momentDate = moment(new Date()).format("dddd, MMMM Do, YYYY");
    // Use jquery instead of pure javascript
    // var displayMomentDate = document.getElementById('currentDay');
    // displayMomentDate.innerHTML = momentDate;
    $("#currentDay").text(momentDate);  

// Add each input line from 9 am to 5 pm
var dailyTimes = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

for (var i = 0; i < dailyTimes.length; i++) {
    // generating hour text
    var addTime = $("<div>");
    addTime.addClass("hour");
    addTime.text(dailyTimes[i]);
    $(".container").append(addTime);

     //trying to add textarea  
     var textArea = $('<textarea style="padding-left:100px" />'); 
     // textArea.text(jsonList);
     $(".container").append(textArea);
     // newDiv.dialog({modal: true, width:850, height:500, title:"JSON for Demo Story"});  

    // generating button
    var addSaveButton = $('<button>');
    addSaveButton.addClass("saveBtn far fa-save");
    $(".container").append(addSaveButton);
}

// Add the labels of 9 am to 5 pm on left of each row
// Add the Save button (with floppy disk icon) at right of each row











});

