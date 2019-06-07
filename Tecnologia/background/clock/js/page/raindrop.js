(function(){
	"use strict";

	window.onload = function() {
    run();
  };

	function run() {
      var image = document.getElementById('rain_bg'),
      	somediv = document.getElementById('rain_wrapper');
      image.onload = function() {
          var engine = new RainyDay({
              image: this,
              parentElement: somediv
          });

          engine.rain([ [0, 2, 200], [3, 3, 1] ], 100);
      };
      image.crossOrigin = 'anonymous';
      image.src = 'img/rain-bg.jpg';  // Background Image URL
  }
})();