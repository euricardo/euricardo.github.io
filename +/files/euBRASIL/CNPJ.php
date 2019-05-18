<?php

/** 
 * Nesta função iremos baixar a imagem do captcha
 *
 * Parametro $url: 
 *   Coloque a url que o captcha usa para reproduzir a imagem
 * Parametro $arquivo: 
 *   Coloque o arquivo para salvar a imagem. 
 *   IMPORTANTE que o arquivo já exista e tenha permissão CHMOD 777
 */
function recebe_imagem($url, $arquivo) {
  $cookie = $_SERVER['DOCUMENT_ROOT'].'/rand/receita.txt'; //Importantissimo que o caminho esteja correto e com permissão CHMOD 777
  
  $ch = curl_init ();

  curl_setopt_array($ch, array(
    CURLOPT_URL => $url, //url que produz a imagem do captcha.
    CURLOPT_COOKIEFILE => $cookie, //esse mais o debaixo fazem a mágica do captcha
    CURLOPT_COOKIEJAR => $cookie,  //esse mais o de cima fazem a mágica do.. ah já falei isso;
    CURLOPT_FOLLOWLOCATION => 1, //não sei, mas funciona :D
    CURLOPT_RETURNTRANSFER => 1, //retorna o conteúdo.
    CURLOPT_BINARYTRANSFER => 1, //essa tranferencia é binária.
    CURLOPT_HEADER => 0, //não imprime o header.
  ));    
  
  $data = curl_exec($ch);
  
  curl_close ($ch);
    
  //salva a imagem
  $fp = fopen($arquivo,'w');
  fwrite($fp, $data);
  fclose($fp);

  //retorna a imagem
  return $arquivo;
}

//Então vamos pegar a imagem
$img = recebe_imagem("http://www.receita.fazenda.gov.br/scripts/srf/intercepta/captcha.aspx?opt=image", "receita.gif");

//E criar o formulário que mostra a imagem + o campo de inserção do CNPJ
print "<img src='{$img}' />" . 
      '<form action="receita_respond.php" method="POST">
         captcha
         <input size="8" maxlength="4" name="idLetra">
         cnpj
         <input size="16" maxlength="14" name="cnpj">
         <input type="submit">
      </form>';

?>