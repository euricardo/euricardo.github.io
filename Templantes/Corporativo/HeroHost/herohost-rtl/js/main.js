(function ($) {
 "use strict";
/*----------------------------
    Toogle Search
------------------------------ */
    // Handle click on toggle search button
        $('.header-search').click(function() {
            $('.search').toggleClass('open');
            return false;
        });

        // Handle click on search submit button
        $('#search-form input[type=submit]').click(function() {
            $('.search').toggleClass('open');
            return true;
        });

        // Clicking outside the search form closes it
        $(document).click(function(event) {
            var target = $(event.target);

            if (!target.is('.header-search') && !target.closest('.search').size()) {
                $('.search').removeClass('open');
            }
        });
    
/*----------------------------
 Sidebar Toggle Menu
------------------------------ */
    $('.show-submenu').on('click', function() {
        $(this).parent().find('.submenu').toggleClass('submenu-active'); 
        $(this).toggleClass('submenu-active');  
        return false;  
    });
    
    $('.show-submenu-dropdown').on('click', function() {
        $(this).parent().find('.submenu-dropdown').toggleClass('submenu-dropdown-active'); 
        $(this).toggleClass('submenu-dropdown-active');  
        return false;  
    });
     
/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
	
/*----------------------------
 wow js active
------------------------------ */
    new WOW().init();
 
/*----------------------------
 client owl active
------------------------------ */  
  $(".client-owl").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 6,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["PREV","NEXT"],
      itemsDesktop : [1199,5],
	  itemsDesktopSmall : [980,4],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });

/*----------------------------
 team owl active
------------------------------ */  
  $(".team-owl").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["PREV","NEXT"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });

    
/*----------------------------
 testimonial owl active
------------------------------ */  
  $(".testimonial-owl").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:false,
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });  
    
/*----------------------------
 testimonial owl active
------------------------------ */  
  $(".testimonial-owl-two").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 1,
	  navigationText:false,
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
   
    
/*----------------------------
 testimonial owl five active
------------------------------ */  
  $(".testimonial-owl-five").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:false,
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
    
    
/*----------------------------
 blog five owl active
------------------------------ */  
  $(".blog-five-owl").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 2,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:false,
      itemsDesktop : [1199,2],
	  itemsDesktopSmall : [980,2],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
   
/*--------------------------
 Countdown
---------------------------- */	
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<div class="cdown days"><span class="counting">%-D</span>days</div><div class="cdown hours"><span class="counting">%-H</span>hrs</div><div class="cdown minutes"><span class="counting">%M</span>mins</div><div class="cdown seconds"><span class="counting">%S</span>secs</div>'));
        });
    });
 
/*----------------------------
 price-slider active
------------------------------ */  
    $( "#slider-range" ).slider({
        range: true,
        min: -5,
        max: 310,
        values: [ 40, 250 ],
        slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - $" + $( "#slider-range" ).slider( "values", 1 ) ); 
	  
/*--------------------------
 Elevatezoom 
---------------------------- */	
    $("#zoom1").elevateZoom({
        gallery:'gallery_01',
        responsive : true, 
        galleryActiveClass: "active", 
        imageCrossfade: true,
        easing : true,
        cursor: "default",
        zoomWindowFadeIn: 300,
        zoomWindowFadeOut: 350
    });
    
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
/*----------------------------------------------
    Personal Address toggle function
-----------------------------------------------*/
    $("#add-new-address").on('click', function(){
        $("#add-new-address-info").slideToggle();
    });
    
    $("#transfer").on('click', function(){
        $("#transfer-info").slideToggle();
    });
    
    $("#payment").on('click', function(){
        $("#payment-info").slideToggle();
    });
    
    $("#paypal").on('click', function(){
        $("#paypal-info").slideToggle();
    });

/*----------------------------
    Input Plus Minus Button
------------------------------ */ 
    $(".cart-plus-minus").append('<div class="dec qtybutton"><i class="fa fa-angle-down"></i></div><div class="inc qtybutton"><i class="fa fa-angle-up"></i></div>');
	    $(".qtybutton").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
		  var newVal = parseFloat(oldValue) + 1;
		} else {
		   // Don't allow decrementing below zero
		  if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
			} else {
			newVal = 0;
        }
        }
		$button.parent().find("input").val(newVal);
    });
            
/*--------------------------
    Counter Up
---------------------------- */	
    $('.counter').counterUp({
        delay: 70,
        time: 5000
    }); 
    
/*--------------------------
    Mix It Up
---------------------------- */	
    $('.filter-items').mixItUp(); 

 

})(jQuery); 