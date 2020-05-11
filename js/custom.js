/*global $, window*/



$(function () {
    
    'use strict';
    
    //Adjust Header Height 
    
    $('.header').height($(window).height());
    
    //Toggle Navegation Bar 
    
    $('.links .menu').click(function () {
        
        $('.links .menu .one').toggleClass('first');
        $('.links .menu .two').toggleClass('second');
        $('.links .menu .three').toggleClass('last');
        
        $('.menu-items').toggleClass('hide show');
    
    });
    
    //Adjust Scroll To Elements 
    
    $('.menu-items li a').click(function () {
        
        $('body, html').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top - 97.4
        }, 1000);
        
       
        $('.links .menu .one').toggleClass('first');
        $('.links .menu .two').toggleClass('second');
        $('.links .menu .three').toggleClass('last');
        $('.menu-items').toggleClass('hide show');
        
    });
    
    
    //Made Fixed Navegation 
    
    $(window).scroll(function () {
        
        if ($(window).scrollTop() >= $('.about').offset().top - 100) {
            $('.links').addClass('fixed-links');
            $('body').offset().top = 0;
        
            
        } else {
            
            $('.links').removeClass('fixed-links');
        }
    });
    
    // Adjust Center Intro Padding 
    
    $('.intro').css({
        paddingTop: ($('.header').height() - $('.intro').height()) / 2
    });
    
    // adjust flexslider
    $('.owl-carousel').owlCarousel({
        margin: 10,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 1
            }
        }
    });
});
 