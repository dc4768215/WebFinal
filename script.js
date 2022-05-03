$( function() {
   $( ".draggable" ).draggable({
     stack: "div" /* Option to let the windows stack and pop over each other correctly */
   });
 } );

var button_1;
var ukraineButton;
var russiaButton;
var propButton;
var historyPopup;
var historyPopup1;
var historyPopup2;
var historyPopup3;
var historyPopup4;
var ukrainePopup;
var ukrainePopup1;
var ukrainePopup2;
var ukrainePopup3;
var ukrainePopup4;
var russiaPopup;
var russiaPopup1;
var russiaPopup2;
var russiaPopup3;
var propPopup;
var propPopup1;
var propPopup2;
var propPopup3;
var propPopup4;

document.addEventListener("DOMContentLoaded", function() {
  button_1 = document.getElementById("button1");
  ukraineButton = document.getElementById("ukraineButton");
  russiaButton = document.getElementById("russiaButton");
  propButton = document.getElementById("propButton");
  historyPopup = document.getElementById("historyPopup");
  historyPopup1 = document.getElementById("historyPopup1");
  historyPopup2 = document.getElementById("historyPopup2");
  historyPopup3 = document.getElementById("historyPopup3");
  historyPopup4 = document.getElementById("historyPopup4");
  ukrainePopup = document.getElementById("ukrainePopup");
  ukrainePopup1 = document.getElementById("ukrainePopup1");
  ukrainePopup2 = document.getElementById("ukrainePopup2");
  ukrainePopup3 = document.getElementById("ukrainePopup3");
  ukrainePopup4 = document.getElementById("ukrainePopup4");
  russiaPopup = document.getElementById("russiaPopup");
  russiaPopup1 = document.getElementById("russiaPopup1");
  russiaPopup2 = document.getElementById("russiaPopup2");
  russiaPopup3 = document.getElementById("russiaPopup3");
  propPopup = document.getElementById("propPopup");
  propPopup1 = document.getElementById("propPopup1");
  propPopup2 = document.getElementById("propPopup2");
  propPopup3 = document.getElementById("propPopup3");
  propPopup4 = document.getElementById("propPopup4");
  button_1.addEventListener("click", function(){
    historyPopup.style.display = "block";
  })
  button_1.addEventListener("click", function(){
    historyPopup.style.display = "block";
    historyPopup1.style.display = "block";
    historyPopup2.style.display = "block";
    historyPopup3.style.display = "block";
    historyPopup4.style.display = "block";
  })
  ukraineButton.addEventListener("click", function(){
    ukrainePopup.style.display = "block";
    ukrainePopup1.style.display = "block";
    ukrainePopup2.style.display = "block";
    ukrainePopup3.style.display = "block";
    ukrainePopup4.style.display = "block";
  })
  russiaButton.addEventListener("click", function(){
    russiaPopup.style.display = "block";
    russiaPopup1.style.display = "block";
    russiaPopup2.style.display = "block";
    russiaPopup3.style.display = "block";
  })
  propButton.addEventListener("click", function(){
    propPopup.style.display = "block";
    propPopup1.style.display = "block";
    propPopup2.style.display = "block";
    propPopup3.style.display = "block";
    propPopup4.style.display = "block";
  })
});
