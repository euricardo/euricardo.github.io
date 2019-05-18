jQuery(function($){
	$(document).ready(function() {
		if(cur_page_data.pageid == 1){
			$('.menu_row').css('cssText', 'position: relative !important;');	
		}
		else{
			$('.header_heading').css('display','none');
		}
  
  		new WOW({ mobile: false }).init();
		
	});
});
