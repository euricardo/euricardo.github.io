<script language=JavaScript>
<!-- begin
// Aqui é o nosso cronometro que marca quanto tempo falta para o proximo lote de e-mails ser enviado;
//Começa a contar em Ordem decrescente de 1 hora;
var sHors = "01"; 
//1 minuto;
var sMins = "01";
//60 segundos;
var sSecs = 60;
function getSecs(){
	sSecs--;
	if(sSecs<0)
    {sSecs=59;sMins--;if(sMins<=9)sMins="0"+sMins;}
	if(sMins=="0-1")
    {sMins=59;sHors--;if(sHors<=9)sHors="0"+sHors;}
	if(sSecs<=9)sSecs="0"+sSecs;
	if(sHors=="0-1")
	{sHors="00";sMins="00";sSecs="00";
	clock1.innerHTML=sHors+"<font color=#000000>:</font>"+sMins+"<font color=#000000>:</font>"+sSecs;}
    else
    {
   clock1.innerHTML=sHors+"<font color=#000000>:</font>"+sMins+"<font color=#000000>:</font>"+sSecs;
   	setTimeout('getSecs()',1000);
	}
	}
//-->
</script>
<center><b><font color=#ff0000 size=2 face=arial>Tempo restante para o pr&oacute;ximo lote: <span id='clock1'></span><script>setTimeout('getSecs()',1000);</script></font></b><br /><br /></center>
<?php 
 
//Aqui fazemos a nossa conexão com o Banco de Dados MySQL;
$hostname_Cadastro = "http://sql212.msql.ml";
$database_Cadastro = "msql_17414151_obdc";
$username_Cadastro = "msql_17414151";
$password_Cadastro = "hyshodan";
$Cadastro = mysql_pconnect($hostname_Cadastro, $username_Cadastro, $password_Cadastro) or trigger_error(mysql_error(),E_USER_ERROR); ?>
<?php
 
if (!function_exists("GetSQLValueString")) {
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;
 
  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);
 
  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}
}
 
$currentPage = $_SERVER["PHP_SELF"];
//Aqui determinamos o numero registros que vamos pegar em um lote de e-mails. No meu caso são 80 e-mails por lote;
$maxRows_Recordset1 = 80;
//Aqui é a página inicial. No caso deixe sempre zero que é igual a primeira página.;
$pageNum_Recordset1 = 0;
if (isset($_GET['pageNum_Recordset1'])) {
  $pageNum_Recordset1 = $_GET['pageNum_Recordset1'];
}
$startRow_Recordset1 = $pageNum_Recordset1 * $maxRows_Recordset1;
//Puxar registros da tabela dentro do Banco de Dados.
//Reparem a Query só vai puxar os dados de quem estiver com status = 0. Nao esqueça de mudar esse criterio caso voce queria seguir outros padroes.;
//Detalhe para a ordem em que os dados são puxados. O ID vem em ordem padrão. Ascendente. Aqui você pode mudar também para ser mandado em ordem alfabetica e etc.... depende do que você quer. No caso da ordem alfabetica você troca do ID por nome(que é a minha coluna da tabela onde tem os nomes);
 
//Reparem na Variaveis abaixo. Old_number é a variavel que o banco de dados vai puxar no Status. Exemplo.: Na tabela newsletter tem a coluna Status e o Status atual dos meus "contatos" é NAO, quando a newsletter eh enviada a ele, o status dele muda para SIM($new_number) isso faz com que um envio de newsletter nao seja enviada 2 ou mais vezes pra mesma pessoa.
 
//Altere tambem o nome da tabela na variavel
 
$tabela = "newsletter";
$old_number = "NAO";
$new_number = "YES";
mysql_select_db($database_Cadastro, $Cadastro);
$query_Recordset1 = "SELECT * FROM '$tabela' WHERE status = '$old_number' ORDER BY id ASC";
$query_limit_Recordset1 = sprintf("%s LIMIT %d, %d", $query_Recordset1, $startRow_Recordset1, $maxRows_Recordset1);
$Recordset1 = mysql_query($query_limit_Recordset1, $Cadastro) or die(mysql_error());
$row_Recordset1 = mysql_fetch_assoc($Recordset1);
 
 
if (isset($_GET['totalRows_Recordset1'])) {
  $totalRows_Recordset1 = $_GET['totalRows_Recordset1'];
} else {
  $all_Recordset1 = mysql_query($query_Recordset1);
  $totalRows_Recordset1 = mysql_num_rows($all_Recordset1);
}
$totalPages_Recordset1 = ceil($totalRows_Recordset1/$maxRows_Recordset1)-1;
 
$queryString_Recordset1 = "";
if (!empty($_SERVER['QUERY_STRING'])) {
  $params = explode("&", $_SERVER['QUERY_STRING']);
  $newParams = array();
  foreach ($params as $param) {
    if (stristr($param, "pageNum_Recordset1") == false && 
        stristr($param, "totalRows_Recordset1") == false) {
      array_push($newParams, $param);
    }
  }
  if (count($newParams) != 0) {
    $queryString_Recordset1 = "&" . htmlentities(implode("&", $newParams));
  }
}
$queryString_Recordset1 = sprintf("&totalRows_Recordset1=%d%s", $totalRows_Recordset1, $queryString_Recordset1);
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html >
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Envio confirmado. Aguarde resposta... </title>
</head>
 
