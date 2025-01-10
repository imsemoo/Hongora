$(document).ready(function () {
  // عند التمرير
  $(window).on("scroll", function () {
    // التحقق إذا كان التمرير قد تجاوز 50 بيكسل (يمكنك تغيير القيمة)
    if ($(window).scrollTop() > 50) {
      $(".navbar").addClass("fixed-nav");
    } else {
      $(".navbar").removeClass("fixed-nav");
    }
  });


  
});


 