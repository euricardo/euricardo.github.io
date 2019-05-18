<?php

# Pegar título de um site com cURL
# URL do site que se quer pegar informações
$site_url = "eubrasil.xyz"; 

 
 $ch = curl_init();
 curl_setopt ($ch, CURLOPT_URL, $site_url);
 curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, 5);
ob_start();
 curl_exec($ch); 
 curl_close($ch);
 $file_contents = ob_get_contents();
ob_end_clean();
       
 if (preg_match('/<title>([^<]++)/', $file_contents, $matches) == FALSE)
 $erro = "Erro ao resgatar o titulo do site"; // se der algum erro
       
 echo $matches[1];
?>