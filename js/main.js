/**
 * Created by User on 1/23/2020.
 */
$(document).ready(function () {
    $('#slides').superslides({

        animation:'fade',
         play:4000
    });

    //type js
    var typed = new Typed(".typed", {
        strings: ["Vanila","Poller","Cone"],
        loop:true,
        showCursor: false,
        typeSpeed: 70,
        startDelay:1000
    });


/*owl carosoul*/

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });


/*jquery easypiechart*/

    var SkilsTopOffset = $('.sectionskill').offset().top;
    $(window).scroll(function () {
if(window.pageYOffset > SkilsTopOffset - $(window).height()+200 ){

    $('.chart').easyPieChart({
        easing:'easeInout',
        barColor:'white',
        trackColor:false,
        scaleColor:false,
        lineWidth:4,
        size:152,
        onStep: function (from,to,percent) {
            $(this.el).find('.percent').text(Math.round(percent));

        }
    });
}

    });
   //fancy app
    $("[data-fancybox]").fancybox();
    //isotop
    $('.items').isotope({

       filter:'*',
        animationOptions:{

           duration:1500,
            easing:"linear",
            queue:false
        }


    });
    //filtering
    $('.filterS a').click(function () {
        $('.filterS a').removeClass('current');
        $(this).addClass('current');

        var selector = $(this) .attr('data-filter');
        $('.items').isotope({

            filter: selector,
            animationOptions:{

                duration:1500,
                easing:"linear",
                queue:false
            }


        });
        return false;

    });
    $("#navigation li a") .click(function(e) {
        e.preventDefault();
        var targetElement = $(this) .attr("href");
        var targetPosition = $ (targetElement).offset().top;
        $("html, body").animate({scrollTop: targetPosition - 50},"slow");


    });



});