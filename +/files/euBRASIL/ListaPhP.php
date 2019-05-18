<?php phpinfo();
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'http://sounoob.com.br/labs/testCurl.php');
curl_exec($ch);