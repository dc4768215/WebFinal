$( function() {
   $( ".draggable" ).draggable();
 } );

var button_1;
var check;
var visibility_;

document.addEventListener("DOMContentLoaded", function() {
  button_1 = document.getElementById("button1");
  check = 0;
  visibility_ = document.getElementById("visibility");

  button_1.addEventListener("onClick", function(){
    check = 1;
    displayHistory(check);
  })
});

function displayHistory(check) {
    if (check == 1) {
      visibility: visible;
    }

}
