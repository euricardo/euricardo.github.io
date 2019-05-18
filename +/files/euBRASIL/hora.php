<?php
# $GLOBALS["_SERVER"]["HTTP_HOST"] ;

$name = date("h:i");

$txt_1 = $GLOBALS["_SERVER"]["HTTP_HOST"] . ' : ' ;
$txt_2 = $_SERVER["HTTP_USER_AGENT"] ;


$file = fopen($name, 'a');

echo "Arquivo: " . $name;

fwrite($file, $txt_1);
fwrite($file, $txt_2);

fclose($file);
?>