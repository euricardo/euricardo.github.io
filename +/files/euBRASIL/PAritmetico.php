<html>
<head>
<title>Calculando P.A.</title>
</head>
<body>
<form action = "" method = "post"><br/>
<label>Entre com o Número de Termos da P.A:  </label>
<input type="text" name ="termos" size="3" /><br/>
<label>Entre com o Primeiro Termos da P.A: </label>
<input type="text" name="primeiro" size="3"><br/>
<label>Entre com a Razão da P.A: </label>
<input type="text" name = "razao" size="3"><br/>
<input type="submit" name = "Enviar" value = "enviar"><br/><br/>
</form>
<?php 
     function pa($n, $p, $r)
	 {
	    if ($n >= 1)
		    {
			echo "PA: ";
			$soma = $p;
			echo $soma;
			for ($i=1; $i<=$n-1; $i++)
			   {
			   $soma = ($soma+$r);
			   echo ","."$soma";
			   }
			echo"<br/>";
			}
		else
            echo"Erro: Número de termos da PA menor que 1";		
	 }
$n = $_POST['termos'];
$p = $_POST['primeiro'];
$r = $_POST['razao'];
pa($n,$p,$r);	 
?>
</body>
</html>