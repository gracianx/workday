let currentDay= moment().format("MMMM Do, YYYY - hh:mm:ss a");
$("#currentDay").append(currentDay);

let time = new Date().getHours();

function colorCode()
    {
    if (time > 9) {
      $("#nineAM").addClass("past");
    } else if (time >= 9 && time < 10) {
      $("#nineAM").addClass("present");
    } else if (time< 9) {
     $("#nineAM").addClass("future");
    };

    if (time > 10) {
        $("#tenAM").addClass("past");
      } else if (time >= 10 && time < 11) {
        $("#tenAM").addClass("present");
      } else if (time< 10) {
       $("#tenAM").addClass("future");
      };

      if (time > 11) {
        $("#elevenAM").addClass("past");
      } else if (time >= 11 && time < 12) {
        $("#elevenAM").addClass("present");
      } else if (time< 11) {
       $("#elevenAM").addClass("future");
      };

      if (time > 12) {
        $("#noon").addClass("past");
      } else if (time >= 12 && time < 13) {
        $("#noon").addClass("present");
      } else if (time< 12) {
       $("#noon").addClass("future");
      };

      if (time > 13) {
        $("#onePM").addClass("past");
      } else if (time >= 13 && time < 14) {
        $("#onePM").addClass("present");
      } else if (time< 13) {
       $("#onePM").addClass("future");
      };

      if (time > 14) {
        $("#twoPM").addClass("past");
      } else if (time >= 14 && time < 15) {
        $("#twoPM").addClass("present");
      } else if (time< 14) {
       $("#twoPM").addClass("future");
      };

      if (time > 15) {
        $("#threePM").addClass("past");
      } else if (time >= 15 && time < 16) {
        $("#threePM").addClass("present");
      } else if (time< 15) {
       $("#threePM").addClass("future");
      };

      if (time > 16) {
        $("#fourPM").addClass("past");
      } else if (time >= 16 && now < 17) {
        $("#fourPM").addClass("present");
      } else if (time< 16) {
       $("#fourPM").addClass("future");
      };

      if (time > 17) {
        $("#fivePM").addClass("past");
      } else if (time >= 17 && time < 18) {
        $("#fivePM").addClass("present");
      } else if (time< 17) {
       $("#fivePM").addClass("future");
      }
}; 
colorCode();