jQuery(document).ready(function ($) {
	Galleria.loadTheme('js/galleria/themes/classic/galleria.classic.js'); // Move outside doc ready when splitting files
	$('.galleria-portfolio').galleria({
        width: 900,
        height: 450
    });
});