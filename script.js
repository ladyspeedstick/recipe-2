$(document).ready(function() {

$( "#pic1, #pic2, #pic3" ).click(function() {
  $( "#pic1, #pic2, #pic3" ).hide( "slow", function() {
    alert( "Consider these hidden!" );
  });
});

$('#oil, #cilantro, #butter, #cardamom, #cumin, #garam, #mustard, #onion, #garlic, #spinach, #lime, #almond, #stock, #paste, #paneer'
	).append('<input type="checkbox" name="myCheckbox" />');

});


