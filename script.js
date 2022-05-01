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
var ukrainePopup;
var russiaPopup;

document.addEventListener("DOMContentLoaded", function() {
  button_1 = document.getElementById("button1");

  ukraineButton = document.getElementById("ukraineButton");
  russiaButton = document.getElementById("russiaButton");
  historyPopup = document.getElementById("historyPopup");
  historyPopup1 = document.getElementById("historyPopup1");
  ukrainePopup = document.getElementById("ukrainePopup");
  russiaPopup = document.getElementById("russiaPopup");
  button_1.addEventListener("click", function(){
    historyPopup.style.display = "block";
  })
  button_1.addEventListener("click", function(){
    historyPopup.style.display = "block";
    historyPopup1.style.display = "block";
  })
  ukraineButton.addEventListener("click", function(){
    ukrainePopup.style.display = "block";
  })
  russiaButton.addEventListener("click", function(){
    russiaPopup.style.display = "block";
  })
});
