<?
include "./db/conecta.php";

$data = date("d/m/Y");

$sql2 = "SELECT dt_vencimento FROM tb_faturas";
$result2=mysql_query($sql2);
$linha2=mysql_fetch_array($result2);

$data_fatura = $linha2['dt_vencimento'];
$situacao=$linha2['situacao'];

if($data > $data_fatura ) and ($situacao = 'A') ){
    
    
        include ("classe_smtp.php");
    
    /* Configuração da classe.smtp.php */ 
    $host = "smtp.dominio.com.br"; /*host do servidor SMTP */ 
    $smtp = new Smtp($host);
    $smtp->user = "financeiro@dominio.com.br"; /*usuario do servidor SMTP */ 
    $smtp->pass = "xxx"; /* senha dousuario do servidor SMTP*/ 
    $smtp->debug =true; /* ativar a autenticação SMTP*/

    
    //$cod_cliente=$_GET['cod_cliente'];
    //$cod_fatura=$_GET['cod_fatura'];
    
    $sql="Select fa.cod_fatura,fa.cod_cliente,fa.ch_fatura,fa.vlr_fatura,fa.situacao,fa.dt_vencimento,cl.nome,
                cl.logradouro,cl.cidade,cl.uf,cl.bairro,cl.cep,cl.cpf_,cl.email,fa.email_ori
                from tb_faturas fa, tb_clientes cl ";

    $result=mysql_query($sql);
    $linha=mysql_fetch_array($result);
    $cod_cliente = $linha['cod_cliente'];
    $nome = $linha['nome'];
    $cod_fatura=$linha['cod_fatura'];
    $dt_vencimento=$linha['dt_vencimento'];
    $situacao=$linha['situacao'];
    $email=$linha['email'];
    $ch_fatura=$linha['ch_fatura'];
    $email_ori=$linha['email_ori'];
    $valor=$linha['vlr_fatura'];
    
    $sql2="select * from tb_dominios where cod_cliente='$cod_cliente' ";
    $result2=mysql_query($sql2);
    $linha2=mysql_fetch_array($result2);
    $dominio=$linha2['dominio'];
    
    
    $msg="
'TEXTO EM HTML'    
    
    
    ";
      
      /* envia uma mensagem */ 
    $from= "sac@dominio.com.br"; /* seu e-mail */ 
    $to = $email; /* o e-mail cadastrado*/ 
    $subject = "Aviso Cobrança Hospedagem - ( $dominio )"; /* assunto da mensagem */ 
    //$msg = "Você está recebendo esta mensagem de teste<br>";
    //$msg .= "Para confirma clique no link abaixo"; 
    $smtp->Send($to, $from, $subject, $msg);/* faz o envio da mensagem */

      //$sql2="UPDATE tb_faturas SET aviso='S' where cod_cliente='$cod_cliente' and cod_fatura='$cod_fatura'";
    //$result=mysql_query($sql2);
    
    /*$msg='Aviso de Vencimento fatura <? print $cod_fatura; ?>  enviada com sucesso!';*/
         echo "<script> alert(\" Aviso de Vencimento fatura  $cod_fatura enviada com sucesso!\")</script>";
         echo "<meta http-equiv='refresh' content='0;URL=../../main.php?act=./modulos/modCobranca/cob_avisos.php'>";
    
    
    }else{
}
?>

<html>

	<style type="text/css">
div#container
{
   width: 1024px;
   position: relative;
   margin-top: 0px;
   margin-left: auto;
   margin-right: auto;
   text-align: left;
}
body
{
   text-align: center;
   margin: 0;
}	</style>
	<script language="JavaScript" type="text/javascript">
