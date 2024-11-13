
  $(document).ready(function(){
    $('html').removeClass('has-scroll-smooth');
    $(window).on('scroll', function() {
      if ($(window).scrollTop() >= 10) {
          $('.header_main').addClass('fixed-nav');
      }else{
        $('.header_main').removeClass('fixed-nav');
      }
    });
    $('#top-hamburger').click(function(e){
      $('#menu').addClass('is-visible');
    })
    $('#main-menu-close').click(function(e){
      $('#menu').removeClass('is-visible');
    })
    $('.sidebar_toggler').click(function(e){
      e.preventDefault();
      $('.sidebar').addClass('active');
      $('.overlay').show();
    })
    $('.sidebar_dismiss, .overlay').click(function(e){
      e.preventDefault();
      $('.sidebar').removeClass('active');
      $('.overlay').hide();
    })
    $('.stock_switch .switch span').click(function(){
      $('.stock_switch .switch span').removeClass('active');
      $(this).addClass('active');
    })
    $('.sizes .size').click(function(){
      $('.sizes .size').removeClass('active');
      $(this).addClass('active');
    })
    $('.colors .color').click(function(){
      $('.colors .color').removeClass('active');
      $(this).addClass('active');
    })
    $('.fabrics .fabric').click(function(){
      $('.fabrics .fabric').removeClass('active');
      $(this).addClass('active');
    })
    $('.increase').click(function() {
        var $input = $(this).siblings('.quantity-input');
        var value = parseInt($input.val());
        $input.val(value + 1);
    });

    // Decrease quantity
    $('.decrease').click(function() {
        var $input = $(this).siblings('.quantity-input');
        var value = parseInt($input.val());
        if (value > 1) { // Prevent going below 1
            $input.val(value - 1);
        }
    });
    $('.search_btn').click(function(e){
      e.preventDefault();
      $('.search_modal').show();
    })
    $('.search_modal_dismiss .btn').click(function(e){
      e.preventDefault();
      $('.search_modal').hide();
    })
    $('.toggle_order_summary').click(function(){
      $('.order_summary_sm_toggle').slideToggle();
    })
    $('.video-player *').click(function(e){
      e.preventDefault();
      $('.video-player').addClass('video-player-playing');
    })
    $('.image_section .secondary_image').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    });
    $('.category_slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true,
    });
    $('.product_section').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      margin: '10px',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
    $('.product_section2').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });

    $('#product_carousel').carousel();

    const priceGap = 1000;

    $(".price-input input").on("input", function () {
      let minPrice = parseInt($(".price-input .input-min").val()),
        maxPrice = parseInt($(".price-input .input-max").val());
    
      if (maxPrice - minPrice >= priceGap && maxPrice <= $(".range-input input").eq(1).attr("max")) {
        if ($(this).hasClass("input-min")) {
          $(".range-input input").eq(0).val(minPrice);
          $(".slider .progress").css("left", (minPrice / $(".range-input input").eq(0).attr("max")) * 100 + "%");
        } else {
          $(".range-input input").eq(1).val(maxPrice);
          $(".slider .progress").css("right", 100 - (maxPrice / $(".range-input input").eq(1).attr("max")) * 100 + "%");
        }
      }
    });
    
    $(".range-input input").on("input", function () {
      let minVal = parseInt($(".range-input input").eq(0).val()),
        maxVal = parseInt($(".range-input input").eq(1).val());
    
      if (maxVal - minVal < priceGap) {
        if ($(this).hasClass("range-min")) {
          $(".range-input input").eq(0).val(maxVal - priceGap);
        } else {
          $(".range-input input").eq(1).val(minVal + priceGap);
        }
      } else {
        $(".price-input .input-min").val(minVal);
        $(".price-input .input-max").val(maxVal);
        $(".slider .progress").css("left", (minVal / $(".range-input input").eq(0).attr("max")) * 100 + "%");
        $(".slider .progress").css("right", 100 - (maxVal / $(".range-input input").eq(1).attr("max")) * 100 + "%");
      }
    });

    $('.filter .dp_down').click(function(){
      $(this).siblings('.dp_div').slideToggle();
    })
    $('.lg_toggle_filter').click(function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $('.filter_box .filter').toggle(300);
    })
    $('.sm_toggle_filter').click(function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $('.filter_box .filter').addClass('active');
    })
    $('.filter_dismiss').click(function(){
      $('.sm_toggle_filter').toggleClass('active');
      $('.filter_box .filter').removeClass('active');
    })

  });
  
  const multiLevelMenu = document.querySelector(".multi-level-menu-wrapper");

// multiLevelMenu.forEach((mlItem, index)=>{
  
// })

$(document).ready(function(){
  $(".multi-level-menu-wrapper").each(function(index,mlMenu){
    var subMenuItems = $(mlMenu).find(".hasSubMenu");
    console.log("subMenuItems", subMenuItems)
    
    subMenuItems.each(function(i,subMenu){
      $(subMenu).find(".trigger").on("click",function(){
       var target=$(subMenu).attr("data-target");
       $(target).addClass("active");
     });
    });
    
    $(".backTrigger").on("click",function(){
      var _backTrigger = this;
      $(_backTrigger).parent(".subMenu").removeClass("active");
    });
  });
  $(document).ready(function () {
    function applyParallax() {
        let scrollPosition = $(window).scrollTop();
        
        // Loop through each section
        $('.article').each(function () {
            let sectionOffset = $(this).offset().top;
            sectionOffset = sectionOffset - 200;
            let sectionHeight = $(this).outerHeight();
            let sectionEnd = sectionOffset + sectionHeight;

            // Check if the current scroll position is within this section
            if (scrollPosition >= sectionOffset && scrollPosition < sectionEnd) {
                // Calculate the position relative to the section
                let relativeScrollPosition = scrollPosition - sectionOffset;

                $(this).find('.lax').each(function () {
                    let speed = parseFloat($(this).data('speed')) || 1; // Default speed to 1
                    let direction = $(this).data('direction') || 'down'; // Default direction to down
                    let translateY = relativeScrollPosition * speed;

                    // Reverse direction if needed
                    if (direction === 'up') {
                        translateY = -translateY;
                    }

                    // Apply the transformation
                    $(this).css('transform', `translateY(${translateY}px)`);
                });
            }
        });
        
    }

    // Optimized scroll event handling with requestAnimationFrame
    $(window).on('scroll', function () {
        window.requestAnimationFrame(applyParallax);
    });

    applyParallax();
});
});
AOS.init();