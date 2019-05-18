<?php
#  Copia o Diretório Fonte dado com todos seus sub-diretórios
#  arquivos para o Diretório Destino indicado:
#  Obs.:   - Função recursiva;
#          - Montada para Linux (Separador "/");
#          - $DirDest deverá ser completo, com o nome do
#            diretório a ser criado.

$origem = 'http://mysql.ml/+/files/VCF' ;
$destino = 'http://mysql.ml/+/files/ricardo' ;


function Copiar($origem, $destino){
    
    mkdir($destino);
    if ($dd = opendir($origem)) {
        while (false !== ($Arq = readdir($dd))) {
            if($Arq != "." && $Arq != ".."){
                $PathIn = "$origem/$Arq";
                $PathOut = "$destino/$Arq";

                if(is_dir($PathIn)){
                    Copiar($PathIn, $PathOut);

                }elseif(is_file($PathIn)){ copy($PathIn, $PathOut);}
            }
        }
        closedir($dd);
    }
}

?>