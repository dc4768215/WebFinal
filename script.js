$( function() {
   $( ".draggable" ).draggable({
     stack: "div" /* Option to let the windows stack and pop over each other correctly */
   });
 } );

var button_1;
var ukraineButton;
var russiaButton;
var historyPopup;
var historyPopup1;
var historyPopup2;
var historyPopup3;
var ukrainePopup;
var ukrainePopup1;
var russiaPopup;
var russiaPopup1;
var russiaPopup2;

document.addEventListener("DOMContentLoaded", function() {
  button_1 = document.getElementById("button1");
  ukraineButton = document.getElementById("ukraineButton");
  russiaButton = document.getElementById("russiaButton");
  historyPopup = document.getElementById("historyPopup");
  historyPopup1 = document.getElementById("historyPopup1");
  historyPopup2 = document.getElementById("historyPopup2");
  historyPopup3 = document.getElementById("historyPopup3");
  ukrainePopup = document.getElementById("ukrainePopup");
  ukrainePopup1 = document.getElementById("ukrainePopup1");
  russiaPopup = document.getElementById("russiaPopup");
  russiaPopup1 = document.getElementById("russiaPopup1");
  russiaPopup2 = document.getElementById("russiaPopup2");
  button_1.addEventListener("click", function(){
    historyPopup.style.display = "block";
  })
  button_1.addEventListener("click", function(){
    historyPopup.style.display = "block";
    historyPopup1.style.display = "block";
    historyPopup2.style.display = "block";
    historyPopup3.style.display = "block";
  })
  ukraineButton.addEventListener("click", function(){
    ukrainePopup.style.display = "block";
    ukrainePopup1.style.display = "block";
  })
  russiaButton.addEventListener("click", function(){
    russiaPopup.style.display = "block";
    russiaPopup1.style.display = "block";
    russiaPopup2.style.display = "block";
  })
});
