jQuery(document).ready(function($) {
	$('.serene-portfolio a.portfolio-thumb-link').serene({
		onOpen: $.fullscreen.unbindKeyboard,
		onClose: $.fullscreen.bindKeyboard,
		captionEnhancement: function ($caption) {
			if (!!window.Cufon) {
				Cufon.replace($('h1', $caption));
			}
		}
	});
});