document.addEventListener("DOMContentLoaded", function() {
  // Wowjs

  // new WOW().init();


  // $('#wowslider-container1 .ws_controls').append('<div class="ws_bullets"><div><a href="#wows1_0" title="bgtoggle1" class=""><span>1</span></a><a href="#wows1_1" title="bgtoggle2" class=""><span>2</span></a><a href="#wows1_2" title="bgtoggle3" class=""><span>3</span></a><a href="#wows1_3" title="bgtoggle4" class=""><span>4</span></a><a href="#wows1_4" title="bgtoggle5" class=""><span>5</span></a><a href="#wows1_5" title="bgtoggle6" class=""><span>6</span></a><a href="#wows1_6" title="bgtoggle7" class="ws_selbull"><span>7</span></a><a href="#wows1_7" title="bgtoggle8"><span>8</span></a></div></div>')


  // Wowjs_

  // Button up


  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.top').addClass('active');
    } else {
      $('.top').removeClass('active');
    }
  });
  $('.top').on('click', function() {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  })	

  // Button up_

  // Eventblock fade
    // let $target = $('.eventlist-block');
    // let hold = 500;

    // $.each($target,function(i,t){
    //     var $this = $(t);
    //     setTimeout(function(){ $this.fadeIn('normal'); },i*hold);
    // });


  // Eventblock fade_

  // Carousel-1

  // $('.carousel-1').children().each( function( index ) {
  //   $(this).attr( 'data-position', index );
  // });

  $('.carousel-1').owlCarousel({
    loop: true,
    nav: true,
    margin: 0,
    smartSpeed: 1000,
    responsive: {
      0:{
        items: 1
      }
    }

  });


  $('.carousel-1').on('translated.owl.carousel', function(event) {

    if ($('.owl-item.active').find('div.wideanim-js').length !== 0) {
      wideAnimation();
    } else {

    }
    
  });

  if ($('.section-wideanimcustomer').find('div.wideanimcustomer').length !== 0) {
    wideAnimation();
  } else {
    
  }

  // $('.item').filter('[data-bgvideo="0"]').remove();

  // if (window.matchMedia("(max-width: 760px)").matches) {
  //   $(".carousel-1").trigger('remove.owl.carousel', $('.item').find('[data-bgvideo="0"]')).trigger('refresh.owl.carousel'); 
  // } else {
    
  // }

  // $('.owl-item.active .item[data-wideanim]').wideAnimation()
  // let attr = $('.item').attr('data-wideanim')

  // if ($('.owl-item.active').children('[data-wideanim="1"]')) {
  //   wideAnimation()
  // } else {
  //   console.log(1);
  // }
  
  // $(document).on('click', '.owl-item>div', function() {
  //   $('.carousel-1').trigger('to.owl.carousel', $(this).data( 'position' ) );
  // });


  // let x = window.matchMedia('(max-width: 780px)')
  // counter()
  // x.addListener(counter)
  
  // Carousel-1_

  // Banner



  // function wideAnimation() {

  // const items = document.querySelectorAll('.wideanim-item');
  // const costumerItems = document.querySelectorAll('.wideanimcustomer-item');


  // [...items].map(randomFactory(1.5, 5)(scale))
  //           .map(randomFactory(0.6, 1.3)(transition))
  //           .map(randomFactory(200, 2000)(toNormal));
            
  // [...costumerItems].map(randomFactory(1.5, 5)(scale))
  //           .map(randomFactory(0.6, 1.3)(transition))
  //           .map(randomFactory(200, 2000)(toNormal));


  
  // function randomFactory(min, max) {
  //   return callback => item => {
  //     setTimeout(function(){
  //       callback(
  //         item, 
  //         random(min, max)
  //       );           
  //     }, 0);
      
  //     return item;
  //   }
  // }
  
  // function scale(item, value) {
  //   item.style.transform = `scale(${value})`;
  // }
  
  // function transition(item, value) {
  //   item.style.transition = `all ${value}s`;
  // }
  
  // function toNormal(item, timeout) { 
  //   item.style.zIndex = timeout;
  //   setTimeout(() => item.classList.add('normal-satate'), timeout);
  // }
  
  // function random(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  // };

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
  
  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
  
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
  
  function wideAnimation() {
    var items = document.querySelectorAll('.wideanim-item');
    var costumerItems = document.querySelectorAll('.wideanimcustomer-item');
  
    _toConsumableArray(items).map(randomFactory(1.5, 5)(scale)).map(randomFactory(0.6, 1.3)(transition)).map(randomFactory(200, 2000)(toNormal));
  
    _toConsumableArray(costumerItems).map(randomFactory(1.5, 5)(scale)).map(randomFactory(0.6, 1.3)(transition)).map(randomFactory(200, 2000)(toNormal));
  
    function randomFactory(min, max) {
      return function (callback) {
        return function (item) {
          setTimeout(function () {
            callback(item, random(min, max));
          }, 0);
          return item;
        };
      };
    }
  
    function scale(item, value) {
      item.style.transform = "scale(".concat(value, ")");
    }
  
    function transition(item, value) {
      item.style.transition = "all ".concat(value, "s");
    }
  
    function toNormal(item, timeout) {
      item.style.zIndex = timeout;
      setTimeout(function () {
        return item.classList.add('normal-satate');
      }, timeout);
    }
  
    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  };


  // Banner_

  // Select

  $('.tour-select-title').on('click', function() {
    $('.tour-select-dropdown').toggleClass('tour-select-dropdown-active')
  });

  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".tour-select");  // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.tour-select-dropdown').removeClass('tour-select-dropdown-active') // скрываем его
		}
	});


  $('.js-tour-select').select2({
    minimumResultsForSearch: Infinity,
    width: 'style'
  });

  $('.js-adress-select').select2({
    minimumResultsForSearch: Infinity,
    width: 'style'
  });

  $('.js-direction-select').select2({
    minimumResultsForSearch: Infinity,
    width: 'style',
    dropdownCssClass: 'direction-select-inner'
  });


  $('.select2-container').append('<img src="/bitrix/templates/fitgrad/img/logo-mobile-white.svg" alt="" class="logo-white">')

  $('.js-select-club-free').select2({
    minimumResultsForSearch: Infinity,
    width: 'style',
    dropdownParent: $("#modal-free"),
    dropdownCssClass: 'modal-select-inner'
  });
  
  $('.js-select-club-call').select2({
    minimumResultsForSearch: Infinity,
    width: 'style',
    dropdownParent: $("#modal-call"),
    dropdownCssClass: 'modal-select-inner'
  });

  $('.js-select-club-tobook').select2({
    minimumResultsForSearch: Infinity,
    width: 'style',
    dropdownParent: $("#modal-tobook"),
    dropdownCssClass: 'modal-select-inner'
  });

  // $('.js-select-club-call').styler()

  // $('.js-select-club-free').styler()

  // $('.js-select-club-tobook').styler()

  // Select_

  // Ourstock carousel

  $('.ourstock-carousel').owlCarousel({
    touchDrag: ($(".ourstock-carousel .item").length > 2) ? true : false,
    mouseDrag: ($(".ourstock-carousel .item").length > 2) ? true : false,
    loop: false,
    margin: 0,
    nav: true, // Nav включен в стилях
    responsive: {
      1200:{
        dots: false,
        items: ($(".ourstock-carousel .item").length > 1) ? 3 : 1
      },
      760:{
        touchDrag: ($(".ourstock-carousel .item").length > 2) ? true : false,
        mouseDrag: ($(".ourstock-carousel .item").length > 2) ? true : false,
        dots: false,
        items: ($(".ourstock-carousel .item").length > 1) ? 3 : 1
      },
      0:{
        dots: true,
        items: 1,
        touchDrag: ($(".ourstock-carousel .item").length > 1) ? true : false,
        mouseDrag: ($(".ourstock-carousel .item").length > 1) ? true : false
      }
    }
  })

  // Ourstock carousel_

  // Megaslider

  var megaslider1 = $('.megaslider-js');

  megaslider1.children().each( function( index ) {
    $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
  });

  megaslider1.owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    margin: 40,
    mouseDrag: false,
    touchDrag: false,
    smartSpeed: 500,
    responsive: {
      0: {
        dots: true
      },
      760: {
        dots: false
      }
    }

  });

  $(document).on('click', '.owl-item>div', function() {
    megaslider1.trigger('to.owl.carousel', $(this).data( 'position' ) );
  });

  // Megaslider_

  // Tabs

  $('.toppannel-buttons').on('click', '.toppannel-button:not(.toppannel-button-active)', function() {
    $(this)
      .addClass('toppannel-button-active').siblings().removeClass('toppannel-button-active')
      .closest('div.megaslider').find('div.megaslider-js').removeClass('megaslider-js-active').eq($(this).index()).addClass('megaslider-js-active');
  });

  $('.toppannel-buttons').on('click', '.toppannel-button:not(.toppannel-button-active)', function() {
    $(this)
      .addClass('toppannel-button-active').siblings().removeClass('toppannel-button-active')
      .closest('div.megaslider-toppannel').find('div.toppannel-address').removeClass('toppannel-address-active').eq($(this).index()).addClass('toppannel-address-active');
  });

  $('.toppannel-buttons').on('click', '.toppannel-button:not(.toppannel-button-active)', function() {
    $(this)
      .addClass('toppannel-button-active').siblings().removeClass('toppannel-button-active')
      .closest('div.megaslider').find('div.megaslider-more-wrapper').removeClass('megaslider-more-active').eq($(this).index()).addClass('megaslider-more-active');
  });

  // $('.timetable-tabs').on('click', '.timetable-button:not(.timetable-button-active)', function() {
  //   $(this)
  //     .addClass('timetable-button-active').siblings().removeClass('timetable-button-active')
  //     .closest('.timetable-widgets').find('.timetable-widget').removeClass('timetable-widget-active').eq($(this).index()).addClass('timetable-widget-active');
  // });

  $('.timetable-tabs').on('click', '.timetable-button:not(.timetable-button-active)', function() {
    $(this)
      .addClass('timetable-button-active').siblings().removeClass('timetable-button-active');
    $(this).parent().next().find('.timetable-widget').removeClass('timetable-widget-active').eq($(this).index()).addClass('timetable-widget-active')
  });
  // Tabs_

  // Maingallery

  $('.js-maingallery').owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    nav: true,
    margin: 100,
    smartSpeed: 400
  });

  $(".js-maingallery").trigger("to.owl.carousel", [10, 7])

  // Maingallery_


  // Reviews-carousel

  $('.reviews-carousel').owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      760: {
        items: 1,
        dots: false
      },
      0: {
        items: 1,
        dots: true
      }
    }
  })

  // Reviews-carousel_


  // Accordion

  $('.faq-accordion').accordion({
    heightStyle: "content"
  })


  $('.faq-toggle').on('click', '.faq-button:not(.faq-toggle-active)', function() {
    $(this)
      .addClass('faq-toggle-active').siblings().removeClass('faq-toggle-active')
      .closest('div.faq').find('div.faq-accordion').removeClass('faq-accordion-active').eq($(this).index()).addClass('faq-accordion-active');
  });
  // Accordion_


  // Hamburger

  $('.hamburger').on('click', function() {
    $('.hamburger').toggleClass('is-active')
    $('.header-mobile-menu').toggleClass('header-mobile-menu-active')
    $('.header-mobile-telephone').fadeToggle(500)
    $('.consultation-button').fadeToggle(500)
    $('.header-mobile-logo').fadeToggle(500)
    $('.to-book-button').fadeToggle(500)
    $('.dn-sports-club').fadeToggle(500)
  })

  $('.mobile-clubs-button').on('click', function() {
    $('.li-club-dropdown').toggle(500);
  });
  
  // Hamburger_

  // Parallax-block

  function viewport() {
    var e = window,
        t = "inner";

    return "innerWidth" in window || (t = "client", e = document.documentElement || document.body), {
        width: e[t + "Width"],
        height: e[t + "Height"]
    }
}
o = function() {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
            return t.setTimeout(e, 1e3 / 60)
        }
    };
