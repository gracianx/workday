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
   });
   
function nineBlock() {
    let text = document.getElementById("9");
    let output= document.getElementById("9");
    let save = document.getElementById("btnNine");

    save.addEventListener("click", update);

    output.textContent = localStorage.getItem("content");
    text.value = localStorage.getItem("content");

function update() {
    localStorage.setItem("content",text.value);

    output.textContent = text.value;
}
}
nineBlock();

function tenBlock() {
    let text = document.getElementById("10");
    let output= document.getElementById("10");
    let save = document.getElementById("btnTen");

    save.addEventListener("click", updateTwo);

    output.textContent = localStorage.getItem("contentTwo");
    text.value = localStorage.getItem("contentTwo");

function updateTwo() {
    localStorage.setItem("contentTwo",text.value);

    output.textContent = text.value;
}
}
tenBlock();

function elevenBlock() {
    let text = document.getElementById("11");
    let output= document.getElementById("11");
    let save = document.getElementById("btn11");

    save.addEventListener("click", updateThree);

    output.textContent = localStorage.getItem("contentThree");
    text.value = localStorage.getItem("contentThree");

function updateThree() {
    localStorage.setItem("contentThree",text.value);

    output.textContent = text.value;
}
}
elevenBlock();

function twelveBlock() {
    let text = document.getElementById("12");
    let output= document.getElementById("12");
    let save = document.getElementById("btn12");

    save.addEventListener("click", updateFour);

    output.textContent = localStorage.getItem("contentFour");
    text.value = localStorage.getItem("contentFour");

function updateFour() {
    localStorage.setItem("contentFour",text.value);

    output.textContent = text.value;
}
}
twelveBlock();

function thirteenBlock() {
    let text = document.getElementById("13");
    let output= document.getElementById("13");
    let save = document.getElementById("btn13");

    save.addEventListener("click", updateFive);

    output.textContent = localStorage.getItem("contentFive");
    text.value = localStorage.getItem("contentFive");

function updateFive() {
    localStorage.setItem("contentFive",text.value);

    output.textContent = text.value;
}
}
thirteenBlock();

function fourteenBlock() {
    let text = document.getElementById("14");
    let output= document.getElementById("14");
    let save = document.getElementById("btn14");

    save.addEventListener("click", updateSix);

    output.textContent = localStorage.getItem("contentSix");
    text.value = localStorage.getItem("contentSix");

function updateSix() {
    localStorage.setItem("contentSix",text.value);

    output.textContent = text.value;
}
}
fourteenBlock();

function fifteenBlock() {
    let text = document.getElementById("15");
    let output= document.getElementById("15");
    let save = document.getElementById("btn15");

    save.addEventListener("click", updateSeven);

    output.textContent = localStorage.getItem("contentSeven");
    text.value = localStorage.getItem("contentSeven");

function updateSeven() {
    localStorage.setItem("contentSeven",text.value);

    output.textContent = text.value;
}
}
fifteenBlock();

function sixteenBlock() {
    let text = document.getElementById("16");
    let output= document.getElementById("16");
    let save = document.getElementById("btn16");

    save.addEventListener("click", updateEight);

    output.textContent = localStorage.getItem("contentEight");
    text.value = localStorage.getItem("contentEight");

function updateEight() {
    localStorage.setItem("contentEight",text.value);

    output.textContent = text.value;
}
}
sixteenBlock();

function seventeenBlock() {
    let text = document.getElementById("17");
    let output= document.getElementById("17");
    let save = document.getElementById("btn17");

    save.addEventListener("click", updateNine);

    output.textContent = localStorage.getItem("contentNine");
    text.value = localStorage.getItem("contentNine");

function updateNine() {
    localStorage.setItem("contentNine",text.value);

    output.textContent = text.value;
}
}
seventeenBlock();