let currentDay= moment().format("MMMM Do, YYYY - hh:mm:ss a");
$("#currentDay").append(currentDay);

let time = new Date().getHours();

$(".colorCoded").each(function(){
       let timeBlock = parseInt($(this).prop("id"));
       if (timeBlock === time){
          $(this).addClass("present");
        } else if (timeBlock > time) {
        $(this).addClass("future");
        } else (timeBlock < time) 
        $(this).addClass("past");
   })
   
   $(".saveBtn").on("click", function(){
    let text = $(this).prop("id");
    let obj = [];
    if(text){
        obj= JSON.parse(text);  
    }
    obj.push({"id":  id});
    localStorage.setItem("text",JSON.stringify(obj));
});