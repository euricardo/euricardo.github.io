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
// Neues Captcha holen / get new captcha
//
$CaptchaID = usercaptchanew($apikey);
if(preg_match("/^\d+$/", $credits) ){
	echo "Neues Captcha: $CaptchaID" . "\n";//INT / ERROR / NO CAPTCHA
}else{
	echo "ERROR: " . $CaptchaID . "\n";
	exit;
}

//
// Neues Captcha anzeigen / show new captcha
//
$Bild = usercaptchashow($apikey,$CaptchaID);//Binary

if($CaptchaID != 'NO CAPTCHA' && $Bild){
	$fp = fopen('testbild.png', 'w');
	fwrite($fp, $Bild);
	fclose($fp);

	//
	// Captcha antwort senden / send captcha answer
	//
	$antwort = '2C888V';//antwort / answer
	usercaptchacorrect($apikey,$CaptchaID,$antwort);//String
}else{
	echo "Kein neues Captcha\n";//no new captcha
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