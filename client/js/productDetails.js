/*
/**
 * File: js/showhide.js
 * Author: design1online.com, LLC
 * Purpose: toggle the visibility of fields depending on the value of another field
 **/
/*$(document).ready(function () {
    toggleFields(); //call this first so we start out with the correct visibility depending on the selected form values
    //this will call our toggleFields function every time the selection value of our underAge field changes
    $("#card_name").change(function () {
        toggleFields();
    });
	
	$("#card_address_1").change(function () {
        toggleFields();
    });
	
	$("#card_zip").change(function () {
        toggleFields();
    });

});
//this toggles the visibility of our parent permission fields depending on the current selected value of the underAge field
function toggleFields() {
    if ($("#card_name").val() == 100)
	
	{
        $("#card_address_1").show();
		
	}	
    else
	
	{
        $("#card_address_1").hide();
	}	
	  if ($("#card_address_1").val() == 100)
         {
		 $("#card_zip").show();
		 }
      else
	   {
         $("#card_zip").hide();	
		}
	     if ($("#card_zip").val() == 100)
		 {
            $("#card_number").show();
         }
		 else
		 {
            $("#card_number").hide();

			}
}
*/


/*

$("#pro-form input").keyup(function() {
  
var numValid = 0;
$("#pro-form input[required]").each(function() {
    if (this.validity.valid) {
        numValid++;
    }
});
*/




var progress = $("#progress"),
    progressMessage = $("#progress-message");

if (numValid == 0) {
    progress.attr("value", "0");
    progressMessage.text("Process Yet to Start.");
}
if (numValid == 1) {
		 progress.attr("value", "25");
         progressMessage.text("Ideation Complete.");
		 
}
if (numValid == 2) {
    progress.attr("value", "50");
    progressMessage.text("Pre-Build is done."); 
}
if (numValid == 3) {
    progress.attr("value", "75");
    progressMessage.text("Build is done.");
}
if (numValid == 4) {
    progress.attr("value", "100");
    progressMessage.text("Product Released.");
}

  
});