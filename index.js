// $(document).ready(function() {
//     $("#news-slider").owlCarousel({
//         items : 3,
//         itemsDesktop:[1199,3],
//         itemsDesktopSmall:[980,2],
//         itemsMobile : [600,1],
//         navigation:true,
//         navigationText:["",""],
//         pagination:true,
//         autoPlay:true
//     });
// });

$('.slickSlider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