<body>
<p>
 <?php
//Puxa o total de e-mails que Que já foram enviados
mysql_select_db($database_Cadastro, $Cadastro);
$query_Recordset3 = "SELECT * FROM '$tabela' WHERE status = '$new_number' ORDER BY id ASC";
$Recordset3 = mysql_query($query_Recordset3) or die(mysql_error());
$totalRows_Recordset3 = mysql_num_rows($Recordset3);
 
//Faz o calculo de quantos registros foram pegos no banco de dados mias 80 e-mails que sairam agora
$totaldeemailsqueforam = $totalRows_Recordset3 + 80;
 
//Puxa o total de e-mails que faltam sair
mysql_select_db($database_Cadastro, $Cadastro);
$query_Recordset2 = "SELECT * FROM '$tabela' WHERE status = '$old_number' ORDER BY id ASC";
$Recordset2 = mysql_query($query_Recordset2) or die(mysql_error());
$totalRows_Recordset2 = mysql_num_rows($Recordset2);
 
//Faz o calculo de quantos registros foram pegos no banco de dados menos 80 e-mails que sairam agora
$totaldeemailsquefalta = $totalRows_Recordset2 - 80;
 
//Escreve quantos e-mails foram e quantos faltam
 
echo "J&aacute; sairam <b>".$totaldeemailsqueforam."</b> e-mails<br><br>";
 
echo "Faltam <b>".$totaldeemailsquefalta."</b> e-mails para terminar a entrega de todas as Newsletter´s";
 
?>
 
  <?php 
 
 
//Aqui começa o LOOP que vai repetir até chegar ao numero de e-mails que voce configurou ali em cima;
do {
 
 
//Aqui é onde eu puxo os dados da minha tabela;
//Para entendimento geral, $minha variavel= $a varialvel que puxa os dados da tabela['nome da coluna que deseja o dado']; 
$nome=$row_Recordset1['nome'];
$email=$row_Recordset1['email']; 
$id=$row_Recordset1['id'];
 
//Aqui se pega o e-mail para onde vai ser enviado a newsletter
$email_dest = $email;
 
//Aqui temos o corpo do meu e-mail. No caso eu usei HTML
$corpo = '<html>
<head>
<title>Isso é um teste</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body bgcolor="#ffffff" link="#E1DC0B" vlink="#E1DC0B">
<div align="center">
  Esse e-mail é um Teste da Newsletter 1.1 de Rodrigo Tschope. Faça bom proveito!
</body>
</html>';
 
//Dados para envio de e-mail. Segue a ordem dos fatos:
//mail($EMAIL DO DESTINATÁRIO, TITULO DO E-MAIL, MSG DO E-MAIL, REMENTE+CODIFICAÇÃO TEXTHTML + NOTIFICAÇÃO DE LEITURA PARA O E-MAIL QUE DESEJAR.
mail($email_dest, "Titulo do e-mail", $corpo,"From:Rodrigo Tschope<mailto:master@seusitejah.com> rnContent-type: text/html; charset=iso-8859-1rnDisposition-Notification-To: master@seusitejah.com");
 
 // Se o e-mail foi enviado com certeza, ele muda o status para 1.
 if(true){
 
 //conecta ao Banco de dados
@ $db = mysql_pconnect('localhost','LOGIN','SENHA');
 
mysql_select_db('NOME_DO_BANCO');
  $query = "UPDATE '$tabela' SET status = '$new_number' WHERE id = $id LIMIT 1";
 
$result=mysql_query($query);
 //Aparece na tela a imagem de OK com o nome da pessoa que voce enviou e o ID do mesmo;
 echo '<img src="confere.gif" width="20" height="15">E-mail para <b>'.$nome.'</b> foi enviado com sucesso. Id de registro = '.$id.'<br><br>';
 
 }
 else {
 
 //Caso o e-mail nao tenha sido enviado, aparece um botao vermelho de erro, o nome e o ID de quem nao foi!
 echo '<img src="confere.gif" width="20" height="15">E-mail para <b>'.$nome.'</b> foi enviado com sucesso. Id de registro = '.$id.'<br><br>';
}
 
 } while ($row_Recordset1 = mysql_fetch_assoc($Recordset1));
 
//Aqui é onde ele da o brake... Se ainda tiver mais registros para serem puxados ele vai dar esse meta tag ai em baixo com o tempo em segundos!!! No caso eu configurei pra 3700 segundos. Altere se necessario.
if ($pageNum_Recordset1 < $totalPages_Recordset1){ ?>
 
<meta http-equiv="refresh" content="3700" />
 
 
<?php
//Aqui exibe a msg q foi enviada.
echo "<center>O e-mail enviado para todos foi:</center>";
echo "".$corpo."";
 
}
//Caso não tenha mais registros pra uma proxima página de envio ele vai para página sucesso.html 
else { ?>
 
<meta http-equiv="refresh" content="5;URL=sucesso.html" />
<?php
}
 ?>
 
</body>
</html>
<?php
mysql_free_result($Recordset1);
?>