<!--
function ValidateForm3(theForm)
{
if (theForm.Combobox1.selectedIndex < 0)
{
   alert("Selecione o tipo de duplicata !!!");
   theForm.Combobox1.focus();
   return false;
}
if (theForm.Combobox3.selectedIndex < 0)
{
   alert("Please select one of the \"Combobox3\" options.");
   theForm.Combobox3.focus();
   return false;
}
if (theForm.Combobox2.selectedIndex < 0)
{
   alert("Please select one of the \"Combobox2\" options.");
   theForm.Combobox2.focus();
   return false;
}
if (theForm.Combobox4.selectedIndex < 0)
{
   alert("Please select one of the \"Combobox4\" options.");
   theForm.Combobox4.focus();
   return false;
}
var strFilter = /^[0123456789,.]*$/;
var chkVal = theForm.Editbox20.value;
if (!strFilter.test(chkVal))
{
   alert("So numeros !!!");
   theForm.Editbox20.focus();
   return false;
}
var strFilter = /^[0123456789./-]*$/;
var chkVal = theForm.Editbox7.value;
if (!strFilter.test(chkVal))
{
   alert("CNPJ !!! Use o formato: xx.xxx.xxx/xxxx-xx");
   theForm.Editbox7.focus();
   return false;
}
var strFilter = /^[0123456789,.]*$/;
var chkVal = theForm.Editbox15.value;
if (!strFilter.test(chkVal))
{
   alert("Valor Obrigatorio. So use numeros !!!");
   theForm.Editbox15.focus();
   return false;
}
if (theForm.Editbox15.value == "")
{
   alert("Valor Obrigatorio. So use numeros !!!");
   theForm.Editbox15.focus();
   return false;
}
if (theForm.Editbox15.value.length < 1)
{
   alert("Valor Obrigatorio. So use numeros !!!");
   theForm.Editbox15.focus();
   return false;
}
if (theForm.Editbox15.value.length > 14)
{
   alert("Valor Obrigatorio. So use numeros !!!");
   theForm.Editbox15.focus();
   return false;
}
if (theForm.Combobox6.selectedIndex < 0)
{
   alert("Please select one of the \"Combobox6\" options.");
   theForm.Combobox6.focus();
   return false;
}
if (theForm.Combobox7.selectedIndex < 0)
{
   alert("Please select one of the \"Combobox7\" options.");
   theForm.Combobox7.focus();
   return false;
}
if (theForm.Combobox8.selectedIndex < 0)
{
   alert("Please select one of the \"Combobox8\" options.");
   theForm.Combobox8.focus();
   return false;
}
var strFilter = /^[-+]?\d*\.?\d*$/;
var chkVal = theForm.Editbox16.value;
if (!strFilter.test(chkVal))
{
   alert("'Quantidade de duplicatas' O campo obrigatorio. Somente n�meros entre 1 e 99 !!!");
   theForm.Editbox16.focus();
   return false;
}
if (theForm.Editbox16.value == "")
{
   alert("'Quantidade de duplicatas' O campo brigatorio. Somente n�meros entre 1 e 99 !!!");
   theForm.Editbox16.focus();
   return false;
}
if (theForm.Editbox16.value.length < 1)
{
   alert("'Quantidade de duplicatas' O campo obrigatorio. Somente n�meros entre 1 e 99 !!!");
   theForm.Editbox16.focus();
   return false;
}
if (theForm.Editbox16.value.length > 2)
{
   alert("'Quantidade de duplicatas'O campo obrigatorio. Somente n�meros entre 1 e 99 !!!");
   theForm.Editbox16.focus();
   return false;
}
var strValue = theForm.Editbox16.value;
if (strValue != "" && !(strValue >= 1))
{
   alert("'Quantidade de duplicatas' O campo obrigatorio. Somente n�meros entre 1 e 99 !!!");
   theForm.Editbox16.focus();
   return false;
}
var strFilter = /^[0123456789]*$/;
var chkVal = theForm.Editbox26.value;
if (!strFilter.test(chkVal))
{
   alert("'Vencimento a cada'  O campo obrigatorio. Somente n�meros !!!");
   theForm.Editbox26.focus();
   return false;
}
if (theForm.Editbox26.value == "")
{
   alert("'Vencimento a cada'  O campo obrigatorio. Somente n�meros !!!");
   theForm.Editbox26.focus();
   return false;
}
if (theForm.Editbox26.value.length < 1)
{
   alert("'Vencimento a cada'  O campo obrigatorio. Somente n�meros !!!");
   theForm.Editbox26.focus();
   return false;
}
if (theForm.Editbox26.value.length > 3)
{
   alert("'Vencimento a cada'  � campo obrigatorio. Somente n�meros !!!");
   theForm.Editbox26.focus();
   return false;
}
return true;
}
//-->
</script>

<! txt_3 -->

<script language="JavaScript" type="text/javascript">
<!--
function popupwnd(url, toolbar, menubar, locationbar, resize, scrollbars, statusbar, left, top, width, height)
{
   var popupwindow = this.open(url, '', 'toolbar=' + toolbar + ',menubar=' + menubar + ',location=' + locationbar + ',scrollbars=' + scrollbars + ',resizable=' + resize + ',status=' + statusbar + ',left=' + left + ',top=' + top + ',width=' + width + ',height=' + height);
}
//-->
</script><script language="JavaScript" type="text/javascript">
<!--
function SlideImage(id, duration, direction, width)
{
   var millisec = Math.round(duration / 100);
   var timer = 0;
   if (direction == 0)
   {
      for(i = width; i >= 0; i--)
      {
         setTimeout("SetPosition('" + id + "'," + i + ")",(timer * millisec));
         timer++;
      }
   }
   else
   {
      for(i = -width; i <= 0; i++)
      {
         setTimeout("SetPosition('" + id + "'," + i + ")",(timer * millisec));
         timer++;
      }
   }
}
function SetPosition(id, pos)
{
   var element = document.getElementById(id).style;
   element.left = pos;
}
//-->
</script></p>
<div id="container">
	<div align="left" id="wb_Form1" style="position:absolute;left:0px;top:286px;width:789px;height:888px;z-index:102;">
		<form action="http://www.controlenanet.com.br/duplicata/calcula_duplicata.php" enctype="multipart/form-data" id="Form1" method="post" name="Form3" onsubmit="return ValidateForm3(this)">
			<div align="left" id="wb_Image2" style="position:absolute;left:2px;top:266px;width:772px;height:583px;z-index:0;">
				<img align="top" alt="" border="0" id="Image2" src="images/duplicata-gif.gif" style="width:772px;height:583px;" /></div>
			<div align="center" id="wb_Shape12" style="position:absolute;left:3px;top:19px;width:483px;height:132px;z-index:1;">
				<img align="top" alt="" border="0" height="132" id="Shape12" src="images/img0001.png" title="" width="483" /></div>

			<select id="Combobox1" name="tipo_duplicata" size="1" style="position:absolute;left:341px;top:725px;width:191px;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:2" tabindex="33" title="Selecione o tipo da duplicata.">

