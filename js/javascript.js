$(document).ready(function() {
  $(".img-slider .after-btn").click(function() {
    $(".img-slider .current").removeClass("current").next().addClass("current");
  });

  $(".img-slider .prev-btn").click(function() {
    $(".img-slider .current").removeClass("current").prev().addClass("current");
  });

});
