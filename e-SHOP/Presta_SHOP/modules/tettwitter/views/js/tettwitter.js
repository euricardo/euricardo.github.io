/*
* NOTICE OF LICENSE
* tettwitter module.
* @copyright Copyright &copy; 2015 Webtet
*/
$(document).ready(function(){$('div.twitter-button-tet').insertAfter('ul#usefull_link_block');});
!function(d,s,id){
		var js,fjs=d.getElementsByTagName(s)[0];
		if(!d.getElementById(id)){
			js=d.createElement(s);
			js.id=id;
			js.src="//platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js,fjs);
		}
}(document,"script","twitter-wjs");