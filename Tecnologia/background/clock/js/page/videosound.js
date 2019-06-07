jQuery(document).ready(function($) {

  "use strict";

  var options = {
    videoId : 'Nb5GpV_LUuU',
    start : 10,
    mute: false,
    muteButtonClass: 'sound_button'
  };
  $('body').tubular(options);

  $('.sound_button').on('click', function(){
    $(this).toggleClass('muted');
  });
});