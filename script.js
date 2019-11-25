// use moment to output current date (day of week, month in text, day with st/nd/rd/th, lower case h is 12 hour time with A for AM/PM)
$(document).ready(function() {
  var momentDate = moment().format("dddd, MMMM Do, YYYY, h:mm A");
  // Use jquery instead of pure javascript
  // var displayMomentDate = document.getElementById('currentDay');
  // displayMomentDate.innerHTML = momentDate;

  // Output moment info into existing id in HTML
  $("#currentDay").text(momentDate);

  // Add each time text from 9 am to 5 pm in array
  var dailyTimes = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM"
  ];

  // Use for loop to add all divs, classes, ids, etc. (using some existing classes available in provided CSS)
  for (var i = 0; i < dailyTimes.length; i++) {
    // Generated row div, added classes, and appended to container
    var rowDiv = $("<div>");
    rowDiv.addClass("row time-block");
    // Added unique classes to each row so appending buttons, textarea to each row is easier (without it, all [i] divs, textarea, buttons, were appended to ALL rows, which was a mess)
    rowDiv.addClass("row" + i);
    $(".container").append(rowDiv);

    // Added time data attribute to each row div to compare with moment
    rowDiv.attr("data-time", i + 9);
    // Needed to change the single digit 9 data-time attribute generated above to match moment format
    $("div.row0").attr("data-time", "09");

    // Generated div for hour text and appended to individual rows, added set col, hour classes
    var addTime = $("<div>");
    // Also added unique houri classes to add dotted line on bottom of hour8 (5 pm) in CSS cuz it was bothering me
    addTime.addClass("hour col-sm-1 hour" + i);
    addTime.text(dailyTimes[i]);
    $(".row" + i).append(addTime);

    // Generated/added text area to each row with set col and description class, and unique textInput classes
    var textArea = $("<textarea>");
    textArea.addClass("col-sm-10 description textInput" + i);
    $(".row" + i).append(textArea);

    // Generated/added Save button with icon class from fontawesome for each row with set col
    var addSaveButton = $("<button>");
    addSaveButton.addClass("saveBtn far fa-save col-sm-1");
    // Created ids for each button to use for later on click event
    addSaveButton.attr("id", "textInput" + i);
    $(".row" + i).append(addSaveButton);
  }

  // Created function to compare data attribute in row with moment.js to dynamically add color classes from CSS based on comparison of current moment time with each row's designated time.
  $(".row").each(function(index, element) {
    console.log(element);

    var pageTime = $(element).attr("data-time");
    // k is 1-24 hours format
    var momentTime = moment().format("k");

    if (pageTime === momentTime) {
      $(element).addClass("present");
    } else if (pageTime < momentTime) {
      $(element).addClass("past");
    } else if (pageTime > momentTime) {
      $(element).addClass("future");
    }
  });

  // Set up button click event to save to local storage. Used the ids (textInputi) created for each individual button since jQuery only works on first of button of same class (saveBtn). Used class of same name as id to pull the text value.
  $(document).on("click", ".saveBtn", function() {
    console.log($(this).attr("id"));
    // this refers to the button that was clicked
    var textInput = $(this).attr("id");
    var text = $("." + textInput).val();
    console.log(text);

    // Store based on key and value
    localStorage.setItem(textInput, text);
    alert("Saved!");
  });

  // Retrieve all objects in storage and output based on index, i.e. {textInput0: "inserted text"} in localStorage
  var allStorage = Object.entries(localStorage);
  // Used for loop to account for all individual input fields.
  for (var i = 0; i < allStorage.length; i++) {
    var pair = allStorage[i];
    var key = pair[0];
    var value = pair[1];
    // Naming the ids in the Button row (originally used as key to store) and the classes in the textarea row the same allows us to "pass" the value to output/retain input from local storage onto page.
    $("." + key).val(value);
  }
});
