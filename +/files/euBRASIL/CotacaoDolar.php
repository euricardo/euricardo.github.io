<?
// Abre o site com a cotação
if(!$fp=fopen("http://http://www.bcb.gov.br/pt-br/#!/home" ,"r" )) {
echo "Erro ao abrir a página de cotação" ;
exit ;
}
 
$conteudo = '';
while(!feof($fp)) { // leia o conteúdo da página
$conteudo .= fgets($fp,1024);
}
fclose($fp);
 
/*
Na expressão regular abaixo é pego os dois números que tem o seguinte formato: 9,9999 (ex.: 2,1368)
O 1º número é a taxa de compra e o 2º a taxa de venda
*/
eregi("([0-9],[0-9]{1,4}).*([0-9],[0-9]{1,4})",$conteudo,$saida);
list($lixo,$taxaCompra,$taxaVenda) = $saida;
echo "
<h3>Cotação atual do dólar</h3>
Taxa de compra: <b>$taxaCompra</b><br>
Taxa de venda : <b>$taxaVenda</b><br>
";
?>