<option selected="selected" value="RURAL">RURAL</option>
<option selected="selected" value="de PRESTACAO DE SERVICOS">de PRESTACAO DE SERVICOS</option>
<option selected="selected" value="de VENDA MERCANTIL">de VENDA MERCANTIL</option><option selected="selected" value="VENDA MERCANTIL">VENDA MERCANTIL</option></select>


			<div align="left" id="wb_Text16" style="position:absolute;left:119px;top:729px;width:238px;height:14px;z-index:3;">
				<font color="#000000" face="Arial" style="font-size:11px">Reconher (emos) a exatidao desta Duplicata </font></div>
			<div align="left" id="wb_Text20" style="position:absolute;left:498px;top:387px;width:87px;height:14px;z-index:4;">
				<font color="#000000" face="Arial" style="font-size:11px">Data da Emissao:</font></div>
			<select id="Combobox3" name="dia_emissao" size="1" style="position:absolute;left:580px;top:382px;width:39px;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:5" tabindex="16" title="Selecione o dia da emiss�o."><option selected="selected">01</option><option selected="selected">02</option><option selected="selected">03</option><option selected="selected">04</option><option selected="selected">05</option><option selected="selected">06</option><option selected="selected">07</option><option selected="selected">08</option><option selected="selected">09</option><option selected="selected">10</option><option selected="selected">11</option><option selected="selected">12</option><option selected="selected">13</option><option selected="selected">14</option><option selected="selected">15</option><option selected="selected">16</option><option selected="selected">17</option><option selected="selected">18</option><option selected="selected">19</option><option selected="selected">20</option><option selected="selected">21</option><option selected="selected">22</option><option selected="selected">23</option><option selected="selected">24</option><option selected="selected">25</option><option selected="selected">26</option><option selected="selected">27</option><option selected="selected">28</option><option selected="selected">29</option><option selected="selected">30</option><option selected="selected">31</option><option selected="selected" value="02">02</option></select> <select id="Combobox2" name="mes_emissao" size="1" style="position:absolute;left:618px;top:382px;width:87px;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:6" tabindex="17" title="Selecione o m�s da emiss�o.">
