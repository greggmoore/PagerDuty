jQuery(function ($) {
    "use strict";
    /* page loader*/
    $(window).load(function () {
        // Animate loader off screen
        $(".loader").fadeOut("slow");
    });
    //scroll sections
    $(".scroll").click(function (event) {
        var height = $("nav").height() - 25;
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - height
        }, 1000);
    });
    // full screen side nav
    $('.side-menu-button').on('click', function () {
        $('.sidenav').toggleClass("mySideBar");
        $(this).toggleClass("actives");
        $('.side-menu-button > i').toggleClass("fa-bars");
        $('.side-menu-button > i').toggleClass("fa-times");
    });
    $('.sidenav ul >li a').on('click', function () {
        $('.sidenav').removeClass("mySideBar");
        $('.side-menu-button').removeClass("actives");
        $('.side-menu-button > i').toggleClass("fa-bars");
        $('.side-menu-button > i').toggleClass("fa-times");
    });
    //scroll nav colors
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 70) { // Set position from top to add class
            $('.navbar').addClass("shrink");
            $('.page-2 .navbar-brand> img').attr('src', 'images/logo-video.png');
        }
        else {
            $('.navbar').removeClass("shrink");
            $('.page-2 .navbar-brand> img').attr('src', 'images/logo-white-video.png');
        }
    });
    //revoulution slider
    $("#slider1").revolution({
        sliderType: "standard"
        , sliderLayout: "fullscreen"
        , delay: 9000
        , stopLoop: 'on'
        , stopAfterLoops: 0
        , stopAtSlide: 1
        , navigation: {
            arrows: {
                enable: true
            }
            , touch: {
                touchenabled: "on"
                , swipe_threshold: 75
                , swipe_min_touches: 1
                , swipe_direction: "horizontal"
                , drag_block_vertical: false
            }
        }
        ,responsiveLevels:[2048,1024,778,680]
        , gridwidth: 1170
        , gridheight: 720
    });
    //what-we-do mobile slider
    $("#mobile-slider").owlCarousel({
        slideSpeed: 300
        , singleItem: true
        , pagination: false
        , navigation: false, // Show next and prev buttons
        autoPlay: 3000
    });
    //slider for the blog
    $("#blog-slider").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 3
        , itemsDesktop: [1199, 3]
        , itemsDesktopSmall: [992, 2]
        , stopOnHover: true
    });
    //owl slider for portfolio section
    $("#owl-demo").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 3
        , itemsDesktop: [1199, 3]
        , itemsDesktopSmall: [979, 3]
    });
    //blog text slider
    $("#blog-text-slider").owlCarousel({
        pagination: true
        , slideSpeed: 300
        , paginationSpeed: 400
        , singleItem: true
        , transitionStyle: "fade"
    });
    //Happy Client Slider
    $("#owl-slider").owlCarousel({
        pagination: true
        , slideSpeed: 300
        , paginationSpeed: 400
        , singleItem: true
        , transitionStyle: "fade"
    });
    //wow .js
    if ($(window).width() > 767) {
        new WOW().init();
    }
    
    //animation
    //for our work numbers scroll
    function incrementalNumber() {
        var rt = {
            item: '.incrementalNumber'
            , value: 'data-value'
            , bigNumber: 'big-number'
            , setText: 'set-text'
            , setTime: 'set-time'
        };
        var numberTimers = [];
        var numberStarts = [];
        var autoincrementNumber = function (i, where, number) {
            var numberTime;
            var setTime = where.attr(rt.setTime);
            (setTime != "" && setTime !== undefined) ? numberTime = parseInt(setTime) / number : numberTime = 1000 / number;
            var bigNumber = where.attr(rt.bigNumber);
            (bigNumber != "" && bigNumber !== undefined) ? numberStarts[i] = parseInt(bigNumber) : (typeof bigNumber !== typeof undefined && bigNumber !== false) ? numberStarts[i] = Math.round(number - (number / 10)) : numberStarts[i] = 0;
            var setText = where.attr(rt.setText);
            numberTimers[i] = setInterval(function () {
                numberStarts[i]++;
                (numberStarts[i] <= number) ? where.html((setText !== undefined) ? numberStarts[i] + setText : numberStarts[i]) : clearInterval(numberTimers[i])
            }, numberTime);
        };
        $.each($(rt.item), function (index, value) {
            var data = $(this).attr(rt.value);
            autoincrementNumber(numberTimers.length, $(this), data);
        });
    }

    incrementalNumber();
    //fancy box for portfolio
    $(".fancy-box").fancybox({
        helpers: {
            title: {
                type: 'float'
            }
        }
    });


        //progress bar
        $(".progress-bar").each(function () {
            $(this).appear(function () {
                $(this).animate({width: $(this).attr("aria-valuenow") + "%"},3000)
            });
        });

    //Our team resposive tabs
    $('#responsiveTabsDemo').responsiveTabs({
        startCollapsed: 'tabs'
        , animation: 'fade'
    });
    if ($('#map').length) {
        //Contact Map
        var map;
        map = new GMaps({
            el: '#map'
            , lat: -12.043333
            , lng: -77.028333
            , scrollwheel: false
        });
        map.drawOverlay({
            lat: map.getCenter().lat()
            ,
            lng: map.getCenter().lng()
            ,
            layer: 'overlayLayer'
            ,
            content: '<div class="overlay_map"><div class="pin bounce"></div><div class="overlay_arrow above"></div></div>'
            ,
            verticalAlign: 'top'
            ,
            horizontalAlign: 'center'
        });
    }


    //Contact Us
    	

        //reset previously set border colors and hide all message on .keyup()
        $("#form-elements input, #form-elements textarea").keyup(function() {
                $("#result").slideUp();
        });

});

function start_process(t, e) { 
	$('body').append('<div id="overlay"></div><div id="preloader">'+ t +'</div>');
		if(e==1){
		  $('#overlay').css('opacity',0.4).fadeIn(400,function(){  $('#preloader').fadeIn(400);	});
		  return  false;
	   }
	   
	$('#preloader').fadeIn();	  
}

function end_process() { 
	
	setTimeout(function() {
		$('#preloader').fadeOut(400,function(){ $('#overlay').fadeOut(); /**$.fancybox.close();**/ }).remove();
	}, 1500);
}