function scrollParallax(e) {

    var t = .10,
        o = "up",
        a = 90;

    $(e).attr("data-multiplier") && (t = $(e).attr("data-multiplier")),
    $(e).attr("data-direction") && (o = $(e).attr("data-direction")),
    $(e).attr("data-start") && (a = parseFloat($(e).attr("data-start"))),
    1 == $(e).attr("data-top") && (a = parseFloat($(e).offset().top * t - 30));

    var n = function() {
        var r = 0;
        var i = window.pageYOffset,
            r = $(e).attr("data-pos"),
            l = 0 - i * t;
        "down" == o && (l = 0 + i * t);
        var s = r - .08 * (r - l),
            c = s + a;
        // do smooth

        $("html").hasClass("popup-opened") || $(e).css({
          transform: "translate3d(0px, " + c + "px, 0px)"
        }),
        viewport().width < 750 && $(e).css({transform: "translate3d(0px, 0px, 0px)"}), 
        $(e).attr("data-pos", s), window.requestAnimationFrame(n);
        
    };

    window.requestAnimationFrame && n();
}
$(".fitness-flex .js-parallax-block").each(function() {scrollParallax($(this))});

  // Parallax-block_

  // Sign up to trainer

  $('.trainer-entry').on('click', function() {
    $('.trainer-contacts').toggleClass('trainer-contacts-active')
  });

  // Sign up to trainer_


  // Modal

  $('.telephone').fancybox({
    touch: false
  });
  $('.telephone-mobile').fancybox({
    touch: false
  });
  $('.directionlist-button-absolute').fancybox({
    touch: false
  });
  $('.to-book-button').fancybox({
    touch: false
  });
  $('.li-to-book-button').fancybox({
    touch: false
  });
  $('.li-consultation-button').fancybox({
    touch: false
  });
  $('.li-telephone').fancybox({
    touch: false
  });
  $('.consultation-button').fancybox({
    touch: false
  });
  $('.reserve-button').fancybox({
    touch: false
  });


  // Modal



});