<option selected="selected" value="01">Janeiro</option>
<option selected="selected" value="02">Fevereiro</option>
<option selected="selected" value="03">Marco</option>
<option selected="selected" value="04">Abril</option>
<option selected="selected" value="05">Maio</option>
<option selected="selected" value="06">Junho</option>
<option selected="selected" value="07">Julho</option>
<option selected="selected" value="08">Agosto</option>
<option selected="selected" value="09">Setembro</option>
<option selected="selected" value="10">Outubro</option>
<option selected="selected" value="11">Novembro</option>
<option selected="selected" value="12">Dezembro</option>
<option selected="selected" value="03"> </option></select>

 <select id="Combobox4" name="ano_emissao" size="1" style="position:absolute;left:704px;top:382px;width:53px;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:7" tabindex="18" title="Selecione o ano da emiss�o."><option selected="selected">2007</option><option selected="selected">2008</option><option selected="selected">2009</option><option selected="selected">2010</option><option selected="selected">2011</option><option selected="selected">2012</option><option selected="selected">2013</option><option selected="selected">2014</option><option selected="selected">2015</option><option selected="selected">2016</option><option selected="selected">2017</option><option selected="selected">2018</option><option selected="selected">2019</option><option selected="selected">2020</option><option selected="selected">2021</option><option selected="selected">2022</option><option selected="selected">2023</option><option selected="selected">2024</option><option selected="selected">2025</option><option selected="selected">2026</option><option selected="selected">2027</option><option selected="selected">2028</option><option selected="selected">2029</option><option selected="selected">2030</option><option selected="selected" value="2016">2016</option></select>

			<div align="left" id="wb_Text24" style="position:absolute;left:125px;top:440px;width:90px;height:14px;z-index:8;">
				<font color="#000000" face="Arial" style="font-size:11px">NF - FATURA No</font></div>
			<div align="left" id="wb_Text25" style="position:absolute;left:244px;top:434px;width:110px;height:14px;z-index:9;">
				<font color="#000000" face="Arial" style="font-size:11px">NF- FAT/DUPLICATA</font></div>
			<div align="left" id="wb_Text26" style="position:absolute;left:514px;top:440px;width:71px;height:14px;z-index:10;">
				<font color="#000000" face="Arial" style="font-size:11px">VENCIMENTO</font></div>
			<input id="Editbox18" maxlength="11" name="num_fatura" style="position:absolute;left:123px;top:469px;width:89px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:11" tabindex="19" title="Digite o n�mero da nf/fatura." type="text" value="" />
			<div align="left" id="wb_Text27" style="position:absolute;left:271px;top:447px;width:56px;height:14px;z-index:12;">
				<font color="#000000" face="Arial" style="font-size:11px">Valor R$</font></div>
			<div align="left" id="wb_Text28" style="position:absolute;left:401px;top:434px;width:69px;height:14px;z-index:13;">
				<font color="#000000" face="Arial" style="font-size:11px">DUPLICATA</font></div>
			<div align="left" id="wb_Text29" style="position:absolute;left:394px;top:447px;width:84px;height:14px;z-index:14;">
				<font color="#000000" face="Arial" style="font-size:11px">No. de ORDEM</font></div>
			<div align="left" id="wb_Text30" style="position:absolute;left:121px;top:498px;width:87px;height:14px;z-index:15;">
				<font color="#000000" face="Arial" style="font-size:11px">DESCONTO DE</font></div>
			<input id="Editbox19" maxlength="7" name="desconto" style="position:absolute;left:212px;top:494px;width:61px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:16" tabindex="20" type="text" value="" />
			<div align="left" id="wb_Text31" style="position:absolute;left:275px;top:498px;width:70px;height:14px;z-index:17;">
				<font color="#000000" face="Arial" style="font-size:11px">% SOBRE R$</font></div>
			<input id="Editbox20" maxlength="14" name="sobre" onkeypress="MascaraMoeda(this,'.',',',event);return false;" style="position:absolute;left:347px;top:494px;width:133px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:18" tabindex="21" type="text" value="" />
			<div align="left" id="wb_Text32" style="position:absolute;left:487px;top:498px;width:24px;height:14px;z-index:19;">
				<font color="#000000" face="Arial" style="font-size:11px">ATE</font></div>
			<input id="Editbox22" maxlength="12" name="ate" style="position:absolute;left:517px;top:494px;width:87px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:20" tabindex="22" type="text" value="" />
			<div align="left" id="wb_Text33" style="position:absolute;left:120px;top:520px;width:136px;height:14px;z-index:21;">
				<font color="#000000" face="Arial" style="font-size:11px">CONDICOES ESPECIAIS</font></div>
			<input id="Editbox21" maxlength="50" name="condicoes_especiais" style="position:absolute;left:244px;top:515px;width:360px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:22" tabindex="23" type="text" value="" /> <input id="Editbox5" maxlength="54" name="praca_pagamento" style="position:absolute;left:213px;top:609px;width:387px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:23" tabindex="28" title="Digite a pra�a de pagamento do sacado." type="text" value="" /> <input id="Editbox2" maxlength="70" name="endereco" style="position:absolute;left:213px;top:565px;width:530px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:24" tabindex="25" title="Digite o endereco do sacado." type="text" value="" /> <input id="Editbox1" maxlength="70" name="sacado" style="position:absolute;left:213px;top:543px;width:530px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:25" tabindex="24" title="Digite o nome do sacado." type="text" value="" /> <input id="Editbox3" maxlength="54" name="municipio" style="position:absolute;left:213px;top:587px;width:385px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:26" tabindex="26" title="Digite o municipio do sacado." type="text" value="" />
			<div align="left" id="wb_Text13" style="position:absolute;left:606px;top:613px;width:40px;height:14px;z-index:27;">
				<font color="#000000" face="Arial" style="font-size:11px">Estado:</font></div>
			<input id="Editbox4" maxlength="2" name="estado" style="position:absolute;left:647px;top:610px;width:33px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:28" tabindex="29" title="Digite o estado do sacado." type="text" value="" />
			<div align="left" id="wb_Text12" style="position:absolute;left:610px;top:589px;width:33px;height:14px;z-index:29;">
				<font color="#000000" face="Arial" style="font-size:11px">CEP:</font></div>
			<input id="Editbox6" maxlength="9" name="cep" style="position:absolute;left:646px;top:586px;width:69px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:30" tabindex="27" title="Digite o cep do endereco do sacado." type="text" value="" /> <input id="Editbox8" maxlength="40" name="ie" style="position:absolute;left:453px;top:652px;width:290px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:31" tabindex="32" title="Digite a inscri��o estadual do sacado." type="text" value="" />
			<div align="left" id="wb_Text14" style="position:absolute;left:405px;top:655px;width:47px;height:14px;z-index:32;">
				<font color="#000000" face="Arial" style="font-size:11px">Insc.Est:</font></div>
			<input id="Editbox7" maxlength="18" name="cnpj" style="position:absolute;left:212px;top:653px;width:133px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:33" tabindex="31" title="Digite o cnpj do sacado." type="text" value="" />
			<div align="left" id="wb_Text10" style="position:absolute;left:123px;top:634px;width:83px;height:14px;z-index:34;">
				<font color="#000000" face="Arial" style="font-size:11px">End. Cobranca:</font></div>
			<div align="left" id="wb_Text8" style="position:absolute;left:122px;top:590px;width:98px;height:14px;z-index:35;">
				<font color="#000000" face="Arial" style="font-size:11px">Municipio:</font></div>
			<div align="left" id="wb_Text9" style="position:absolute;left:122px;top:612px;width:108px;height:14px;z-index:36;">
				<font color="#000000" face="Arial" style="font-size:11px">Praca de Pagto:</font></div>
			<div align="left" id="wb_Text6" style="position:absolute;left:123px;top:568px;width:91px;height:14px;z-index:37;">
				<font color="#000000" face="Arial" style="font-size:11px">Endereco:</font></div>
			<div align="left" id="wb_Text7" style="position:absolute;left:122px;top:546px;width:89px;height:14px;z-index:38;">
				<font color="#000000" face="Arial" style="font-size:11px">Nome do Sacado:</font></div>
			<div align="left" id="wb_Text11" style="position:absolute;left:124px;top:656px;width:85px;height:14px;z-index:39;">
				<font color="#000000" face="Arial" style="font-size:11px">CNPJ/CPF:</font></div>
			<input id="Editbox23" maxlength="70" name="endereco_cobranca" style="position:absolute;left:213px;top:631px;width:530px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:40" tabindex="30" title="Digite o endereco de cobran�a do sacado." type="text" value="" />
			<div align="center" id="wb_Text17" style="position:absolute;left:127px;top:687px;width:68px;height:28px;z-index:41;">
				<font color="#000000" face="Arial" style="font-size:11px">VALOR POR EXTENSSO</font></div>
			<div align="center" id="wb_Text34" style="position:absolute;left:368px;top:806px;width:392px;height:28px;z-index:42;">
				<font color="#000000" face="Arial" style="font-size:11px">__________________________________________________________<br />
				Assinatura do Sacado</font></div>
			<div align="left" id="wb_Text35" style="position:absolute;left:120px;top:806px;width:160px;height:28px;z-index:43;">
				<font color="#000000" face="Arial" style="font-size:11px">Em _____/_____/__________</font><br />
				<font color="#000000" face="Arial" style="font-size:11px">Data do Aceite</font></div>
			<input id="Editbox24" maxlength="41" name="nome_empresa" style="position:absolute;left:28px;top:291px;width:454px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-weight:bold;font-size:19px;z-index:44" tabindex="8" title="Digite o nome da empresa." type="text" value="" /> <input id="Editbox9" maxlength="64" name="endereco_empresa" style="position:absolute;left:28px;top:328px;width:454px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:45" tabindex="9" title="Digite o endereco da empresa.." type="text" value="" /> <input id="Editbox10" maxlength="57" name="municipio_empresa" style="position:absolute;left:29px;top:358px;width:403px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:46" tabindex="10" title="Digite o munic�pio da empresa.." type="text" value="" /> <input id="Editbox25" maxlength="47" name="telefone_empresa" style="position:absolute;left:118px;top:387px;width:363px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:47" tabindex="13" title="Digite o telefone da empresa." type="text" value="" /> <input id="Editbox11" maxlength="9" name="cep_empresa" style="position:absolute;left:29px;top:387px;width:69px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:48" tabindex="12" title="Digite o CEP do endereco da empresa." type="text" value="" /> <input id="Editbox14" maxlength="2" name="estado_empresa" style="position:absolute;left:444px;top:359px;width:38px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:49" tabindex="11" title="Digite o estado da empresa." type="text" value="" /> <input id="Editbox12" maxlength="18" name="cnpj_empresa" style="position:absolute;left:504px;top:302px;width:133px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:50" tabindex="14" title="Digite o cnpj da empresa." type="text" value="" /> <input id="Editbox13" maxlength="18" name="ie_empresa" style="position:absolute;left:505px;top:341px;width:132px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:51" tabindex="15" title="Digite a inscri��o estadual da empresa." type="text" value="" />
			<div align="left" id="wb_Text15" style="position:absolute;left:505px;top:291px;width:31px;height:28px;z-index:52;">
				<font color="#000000" face="Arial" style="font-size:11px">CNPJ:</font></div>
			<div align="left" id="wb_Text22" style="position:absolute;left:505px;top:329px;width:47px;height:14px;z-index:53;">
				<font color="#000000" face="Arial" style="font-size:11px">Insc.Est:</font></div>
			<div align="left" id="wb_Text18" style="position:absolute;left:533px;top:729px;width:217px;height:14px;z-index:54;">
				<font color="#000000" face="Arial" style="font-size:11px">na importancia acima que pagar(ei)(emos) a</font></div>
			<div align="left" id="wb_Text19" style="position:absolute;left:119px;top:737px;width:629px;height:28px;z-index:55;">
				<font color="#000000" face="Arial" style="font-size:11px">,_______________________________________________________________________________________________________ ,&nbsp; ou a sua ordem na pra�a e vencimentos acima indicados.</font></div>
			<div align="left" id="wb_Text23" style="position:absolute;left:29px;top:375px;width:33px;height:14px;z-index:56;">
				<font color="#000000" face="Arial" style="font-size:11px">CEP:</font></div>
			<div align="left" id="wb_Text36" style="position:absolute;left:29px;top:346px;width:98px;height:14px;z-index:57;">
				<font color="#000000" face="Arial" style="font-size:11px">Municipio:</font></div>
			<div align="left" id="wb_Text37" style="position:absolute;left:28px;top:316px;width:91px;height:14px;z-index:58;">
				<font color="#000000" face="Arial" style="font-size:11px">Endereco:</font></div>
			<div align="left" id="wb_Text38" style="position:absolute;left:118px;top:375px;width:91px;height:14px;z-index:59;">
				<font color="#000000" face="Arial" style="font-size:11px">Tel:</font></div>
			<div align="left" id="wb_Text39" style="position:absolute;left:444px;top:347px;width:40px;height:14px;z-index:60;">
				<font color="#000000" face="Arial" style="font-size:11px">Estado:</font></div>
			<div align="left" id="wb_Text40" style="position:absolute;left:29px;top:279px;width:89px;height:14px;z-index:61;">
				<font color="#000000" face="Arial" style="font-size:11px">Nome:</font></div>
			<input id="Button2" name="Button2" style="position:absolute;left:127px;top:862px;width:167px;height:25px;border:1px #247BDB solid;background-color:#247BDB;color:#FFFFFF;font-family:Arial;font-weight:bold;font-size:13px;z-index:62" tabindex="34" type="submit" value="GERAR DUPLICATAS" /> <input id="Editbox15" maxlength="14" name="valor_total" onkeypress="MascaraMoeda(this,'.',',',event);return false;" style="position:absolute;left:158px;top:37px;width:133px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:63" tabindex="1" title="Digite o valor total da fatura." type="text" value="0,00" /> <input id="Editbox17" maxlength="11" name="num_ordem" style="position:absolute;left:95px;top:60px;width:94px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:64" tabindex="2" title="Digite o no. de ordem." type="text" value="" />
			<div align="left" id="wb_Text41" style="position:absolute;left:10px;top:39px;width:153px;height:14px;z-index:65;">
				<font color="#000000" face="Arial" style="font-size:11px">Valor total das duplicatas: R$</font></div>
			<div align="left" id="wb_Text42" style="position:absolute;left:10px;top:63px;width:84px;height:14px;z-index:66;">
				<font color="#000000" face="Arial" style="font-size:11px">No. de ORDEM </font></div>
			<select id="Combobox6" name="dia_inicial" size="1" style="position:absolute;left:236px;top:107px;width:39px;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:67" tabindex="5">
