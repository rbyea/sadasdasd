


$(document).ready(function () {

  $('.panel-heading').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.panel-heading').not(this).removeClass('in').next().slideUp();
  });

  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    fade: true,
    // autoplay: true,
    // autoplaySpeed: 4000,
    cssEase: 'linear',
    prevArrow: "<div class='slider-prev'></div>",
    nextArrow: "<div class='slider-next'></div>"
  });

});