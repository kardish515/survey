$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var favoriteColorSelected = $("#color").val();

  //   console.log(favoriteColorSelected);
  //
    $("#favoriteColor").css( "color", favoriteColorSelected);
  });


});
