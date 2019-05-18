<?php
# $GLOBALS["_SERVER"]["HTTP_HOST"] ;

define( 'enter', "\n" );

$name = date("h:i") . ".vcf";
$nome = $_GET['nome']; echo "nome: " . $nome . '<br>' ;
$sobrenome  = $_GET['sobrenome']; echo "sobrenome: " . $sobrenome . '<br>' ;
$nickname    = $_GET['nickname'];   echo "nickname: " . $nickname . '<br>' ;
$empresa     = $_GET['empresa'];    echo "empresa: " . $empresa . '<br>' ;
$dados_tecnicos = 'Dados Tecnicos:';


#------------------------------
$txt_1 = 'BEGIN:VCARD' . enter;
$txt_2 = 'VERSION:2.1' . enter;
#------------------------------

$txt_3 = 'N:' . $sobrenome . ';' . $nome . ';' . 'YES' . enter;
$txt_4 = 'FN:' . $nome . ' ' . $sobrenome . enter;
$txt_5 = 'NICKNAME:' . $nickname . enter;
$txt_6 = 'ORG:eCPF (xyz);YES, Tecnologia(s)' . enter;
$txt_7 = 'TITLE:ecp_cadastro' . enter;
$txt_8 = 'NOTE;ENCODING=QUOTED-PRINTABLE:' . $dados_tecnicos . enter;
$txt_9 = 'ADR;WORK:;euBRASIL ( Mynome );Www. e-CPF .com;Guarulhos;São Paulo;07120-050;Brasil' . enter;
$txt_0 = 'LABEL;WORK;ENCODING=QUOTED-PRINTABLE:euBRASIL ( Mynome )=0D=0AWww. e-CPF .com' . enter;
$txt_A = 'URL;HOME:' . $nome . '.ecpf.xyz' . enter;
$txt_B = 'URL;WORK:eubrasil.xyz' . enter;
$txt_C = 'BDAY:19740415' . enter;
$txt_D = 'EMAIL;PREF;INTERNET:' . $nome . '@e-cpf.com' . enter;
$txt_E = 'REV:' . date("aaaammdd") . 'T000305Z' . enter;

#------------------------------
$txt_F = 'END:VCARD' . enter;
#------------------------------

$file = fopen($name, 'a');

echo "Arquivo: " . $name;

$byte= $txt_1 ; fwrite($file, $txt_1, strlen( $byte ) );
$byte= $txt_2 ; fwrite($file, $txt_2, strlen( $byte ) );
$byte= $txt_3 ; fwrite($file, $txt_3, strlen( $byte ) );
$byte= $txt_4 ; fwrite($file, $txt_4, strlen( $byte ) );
$byte= $txt_5 ; fwrite($file, $txt_5, strlen( $byte ) );
$byte= $txt_6 ; fwrite($file, $txt_6, strlen( $byte ) );
$byte= $txt_7 ; fwrite($file, $txt_7, strlen( $byte ) );
$byte= $txt_8 ; fwrite($file, $txt_8, strlen( $byte ) );
$byte= $txt_9 ; fwrite($file, $txt_9, strlen( $byte ) );
$byte= $txt_0 ; fwrite($file, $txt_0, strlen( $byte ) );
$byte= $txt_A ; fwrite($file, $txt_A, strlen( $byte ) );
$byte= $txt_B ; fwrite($file, $txt_B, strlen( $byte ) );
$byte= $txt_C ; fwrite($file, $txt_C, strlen( $byte ) );
$byte= $txt_D ; fwrite($file, $txt_D, strlen( $byte ) );
$byte= $txt_E ; fwrite($file, $txt_E, strlen( $byte ) );
$byte= $txt_F ; fwrite($file, $txt_F, strlen( $byte ) );

fclose($file);

?>