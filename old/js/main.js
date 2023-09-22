$(document).ready(function(){


    let $btns = $('.project-area .button-group button');

    $btns.click(function(e){

        $('.project-area .button-group buttons').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter:selector

        });
        return false;
    });


    $('.project-area .button-group #btn1').trigger('click');


    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
        // other options
      });

      //Owl-Carousel

      $('.site-main .about-area .owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            544:{
                items:2
            }
        }
      });


      //sticky navigation menu

     // navbarfixed();

      let nav_offset_top = $('.header_main').height() + 50;

      function navbarfixed(){
         // console.log("hola");
          if($('.header_main').length){
           //   console.log("hola_2");
              $(window).scroll(function(){
                  let scroll = $(window).scrollTop();
                  if(scroll >= nav_offset_top){
                    $('.header_main .main-menu').addClass('navbar_fixed');
                  }else{
                    $('.header_main .main-menu').removeClass('navbar_fixed');
                  }

              });
          }
      }

      navbarfixed();

});
