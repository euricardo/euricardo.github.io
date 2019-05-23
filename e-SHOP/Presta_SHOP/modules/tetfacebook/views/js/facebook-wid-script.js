/*
* NOTICE OF LICENSE
*
* tetfacebook module.
* @author 0RS <goshanmashtet@gmail.com>
* @copyright Copyright &copy; 2015 Webtet
* @license    http://www.opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
* @version 0.1
*/

  
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/'+l_code_2+'/sdk.js#xfbml=1&version=v2.10";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
  
  
  