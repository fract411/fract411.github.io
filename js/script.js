$(document).ready(function() {

  var winheight = $(window).height();
  $('.first').css('height', winheight + 'px');

  $('.tabs_container  .tabs_menu  li').click(function() {

    var tabcontainer_name = $(this).data('tabcontainer');
    var tabcontainer_text = $(this).text();

    $(this).closest('.tabs_menu').find('.selected').removeClass('selected');
    $(this).addClass('selected');

    var closest_level = $(this).closest('.tabs_container').find('.tabs_content');
    $(closest_level[0]).children('.selected').removeClass('selected');

    $(this).closest('.tabs_container').find('.tabs_content .' + tabcontainer_name).addClass('selected');

    if ($(this).closest('.tabs_container').find('span.mob_list')) {
      $(this).parent().parent().find('span.mob_list').text(tabcontainer_text);
    }


  });

  $(window).scroll(function() {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > 0) {
      $('header').addClass('scrolled');
    }
    if (winScrollTop == 0) {
      $('header').removeClass('scrolled');
    }
  });

  $('.wwd .wwd_container .wwd_r_col .circle_di ul li img').mouseover(function() {
    $(this).addClass('hover');
  });
  $('.wwd .wwd_container .wwd_r_col .circle_di ul li img').mouseout(function() {
    $(this).removeClass('hover');
  });

  $('.wwd .wwd_container .wwd_r_col .circle_di ul li dl').mouseover(function() {
    $(this).parent().find('img').addClass('hover');
  });
  $('.wwd .wwd_container .wwd_r_col .circle_di ul li dl').mouseout(function() {
    $(this).parent().find('img').removeClass('hover');
  });


  $window = $(window);
  $('div[data-type="background"]').each(function() {
    var $bgobj = $(this);
    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
      var coords = '20px ' + yPos + 'px';
      $bgobj.css({ backgroundPosition: coords });
    });
  });

  $('.with_submenu').click(function() {
    if ($(this).hasClass('submenu_opened')) {
      $(this).removeClass('submenu_opened');
    } else {
      $(this).addClass('submenu_opened');
    }
  });


  $('input, select, textarea').blur(function() {
      $('input').parents('li').removeClass("focus");
    })
    .focus(function() {
      $('.focus').removeClass('focus');
      $(this).parents('li').addClass("focus");

    });

  $(document).click(function(event) {

    if (!$(event.target).closest('.form_window input, .form_window select, .form_window textarea').length) {
      $('.focus').removeClass('focus');
    }

    if (!$(event.target).closest('.products').length) {
      $('.products').removeClass('submenu_opened');
    }

  });

  $('.team_items').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    draggable: true,
    arrows: false,
    autplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
          autoplay: false,
          centerMode: true,
          focusOnSelect: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          arrows: false,
          autoplay: false,
          focusOnSelect: true
        }
      }
    ]
  });

  $('.team_arrow_left').click(function() {
    $('.team_items').slick('slickPrev');
  });

  $('.team_arrow_right').click(function() {
    $('.team_items').slick('slickNext');
  });

  var menu = $('.mobile__menu');

  $('.mobile__burger').click(function() {

    menu.css({
      'left': '0'
    })
  });

  $('.mob__menu-close').click(function() {

    menu.css({
      'left': '-100%'
    })

  });

});