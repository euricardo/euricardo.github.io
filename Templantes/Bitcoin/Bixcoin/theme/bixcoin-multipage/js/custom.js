;(function($) {
    "use strict";
    
    var nav_offset_top = $('header').height() + 100; 
    
    //* Navbar Fixed  
    function navbarFixed(){
        if ( $('header').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top) {
                    $("header").addClass("navbar_fixed");
                } else {
                    $("header").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
    
    /*------- search form js -------*/
    $('.search_dropdown a').on('click', function(){
        if( $(this).parent().hasClass('open') ){
            $(this).parent().removeClass('open')
        }
        else{
            $(this).parent().addClass('open')
            $('.offcanvas_closer').addClass('show')
        }
        return false
    });
    
    
    /* Main Slider js */
    function main_slider(){
        if ( $('#main_slider').length ){
            $("#main_slider").revolution({
                sliderType:"standard",
                sliderLayout:"fullwidth",
                disableProgressBar:"on",
                dottedOverlay:"none",
                delay:5000,
                navigation: {
                    touch:{
						touchenabled:"on"
					},
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:780,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 15,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 15,
                            v_offset: 0
                        }
                    }
                },
                responsiveLevels:[1240,1199,991,767,576],
                visibilityLevels:[1240,1199,991,767,576],
                gridwidth:[1170,960,700,500,290],
                gridheight:[840,800,800,700,650],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"slidercenter",
                    speed:2000,
                    speedbg:0,
                    speedls:0,
                    levels:[2,3,4,5,6,7,12,16,10,50,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"true",
                stopLoop:"true",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"false",
                autoHeight:"off",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                startWithSlide:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    };
    main_slider();
    
    /*----------------------------------------------------*/
    /*  client Slider
    /*----------------------------------------------------*/
    function client_sliders(){
        if ( $('.clients_slider').length ){
            $('.clients_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 5,
                nav:false,
                autoplay: true,
                smartSpeed: 1500,
                dots:false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    700: {
                        items: 4,
                    },
                    992: {
                        items: 5,
                    }
                }
            })
        }
    }
    client_sliders();
    
    /*----------------------------------------------------*/
    /*  forum Slider
    /*----------------------------------------------------*/
    function forum_sliders(){
        if ( $('.forums_slider').length ){
            $('.forums_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 4,
                nav:false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    700: {
                        items: 3,
                    },
                    992: {
                        items: 4,
                    }
                }
            })
        }
    }
    forum_sliders();
    
    
    /*----------------------------------------------------*/
    /*  testimonial_slider
    /*----------------------------------------------------*/
    function testimonial_sliders(){
        if ( $('.testimonial_slider').length ){
            $('.testimonial_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 2,
                nav:false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    700: {
                        items: 1,
                    },
                    991: {
                        items: 2,
                    }
                }
            })
        }
    }
    testimonial_sliders();
    
    /*==============================
	nice selector js
	==============================*/
    function selector_nice(){
        $('select').niceSelect();
    }
    selector_nice();
    
    
    /*==============================
	video-pop
	==============================*/
    $('.video-pop').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    
    
    /*==============================
	Ticker
	==============================*/
	$('#ticker').marquee({
		pauseOnHover: true,
		duplicated: true,
		duration: 18000,
		gap: 0,
		startVisible: true
	});
    
    /*==============================
	Clock Timer
	==============================*/
    var clock;
    if($(".clock").length > 0) {
        // Grab the current date
        var currentDate = new Date();

        // Set some date in the past. In this case, it's always been since Jan 1
        var pastDate  = new Date(currentDate.getFullYear(), 0, 1);

        // Calculate the difference in seconds between the future and current date
        var diff = currentDate.getTime() / 1000 - pastDate.getTime() / 1000;

        // Instantiate a coutdown FlipClock
        clock = $('.clock').FlipClock(diff, {
            clockFace: 'DailyCounter'
        });
    };
    
    
    /*==============================
	market data js
	==============================*/
    (function(b,i,t,C,O,I,N) {
        window.addEventListener('load',function() {
          if(b.getElementById(C))return;
          I=b.createElement(i),N=b.getElementsByTagName(i)[0];
          I.src=t;I.id=C;N.parentNode.insertBefore(I, N);
        },false)
    })(document,'script','https://widgets.bitcoin.com/widget.js','btcwdgt');
    
    (function(d, s, id) {
       var js, pjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//www.tickcounter.com/static/js/loader.js"; pjs.parentNode.insertBefore(js, pjs); 
   }(document, "script", "tickcounter-sdk"));
    
    /*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/
    
    if ( $('#mapBox').length ){
        var $lat = $('#mapBox').data('lat');
        var $lon = $('#mapBox').data('lon');
        var $zoom = $('#mapBox').data('zoom');
        var $marker = $('#mapBox').data('marker');
        var $info = $('#mapBox').data('info');
        var $markerLat = $('#mapBox').data('mlat');
        var $markerLon = $('#mapBox').data('mlon');
        var map = new GMaps({
        el: '#mapBox',
        lat: $lat,
        lng: $lon,
        scrollwheel: false,
        scaleControl: true,
        streetViewControl: false,
        panControl: true,
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        zoom: $zoom,
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#dcdfe6"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "color": "#808080"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#dcdfe6"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "weight": 1.8
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d7d7d7"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ebebeb"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#a7a7a7"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#efefef"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#696969"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#737373"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d6d6d6"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {},
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                }
            ]
        });
    }
})(jQuery)