<option selected="selected">01</option>
<option selected="selected">02</option>
<option selected="selected">03</option>
<option selected="selected">04</option>
<option selected="selected">05</option>
<option selected="selected">06</option>
<option selected="selected">07</option>
<option selected="selected">08</option>
<option selected="selected">09</option>
<option selected="selected">10</option>
<option selected="selected">11</option>
<option selected="selected">12</option>
<option selected="selected">13</option>
<option selected="selected">14</option>
<option selected="selected">15</option>
<option selected="selected">16</option>
<option selected="selected">17</option>
<option selected="selected">18</option>
<option selected="selected">19</option>
<option selected="selected">20</option>
<option selected="selected">21</option>
<option selected="selected">22</option>
<option selected="selected">23</option>
<option selected="selected">24</option>
<option selected="selected">25</option>
<option selected="selected">26</option>
<option selected="selected">27</option>
<option selected="selected">28</option>
<option selected="selected">29</option>
<option selected="selected">30</option>
<option selected="selected">31</option>
<option selected="selected" value="02"> </option>
</select> 

<select id="Combobox7" name="mes_inicial" size="1" style="position:absolute;left:274px;top:107px;width:87px;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:68" tabindex="6">
<! ------------------------------------------------ ( 12 meses ) --->
<option selected="selected" value="01">Janeiro</option>
<option selected="selected" value="02">Fevereiro</option>
<option selected="selected" value="03">Marco</option>
<option selected="selected" value="04">Abril</option>
<option selected="selected" value="05">Maio</option>
<option selected="selected" value="06">Junho</option>
<option selected="selected" value="07">Julho</option>
<option selected="selected" value="08">Agosto</option>
<option selected="selected" value="09">Setembro</option>
<option selected="selected" value="10">Outubro</option>
<option selected="selected" value="11">Novembro</option>
<option selected="selected" value="12">Dezembro</option>

