<?php
# pega o endereço do diretório

$diretorio = getcwd('../+/files/');

# abre o diretório
$ponteiro     =  opendir($diretorio);
$nome_itens ;
$itens[100]; 

# monta os vetores com os itens encontrados na pastawhile
if( $nome_itens = readdir( $ponteiro ) ) { $itens[] = $nome_itens;}



# ordena o vetor de itens
sort($itens);

# percorre o vetor para fazer a separacao entre arquivos e pastas
foreach ($itens as $listar) {


# retira "./" e "../" para que retorne apenas pastas e arquivos
if ($listar!="." && $listar!=".."){
 
	# checa se o tipo de arquivo encontrado é uma pasta
	if (is_dir($listar)) { $pastas[]=$listar; }
	# caso VERDADEIRO adiciona o item à variável de pastas

		else{ $arquivos[]=$listar; }
		# caso FALSO adiciona o item à variável de arquivos
	}
}



 
# lista as pastas se existirem
if ($pastas != ""  ) { foreach($pastas as $listar){ eco "Pasta: <a href='$listar'>$listar</a>"; } }

# lista os arquivos se houverem
if ($arquivos != "") {foreach($arquivos as $listar){ echo " Arquivo: <a href='$listar'>$listar</a>"; } }

?>