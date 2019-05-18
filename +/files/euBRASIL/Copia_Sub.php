<?php 

$sub =  $_GET['sub'];

mkdir( $sub , 0777 ) ; 
chmod( $sub , 0777 );

echo "***Diretorio ($sub) criado com sucesso!*** "; 

function copyr($source, $dest)
{
   // COPIA UM ARQUIVO
   if (is_file($source)) {
      return copy($source, $dest);
   }
 

 
   // FAZ LOOP DENTRO DA PASTA
   $dir = dir($source);
   while (false !== $entry = $dir->read()) {
      // PULA "." e ".."
      if ($entry == '.' || $entry == '..') {
         continue;
      }
 
      // COPIA TUDO DENTRO DOS DIRETÓRIOS
      if ($dest !== "$source/$entry") {
         copyr("$source/$entry", "$dest/$entry");
         echo "COPIANDO $entry de $source para $dest <br />";
      }
   }
 
   $dir->close();
   return true;
 
}

copyr( '../+/' , $sub ) ;

echo "Sub(copiado)";


?>