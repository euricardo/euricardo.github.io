jQuery(document).ready(function ($) {
	$('.colorbox-portfolio a.portfolio-thumb-link').colorbox({
		current: "Image {current} of {total}",
		onOpen: $.fullscreen.unbindKeyboard,
		onClosed: $.fullscreen.bindKeyboard
	});	
});