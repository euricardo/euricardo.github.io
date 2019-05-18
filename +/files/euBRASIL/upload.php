<html>
<head>
<title>UPLOAD</title>
<style type="text/css">
<!--
body {
        background-color: #FFF;
}
-->
</style></head>
 
<body>
<?php
 
if (isset($arquivo))
{
$nome = rand(00,9999);
$dir="http://ricardo.ecpf.xyz/+/files/";
 
if (is_uploaded_file($arquivo))
{ move_uploaded_file($arquivo,$dir.$nome.$arquivo_name);
 echo "Enviado com sucesso.";
}else{
 echo "Erro ao tentar enviar arquivo.";
}
}
 
?>
</body>
</html>