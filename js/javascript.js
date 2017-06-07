
$(document).ready(function() {

  var count = $('.disp-img > img').length;    /* count the numner of images */
  var i = 1;


    /* click the right btn */
    $(".after-btn").click(function() {

       if (i < count){
         $(".current").removeClass("current").next().addClass("current");
         i++;
       }
       else {
         $(".current").removeClass("current");
         $(".disp-img img:nth-child(1)").addClass("current");
         i=1;
       }
    });

   /* click the left btn */
    $(".prev-btn").click(function() {

       if (i > 1){
         $(".current").removeClass("current").prev().addClass("current");
         i--;
       }
       else {
         $(".current").removeClass("current");
         $(".disp-img img:nth-child(4)").addClass("current");
         i=4;
       }
    });


});
