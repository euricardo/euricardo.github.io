jQuery(document).ready(function ($) {
	$('.fancybox-portfolio a.portfolio-thumb-link').fancybox({
		'transitionIn': 'elastic',
		'transitionOut': 'elastic',
		'speedIn': 600,
		'speedOut': 200,
		'overlayColor': '#111',
		onStart: $.fullscreen.unbindKeyboard,
		onClosed: $.fullscreen.bindKeyboard
	});
});