<?php 

$sub =  $_GET['sub'];

mkdir( $sub , 0777 ) ; 
chmod( $sub , 0777 );

echo "***Diretorio ($sub) criado com sucesso!*** "; 

?>