<option selected="selected" value="03"> </option></select> 

<select id="Combobox8" name="ano_inicial" size="1" style="position:absolute;left:360px;top:107px;width:55px;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:69" tabindex="7">

<option selected="selected">2007</option>
<option selected="selected">2008</option>
<option selected="selected">2009</option>
<option selected="selected">2010</option>
<option selected="selected">2011</option>
<option selected="selected">2012</option>
<option selected="selected">2013</option>
<option selected="selected">2014</option>
<option selected="selected">2015</option>
<option selected="selected">2016</option>
<option selected="selected">2017</option>
<option selected="selected">2018</option>
<option selected="selected">2019</option>
<option selected="selected">2020</option>
<option selected="selected">2021</option>
<option selected="selected">2022</option>
<option selected="selected">2023</option>
<option selected="selected">2024</option>
<option selected="selected">2025</option>
<option selected="selected">2026</option>
<option selected="selected">2027</option>
<option selected="selected">2028</option>
<option selected="selected">2029</option>
<option selected="selected">2030</option>

<option selected="selected" value="2016"> </option></select> <input id="Editbox16" maxlength="2" name="num_parcelas" style="position:absolute;left:137px;top:84px;width:34px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:70" tabindex="3" title="Digite a quantidade de parcelas." type="text" value="" />

			<div align="left" id="wb_Text43" style="position:absolute;left:10px;top:87px;width:128px;height:14px;z-index:71;">
				<font color="#000000" face="Arial" style="font-size:11px">Quantidade de duplicatas</font></div>
			<div align="left" id="wb_Text44" style="position:absolute;left:11px;top:111px;width:100px;height:14px;z-index:72;">
				<font color="#000000" face="Arial" style="font-size:11px">Vencimento a cada </font></div>
			<input id="Editbox26" maxlength="3" name="num_dias" style="position:absolute;left:113px;top:109px;width:34px;border:1px #000000 solid;background-color:#E6E6FA;font-family:Courier New;font-size:12px;z-index:73" tabindex="4" type="text" value="" />
			<div align="left" id="wb_Text45" style="position:absolute;left:154px;top:111px;width:80px;height:14px;z-index:74;">
				<font color="#000000" face="Arial" style="font-size:11px">dias, a partir de </font></div>
			<div align="left" id="wb_Text46" style="position:absolute;left:193px;top:63px;width:264px;height:14px;z-index:75;">
				<font color="#000000" face="Arial" style="font-size:11px">( Deixe em branco para utilizar o n�mero da fatura )</font></div>
			<div align="left" id="wb_Text47" style="position:absolute;left:12px;top:162px;width:470px;height:95px;z-index:76;">
				<font color="#000000" face="Times New Roman" style="font-size:16px">Para impressao com datas e valores diversos:<br />
				Colque o n�mero 1(um) no campo &#39;Quantidade de duplicatas&#39; e o n�mero 0(zero)&nbsp; no campo &#39;Vencimento a cada&#39;.<br />
				No campo que cont�m a data, coloque o dia, m�s e ano de vencimento da duplicata.&nbsp; Gere e imprima uma duplicata de cada vez.</font></div>
			<div align="left" id="wb_Image1" style="position:absolute;left:430px;top:865px;width:20px;height:20px;z-index:77;">
				<a href="javascript:popupwnd('duplicata_legis.html','no','no','no','no','no','no','','','820','720')" target="_self"><img align="top" alt="" border="0" id="Image1" src="images/wwb_img9.jpg" style="width:20px;height:20px;" title="Ajuda" /></a></div>
			<div align="justify" id="wb_Text4" style="position:absolute;left:453px;top:867px;width:71px;height:17px;z-index:78;">
				<font color="#000000" face="Times New Roman" style="font-size:15px">Legisla��o</font></div>
			<div align="center" id="wb_Shape13" style="position:absolute;left:423px;top:864px;width:100px;height:24px;opacity:0.00;-moz-opacity:0.00;-khtml-opacity:0.00;filter:alpha(opacity=0);z-index:79;">
				<a href="javascript:popupwnd('duplicata_legis.html','no','no','no','no','no','no','','','820','720')" target="_self"><img align="top" alt="" border="0" height="24" id="Shape13" src="images/img0600.gif" title="" width="100" /></a></div>
			<div align="left" id="wb_Text48" style="position:absolute;left:655px;top:316px;width:103px;height:19px;z-index:80;">
				<font color="#000000" face="Arial" style="font-size:16px"><b>DUPLICATA</b></font></div>
			<div align="center" id="wb_Text21" style="position:absolute;left:614px;top:433px;width:147px;height:28px;z-index:81;">
				<font color="#000000" face="Arial" style="font-size:11px">PARA USO DA<br />
				INSTITUI��O FINANCEIRA</font></div>
			<div align="left" id="wb_SlideShow2" style="position:absolute;left:520px;top:8px;width:250px;height:250px;z-index:82;overflow:hidden">


