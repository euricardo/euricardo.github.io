<?php

# Construir as variáveis desta rotina em PHP
# Constante nunca altera o seu valor ( sem $ )
#--------------------------------
define( 'TLD', '.cf/signup.php' );
#--------------------------------
$sobrenome = $_GET['sobrenome'];
$username   = $_GET['username'];
$email         = $_GET['email'];
#--------------------------------

$dados = '?' . 'username=' . $username . '&' . 'password=' . $username . 's' . '&' . 'email=' . $email ; 

$url = "http://" . $sobrenome . TLD . $dados ;


echo $url ."<br>" ;

echo $GLOBALS["_SERVER"]["HTTP_HOST"] . "<br>";

echo("Www. " . $_GET['sobrenome']);


#Variáveis enviadas por script para o servidor via método HTTP GET. O que é enviado pelo formulário é mostrado na barra de endereço.

#Variáveis enviadas por script para o servidor via método HTTP POST. O que é enviado pelo formulário não é mostrado na barra de #endereço do navegador.

#Variáveis enviadas por script para o servidor via cookies HTTP.

#Variáveis enviadas para o script com todas as informações relativas aos arquivos enviados via HTTP.

#Variáveis disponíveis no script do ambiente em execução. Em Web é igual ao $_SERVER.

#Possui todas as variáveis englobadas em $_GET, $_POST e $_COOKIE. Em desuso devido à demora na realização do script!

#Variáveis que estão diretamente relacionadas no registro da sessão no script.

# Lista de constantes mágicas

# LINE ( linha atual do script )
# FILE ( caminho completo e nome do arquivo )
# DIR ( diretório do arquivo )
# FUNCTION ( nome da função )
# CLASS ( nome da classe )
# METHOD ( nome do método de classe )
# NAMESPACE ( nome do atual namespace )

?>




<html>
<br>
<a href="http://henrique.ecpf.xyz/duplicata"> <img src="http://eubrasil.xyz/Mynome/img/duplicata_icone.png" /> </a>
<br>
<iframe 
 frameborder="1" 
         height="100"
          width="165" 
       scrolling="no" 
              src=<?php echo $url ; ?> >
</iframe>

</html>