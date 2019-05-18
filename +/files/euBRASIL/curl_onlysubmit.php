<?php
require_once 'curl_api.php';

$apikey = '86PW7GJ36L3VPKUT4DT8C';
$bild = 'test.png';

//
// Guthaben / credits
//
$credits = captchaguthaben($apikey);
if(preg_match("/^\d+$/", $credits) ){
	echo "Guthaben: " . $credits . "\n";
}else{
	echo "ERROR: " . $credits . "\n";
	exit;
}

//
// Captcha einreichen / submit captcha
//
$NewCaptchaID = usercaptchaupload($apikey,'test.png');//INT
if(preg_match("/^\d+$/", $credits) ){
	echo "NewCaptchaID: $NewCaptchaID\n";
}else{
	echo "ERROR: " . $NewCaptchaID . "\n";
	exit;
}

//
// Captcha daten holen / captcha answer
//
$wait = 10;
sleep($wait);
for ($i = $wait; $i <= 100; $i++) {
	$ergebnis = usercaptchacorrectdata($apikey,$NewCaptchaID);//String
	//echo "Ergebnis: $ergebnis\n";//captcha antwort / captcha answer

	if($ergebnis != ""){
		if($ergebnis == '2C888V'){
			//
			// Captcha richtig / captcha ok
			//
			usercaptchacorrectback($apikey,$NewCaptchaID,1);//String = OK
		}else{
			//
			// Captcha falsch / captcha notok
			//
			usercaptchacorrectback($apikey,$NewCaptchaID,2);//String = OK
		}
		break;
	}

	sleep(3);
}

?>