<! txt_1 -->

<a href="#" onclick="onSlideShow2Click();return false;"><img align="top" alt="" border="0" height="250" id="SlideShow2" name="SlideShow2" src="images/100_EMAILS_COMERCIAIS_250X250.png" width="250" /> </a> <script language="JavaScript" type="text/javascript">
<!--
  SlideShow2ShowNext();
// -->
</script></div>
		</form>
	</div>
	<div align="justify" id="wb_Text5" style="position:absolute;left:0px;top:255px;width:794px;height:16px;z-index:103;">
		<font color="#000000" face="Arial" style="font-size:13px">Para usar o programa, preencha os dados abaixo e clique no bot�o <i>GERAR DUPLICATA</i>. Sua duplicata agora, pode ser impressa.</font></div>
	<!-- MascaraMoeda.js -->
	<div id="Html2" style="position:absolute;left:1049px;top:99px;width:100px;height:52px;z-index:104">
		<script language="javascript">
//-----------------------------------------------------
//Funcao: MascaraMoeda
//Sinopse: Mascara de preenchimento de moeda
//Parametro:
//   objTextBox : Objeto (TextBox)
//   SeparadorMilesimo : Caracter separador de mil�simos
//   SeparadorDecimal : Caracter separador de decimais
//   e : Evento
//Retorno: Booleano

