/*
 * JAVASCRIPT
 */

//Formulas:
//New height = new width / (original width / original height).
//New width = (original width / original height) * new height.

//Initial values:
var initialWidth = 1920,
    initialHeight = 1080,
    newWidth,
    newHeight;

$("#initial-width").val(initialWidth);
$("#initial-height").val(initialHeight);

//Get new values:
function getValues() {
    initialWidth = $("#initial-width").val();
    initialHeight = $("#initial-height").val();
    newWidth = $("#new-width").val();
    newHeight = $("#new-height").val();
};

//Aspect ratio:
function getAspectRatio() {
    //Formula: "Aspect Ratio = Width / Height".
    return aspectRatio = initialWidth / initialHeight;
};

//Get new height:
$("#new-width").on("change keyup", function() {
    //Refresh data.
    getValues();
    getAspectRatio();
    //Formula: "Height = Width / Aspect Ratio".
    newHeight = Math.round(newWidth / aspectRatio);
    //Output:
    $("#new-height").val(newHeight);
});

//Get new width:
$("#new-height").on("change keyup", function() {
    //Refresh data.
    getValues();
    getAspectRatio();
    //Formula: "Width = Aspect Ratio * Height".
    newWidth = Math.round(newHeight * aspectRatio);
    //Output:
    $("#new-width").val(newWidth);
});

//Reset:
$("#initial-width, #initial-height").on("change keyup", function() {
    //Output:
    $("#new-width").val("");
    $("#new-height").val("");
});