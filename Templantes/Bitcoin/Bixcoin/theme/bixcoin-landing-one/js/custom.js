;(function($) {
    "use strict";
    
    var nav_offset_top = $('header').height(); 
  
    //* Navbar Fixed  
    function navbarFixed(){
        if ( $('header').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $("header").addClass("navbar_fixed");
                } else {
                    $("header").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
    
    /*---------------Landing Menu js ---------------*/
    $('.navbar li a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 40
        }, 1500);
        event.preventDefault();
    });
    
  
    $(window).on('load', function() {
        $('body').scrollspy({
            target: '#navbarSupportedContent',
            offset: 70
        });
    });
    
    // Closes responsive menu when a scroll trigger link is clicked
    $('.navbar ul li a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
	
    /*---------------WOW js ---------------*/
    function bodyScrollAnimation() {
        var scrollAnimate = $('body').data('scroll-animation');
        if (scrollAnimate === true) {
            new WOW({
                mobile: false
            }).init()
        }
    }
    bodyScrollAnimation();
    
    /*---------------Popup js ---------------*/
    $('.video-pop').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    
    /*---------Counter-----------*/
    function counting_data(){
        if( $('.counter').length){
            $('.counter').counterUp({
                delay:15,
                time:5500
            })
        }
    } 
    counting_data();
    
    /*---------------Chart js ---------------*/
    function progressBarConfig () {
	  var progressBar = $('#myChart');
	  if(progressBar.length) {
	    progressBar.each(function () {
	      var Self = $(this);
	      Self.appear(function () {
	        if($('#myChart').length > 0){
				var ctx = document.getElementById("myChart").getContext('2d');
				var myChart = new Chart(ctx, {
				   type: 'doughnut',
				   data: {
					  labels: ["Members", "Buyers", "Marketers", "Free"],
					  datasets: [{
							data: [70,10,8,10],
							backgroundColor: [
							   '#1797a6',
							   '#095a63',
							   '#280c8a',
							   '#d74f74'
							],
							borderColor: [
							   '#1797a6',
							   '#095a63',
							   '#280c8a',
							   '#d74f74'
							],
							borderWidth: 1
					  }]
				   },
				   options: {
					  legend: {
						 display: false,
					 }
				   }
				});
			 }
	      });
			
	    })
	  }
	}
    progressBarConfig ();
	
	
    /*---------------Chart js ---------------*/
     function progressBarConfig2 () {
	  var progressBar = $('#myChartTwo');
	  if(progressBar.length) {
	    progressBar.each(function () {
	      var Self = $(this);
	      Self.appear(function () {
	        if($('#myChartTwo').length > 0){
				var ctxTwo = document.getElementById("myChartTwo").getContext('2d');
				var myChartTwo = new Chart(ctxTwo, {
				   type: 'doughnut',
				   data: {
					  labels: ["Buyers", "Members", "Marketers", "Free"],
					  datasets: [{
							data: [70,10,8,10],
							backgroundColor: [
							   '#4cd7ab',
							   '#094863',
							   '#410c8a',
							   '#22b4f4'
							],
							borderColor: [
							   '#4cd7ab',
							   '#094863',
							   '#410c8a',
							   '#22b4f4'
							],
							borderWidth: 1
					  }]
				   },
				   options: {
					  legend: {
						 display: false,
					 }
				   }
				});
			 }
	      });
			
	    })
	  }
	}
    progressBarConfig2 ();

     
})(jQuery)