function MascaraMoeda(objTextBox, SeparadorMilesimo, SeparadorDecimal, e){
    var sep = 0;
    var key = '';
    var i = j = 0; 
    var len = 0;
    var len2 = 0;
    var strCheck = '0123456789';
    var aux = aux2 = '';
    var whichCode = (window.Event) ? e.which : e.keyCode;

    if ((whichCode == 13) || (whichCode == 0) || (whichCode == 8))
    	return true;
    if ((objTextBox.value.length >= objTextBox.maxLength) && (whichCode != 13) && (whichCode != 8)) whichCode = 1;

    key = String.fromCharCode(whichCode); // Valor para o c�digo da Chave
    if (strCheck.indexOf(key) == -1) return false; // Chave inv�lida
    len = objTextBox.value.length;

    for(i = 0; i < len; i++)
        if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != SeparadorDecimal)) break;
    aux = '';
    for(; i < len; i++)
        if (strCheck.indexOf(objTextBox.value.charAt(i))!=-1) aux += objTextBox.value.charAt(i);
    aux += key;
    len = aux.length;
    if (len == 0) objTextBox.value = '';
    if (len == 1) objTextBox.value = '0'+ SeparadorDecimal + '0' + aux;
    if (len == 2) objTextBox.value = '0'+ SeparadorDecimal + aux;
    if (len > 2) {
        aux2 = '';
        for (j = 0, i = len - 3; i >= 0; i--) {
            if (j == 3) {
                aux2 += SeparadorMilesimo;
                j = 0;
            }
            aux2 += aux.charAt(i);
            j++;
        }
        objTextBox.value = '';
        len2 = aux2.length;
        for (i = len2 - 1; i >= 0; i--)
        objTextBox.value += aux2.charAt(i);
        objTextBox.value += SeparadorDecimal + aux.substr(len - 2, len);
    }
    return false;
}
</script></div>
	<div align="left" id="wb_Form3" style="position:absolute;left:6px;top:1135px;width:101px;height:59px;z-index:105;">
		<form action="http://www.controlenanet.com.br/portal/index1.php" enctype="multipart/form-data" id="Form3" method="post" name="sair_promissoria">
			<input id="Button1" name="Button3" style="position:absolute;left:2px;top:9px;width:96px;height:25px;border:1px #247BDB solid;background-color:#247BDB;color:#FFFFFF;font-family:Arial;font-weight:bold;font-size:13px;z-index:83" type="submit" value="SAIR" />&nbsp;</form>
	</div>
	<div align="left" id="wb_MasterPage2" style="position:absolute;left:0px;top:0px;width:1038px;height:251px;z-index:106;">
		<div align="center" id="wb_Shape2" style="position:absolute;left:4px;top:63px;width:1021px;height:102px;z-index:84;">
			&nbsp;</div>
	</div>
	<div align="left" id="wb_Text2" style="position:absolute;left:0px;top:52px;width:662px;height:16px;z-index:110;">
		&nbsp;</div>
	<div align="left" id="wb_Text3" style="position:absolute;left:1px;top:274px;width:662px;height:16px;z-index:111;">
		<font color="#2A54C1" face="Arial" style="font-size:13px"><b><font color="#FFFFFF" face="Arial" style="font-size:13px;background-color:#247BDB">Usu�rio sem cadastro </font> - <a href="logduplicata.html">(cadastrar email e dados da duplicata)</a></b></font></div>
	<!-- 200x760 ou 160x600 -->
	<div id="Html3" style="position:absolute;left:849px;top:853px;width:160px;height:600px;z-index:112">
		<script type="text/javascript">
<!--
descrColor="000000";titleColor="0000FF";urlColor="008000";borderColor="FFFFFF";bgColor="FFFFFF";altColor="FFFFFF";coddisplaysupplier="c52b4cdf18f14d9c86129d23e55fab16";formatId="6";numads="5";deslabel="vertical 160x600";type="1";
-->
</script><script type="text/javascript" src="../../adrequisitor-af.lp.uol.com.br/uolaf.js"></script></div>
	<!-- data de vencimento-c=5d785d01fd2a963784b63ea7ba2e5fee -->
	<div id="Html5" style="position:absolute;left:0px;top:1186px;width:300px;height:300px;z-index:113">
		&nbsp;</div>
	<!-- boleto vencido- c=20a5cbe2d77398053694cfd8022fd96a -->
	<div id="Html6" style="position:absolute;left:307px;top:1186px;width:300px;height:300px;z-index:114">
		&nbsp;</div>
	<div align="left" id="wb_SlideShow1" style="position:absolute;left:620px;top:1197px;width:147px;height:277px;z-index:115;overflow:hidden">



<! txt_2 -->


	<div align="left" id="wb_Form2" style="position:absolute;left:583px;top:1131px;width:215px;height:41px;z-index:116;">
		<form action="http://www.controlenanet.com.br/free.html" enctype="multipart/form-data" id="Form2" method="post" name="LoginForm">
			<input id="Button3" name="Button2" style="position:absolute;left:8px;top:13px;width:177px;height:25px;border:1px #247BDB solid;background-color:#247BDB;color:#FFFFFF;font-family:Arial;font-weight:bold;font-size:13px;z-index:101" tabindex="17" type="submit" value="VEJA MAIS... GR�TIS" />&nbsp;</form>
	</div>
</div>
<br>
</html>