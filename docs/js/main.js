var js = jQuery.noConflict();

js(document).ready(function($){
  $('#myCarousel').carousel({
    interval: 5000
  });
  $('#myCarousel .carousel-inner .item').each(function () {
    if ($(this).hasClass('active')) {
      $('.item.active .lightTitle').removeClass('hide').addClass('rotateIn animated');
      setTimeout(function () {
        $('.item.active .extralightTitle').removeClass('hide').addClass('fadeInRight animated');
      },800);
      setTimeout(function () {
        $('.item.active p').removeClass('hide').addClass('flash animated');
      },1800);
      setTimeout(function () {
        $('.item.active .showBtn').removeClass('hide').addClass('tada animated');
      },2000);
    }
  });


  $('#myCarousel').on('slid.bs.carousel', function (ev) {
    ev.preventDefault();
    setTimeout(function () {
      $('#myCarousel .carousel-inner .item').each(function () {
        if ($(this).hasClass('active')) {
          setTimeout(function () {
            $('.item.active .lightTitle').removeClass('hide').addClass('rotateIn animated');
            setTimeout(function () {
              $('.item.active .extralightTitle').removeClass('hide').addClass('fadeInRight animated');
            }, 800);
            setTimeout(function () {
              $('.item.active p').removeClass('hide').addClass('flash animated');
            }, 1800);
            setTimeout(function () {
              $('.item.active .showBtn').removeClass('hide').addClass('tada animated');
            }, 2000)
          }, 500);
        } else {
          $('.item .lightTitle').removeClass('rotateIn animated').addClass('hide');
          $('.item .extralightTitle ').removeClass('fadeInRight animated').addClass('hide');
          $('.item p').removeClass('flash animated').addClass('hide');
          $('.item .showBtn').removeClass('tada animated').addClass('hide');
        }
      },800);
    })


  });

});
