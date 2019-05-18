<?php 
function next_url(){
	return 'http://www.9kw.eu/index.cgi';
}

function post_data($url, $data){
	for($i = 0; $i <= 5; $i++){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_VERBOSE, 0);
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
		$ret = curl_exec($ch);
		$http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
		curl_close($ch);
		//echo $http_status . "\n";
		if($http_status == 200){
			break;
		}
	}
	return $ret;
}

function get_data($url){
	for($i = 0; $i <= 5; $i++){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_VERBOSE, 0);
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		$ret = curl_exec($ch);
		$http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
		curl_close($ch);
		//echo $http_status . "\n";
		if($http_status == 200){
			break;
		}
	}
	return $ret;
}

function usercaptchaupload($apikey, $img_file_name){ 
	$fp = fopen($img_file_name, "rb");
	if(!$fp){
		return NULL;
	}
	$file_size = filesize($img_file_name);
	if($file_size <= 0){
		return NULL;
	}
	$data = fread($fp, $file_size);	
	fclose($fp);
	$enc_data = base64_encode($data);

	$url = next_url();
	$data = post_data($url, array("action" => "usercaptchaupload","nomd5" => "0","source" => "phpapi","apikey" => $apikey, "base64" => 1, "file-upload-01" => $enc_data));
	return $data;
}

function usercaptchacorrect($apikey,$CaptchaID,$antwort){
	$url = next_url();
	$data = get_data($url.'?'.'action=usercaptchacorrect&source=phpapi&apikey='.$apikey.'&id='.$CaptchaID.'&antwort='.urlencode($antwort));
	return $data;
}

function usercaptchashow($apikey,$CaptchaID){
	$url = next_url();
	$data = get_data($url.'?'.'action=usercaptchashow&source=phpapi&apikey='.$apikey.'&id='.$CaptchaID);
	return $data;
}

function usercaptchanew($apikey){
	$url = next_url();
	$data = get_data($url.'?'.'action=usercaptchanew&source=phpapi&apikey='.$apikey);
	return $data;
}

function captchaguthaben($apikey){
	$url = next_url();
	$data = get_data($url.'?'.'action=usercaptchaguthaben&source=phpapi&apikey='.$apikey);
	return $data;
}

function usercaptchacorrectback($apikey,$NewCaptchaID,$correct){
	$url = next_url();
	$data = get_data($url.'?'.'action=usercaptchacorrectback&apikey='.$apikey.'&source=phpapi&id='.$NewCaptchaID.'&correct='.$correct);
	return $data;
}

function usercaptchacorrectdata($apikey,$NewCaptchaID){
	$url = next_url();
	$data = get_data($url.'?'.'action=usercaptchacorrectdata&apikey='.$apikey.'&source=phpapi&id='.$NewCaptchaID);
	return $data;
}

?>