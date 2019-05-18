<?php
// download de imagem
function download_arquivo($arquivo,$nome){//nome do arquivo e nome que aparecerá para o usuário
	// lê o tamanho do arquivo em bytes
	$tamanho = filesize("$arquivo");
	// pega extensão do arquivo
	$ext = explode (".",$arquivo);
	// aqui bloqueia downloads indevidos
	if ($ext[1]=="php") {
		echo "Arquivo não autorizado para download!";
	}
	// envia cabeçalhos HTTP para o navegador(tipo, tamanho, etc..)
	header("Content-Type: application/save"); 
	header("Content-Length: $tamanho");
	header("Content-Disposition: attachment; filename=$nome.$ext[1]"); 
	header("Content-Transfer-Encoding: binary");
	// nesse momento ele lê o arquivo e envia
	$fp = fopen("$arquivo", "r"); 
	fpassthru($fp); 
	fclose($fp);
/*
Uso:
 
Chamar a função download_arquivo($a,$b);
 
passar os parametros:
	$a = endereço + nome do arquivo;
	$b = nome do arquivo para o usuário 
*/
}
?>