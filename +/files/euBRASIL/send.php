<?php
if($_GET['acao'] == 'enviar'){
 $nome		= $_POST['nome'];
 $assunto		= $_POST['assunto'];
 $mensagem	= $_POST['mensagem'];
 $arquivo		= $_FILES["arquivo"];
 
 $corpoMSG = "<strong>Nome:</strong> $nome<br> <strong>Mensagem:</strong> $mensagem";
 // chamada da classe		
 require_once('class.phpmailer.php');
 // instanciando a classe
 $mail   = new PHPMailer();
 // email do remetente
 $mail->SetFrom('ricardo@rede.nu', 'remetente');
 // email do destinatario
 $address = "destinatario@dominio.com.br";
 $mail->AddAddress($address, "destinatario");
 // assunto da mensagem
 $mail->Subject = $assunto;
 // corpo da mensagem
 $mail->MsgHTML($corpoMSG);
 // anexar arquivo
 $mail->AddAttachment($arquivo['tmp_name'], $arquivo['name']  );
 
 if(!$mail->Send()) {
   echo "Erro: " . $mail->ErrorInfo;
  } else {
   echo "Mensagem enviada com sucesso!";
  }
}
?>