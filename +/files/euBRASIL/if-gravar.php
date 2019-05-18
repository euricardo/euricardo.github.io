<?php

$name = date("h:i");

$file = $name; 

$texto = $_POST['texto'];

if(file_exists("$name")) {
echo "Arquivo ja existe" ;
}
else {
echo " Gravou " ;
}


$file = fopen($name, 'a');

echo "Arquivo: " . $name;

fwrite($file, $texto);

fclose($file);
?>