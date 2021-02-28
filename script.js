let currentDay= moment().format("MMMM Do, YYYY - hh:mm:ss a");
$("#currentDay").append(currentDay);

let time = new Date().getHours();

function colorCode() {
    if (time > 9) {
      $("nineAM").addClass("past");
    } else if (time >= 9 && now < 10) {
      $("nineAM").addClass("present");
    } else if (time< 9) {
     $("nineAM").addClass("future");
    }
}; 
