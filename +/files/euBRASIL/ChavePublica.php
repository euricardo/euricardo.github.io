<?php

$caminhoCertificado = $_GET['caminhoCertificado'];

function getPublicKey($caminhoCertificado){
	//Funcao para pegar a chave publica
	//Abre o certificado digital
	$fp = fopen($caminhoCertificado, "r");
	$pub_key = fread($fp, 8192);
	fclose($fp);
	//Pega a referência para a cheve pública
	$pub = openssl_get_publickey($pub_key);
	//Pega a chave pública (retorna um array)
	$keyData = openssl_pkey_get_details($pub);
	//Retorna a chave
        echo   $keyData ;
	return $keyData['key'];
}

?>