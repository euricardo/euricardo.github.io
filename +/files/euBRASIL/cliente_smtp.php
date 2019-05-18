<p style="font-family:'lucida console'; font-size:10px;">
<?php

/* Criado por Pércoles Tiago Napivoski
 *
 * Danem-se direitos de cópia... Faça o que quiser com esse script
 */

// Endereço do servidor SMTP
$servidor='';
// Porta para a comunicação
$porta=25;
// Timeuot da execução
$timeout=10;
// Autenticado? Sim=1 Não=0
$autenticado=1;
// Login e Senha como Base64? Sim=1 Não=0
$eh_base64=1; // Padrão
// Login para o servidor SMTP
$login='';
// Senha para o servidor SMTP
$senha='';
// Campo De
$de='';
// Campo De (Nome)
$denome='';
// Campo Para
$para='';
// Campo Para (Nome)
$paranome='';
// Corpo (HTML)
$corpo='';
// Assunto (Texto)
$assunto='';
// Data (Não mude)
$data=date('r', time());
$conexao=@fsockopen($servidor, $porta, $errno, $errstr, $timeout);
if(!$conexao)
{
	echo('Erro ao conectar em '.$servidor.' na porta '.$porta.': '.$errstr);
}
else
{
	$okay='<span style="color:#0000ff;"><strong>OKAY</strong></span>';
	$erro='<span style="color:#ff0000;"><strong>ERRO</strong></span>';

	echo('Conectou com: '.$servidor.'<br />'."\r\n");
	$fgets=fgets($conexao, 512);
	// OKAY=220
	$fgets_n=substr($fgets, 0, 3);
	if($fgets_n==220) { echo($okay); } else { echo($erro); }
	echo('... Resposta da conexão: '.$fgets.'<br />'."\r\n");
	while(substr($fgets, 3, 1)=='-')
	{	$fgets=fgets($conexao, 512);
		// OKAY=220
		$fgets_n=substr($fgets, 0, 3);
		if($fgets_n==220) { echo($okay); } else { echo($erro); }
		echo('... Resposta da conexão: '.$fgets.'<br />'."\r\n");
	}

	$fputs=fputs($conexao,"HELO ".$servidor."\r\n", 215);
	$fgets=fgets($conexao, 512);
	// OKAY=250
	$fgets_n=substr($fgets, 0, 3);
	if($fgets_n==250) { echo($okay); } else { echo($erro); }
	echo('... Resposta ao HELO: '.$fgets.'<br />'."\r\n");
	while(substr($fgets, 3, 1)=='-')
	{	$fgets=fgets($conexao, 512);
		// OKAY=250
		$fgets_n=substr($fgets, 0, 3);
		if($fgets_n==250) { echo($okay); } else { echo($erro); }
		echo('... Resposta ao HELO: '.$fgets.'<br />'."\r\n");
	}

	$fputs=fputs($conexao,"EHLO ".$servidor."\r\n", 512);
	$fgets=fgets($conexao, 512);
	// OKAY=250
	$fgets_n=substr($fgets, 0, 3);
	if($fgets_n==250) { echo($okay); } else { echo($erro); }
	echo('... Resposta ao EHLO: '.$fgets.'<br />'."\r\n");
	while(substr($fgets, 3, 1)=='-')
	{	$fgets=fgets($conexao, 512);
		// OKAY=250
		$fgets_n=substr($fgets, 0, 3);
		if($fgets_n==250) { echo($okay); } else { echo($erro); }
		echo('... Resposta ao EHLO: '.$fgets.'<br />'."\r\n");
	}

	if($autenticado===1)
	{
		$fputs=fputs($conexao,"AUTH LOGIN\r\n", 512);
		$fgets=fgets($conexao, 512);
		// OKAY=334
		$fgets_n=substr($fgets, 0, 3);
		if($fgets_n==334) { echo($okay); } else { echo($erro); }
		echo('... Início da Autenticação: '.substr($fgets, 0, 4).base64_decode(substr($fgets, 4)).'<br />'."\r\n");
		while(substr($fgets, 3, 1)=='-')
		{	$fgets=fgets($conexao, 512);
			// OKAY=334
			$fgets_n=substr($fgets, 0, 3);
			if($fgets_n==334) { echo($okay); } else { echo($erro); }
			echo('... Início da Autenticação: '.substr($fgets, 0, 4).base64_decode(substr($fgets, 4)).'<br />'."\r\n");
		}

		if($eh_base64===1) { $fputs=fputs($conexao, base64_encode($login)."\r\n", 512); } else {$fputs=fputs($conexao, $login."\r\n", 512); }
		$fgets=fgets($conexao, 512);
		// OKAY=334
		$fgets_n=substr($fgets, 0, 3);
		if($fgets_n==334) { echo($okay); } else { echo($erro); }
		echo('... Login: '.substr($fgets, 0, 4).base64_decode(substr($fgets, 4)).'<br />'."\r\n");
		while(substr($fgets, 3, 1)=='-')
		{	$fgets=fgets($conexao, 512);
			// OKAY=334
			$fgets_n=substr($fgets, 0, 3);
			if($fgets_n==334) { echo($okay); } else { echo($erro); }
			echo('... Login: '.substr($fgets, 0, 4).base64_decode(substr($fgets, 4)).'<br />'."\r\n");
		}

		if($eh_base64===1) { $fputs=fputs($conexao, base64_encode($senha)."\r\n", 512); } else {$fputs=fputs($conexao, $senha."\r\n", 512); }
		$fgets=fgets($conexao, 512);
		// OKAY=235
		$fgets_n=substr($fgets, 0, 3);
		if($fgets_n==235) { echo($okay); } else { echo($erro); }
		echo('... Senha: '.$fgets.'<br />'."\r\n");
		while(substr($fgets, 3, 1)=='-')
		{	$fgets=fgets($conexao, 512);
			// OKAY=235
			$fgets_n=substr($fgets, 0, 3);
			if($fgets_n==235) { echo($okay); } else { echo($erro); }
			echo('... Senha: '.$fgets.'<br />'."\r\n");
		}
	}

	$fputs=fputs($conexao, "MAIL FROM:<".$de.">\r\n", 512);
	$fgets=fgets($conexao, 512);
	// OKAY=250
	$fgets_n=substr($fgets, 0, 3);
	if($fgets_n==250) { echo($okay); } else { echo($erro); }
	echo('... E-mail de: '.$fgets.'<br />'."\r\n");
	while(substr($fgets, 3, 1)=='-')
	{	$fgets=fgets($conexao, 512);
		// OKAY=250
		$fgets_n=substr($fgets, 0, 3);
		if($fgets_n==250) { echo($okay); } else { echo($erro); }
		echo('... E-mail de: '.$fgets.'<br />'."\r\n");
	}

	$fputs=fputs($conexao, "RCPT TO:<".$para.">\r\n", 512);
	$fgets=fgets($conexao, 512);
	// OKAY=250
	$fgets_n=substr($fgets, 0, 3);
	if($fgets_n==250) { echo($okay); } else { echo($erro); }
	echo('... E-mail para: '.$fgets.'<br />'."\r\n");
	while(substr($fgets, 3, 1)=='-')
	{	$fgets=fgets($conexao, 512);
		// OKAY=250
		$fgets_n=substr($fgets, 0, 3);
		if($fgets_n==250) { echo($okay); } else { echo($erro); }
		echo('... E-mail para: '.$fgets.'<br />'."\r\n");
	}

	$fputs=fputs($conexao, "DATA\r\n", 512);
	$fgets=fgets($conexao, 512);
	// OKAY=354
	$fgets_n=substr($fgets, 0, 3);
	if($fgets_n==354) { echo($okay); } else { echo($erro); }
	echo('... Dados: '.$fgets.'<br />'."\r\n");
	while(substr($fgets, 3, 1)=='-')
	{	$fgets=fgets($conexao, 512);
		// OKAY=354
		$fgets_n=substr($fgets, 0, 3);
		if($fgets_n==354) { echo($okay); } else { echo($erro); }
		echo('... Dados: '.$fgets.'<br />'."\r\n");
	}

	$fputs=fputs($conexao, "MIME-Version: 1.0\r\n", 512);
	$fputs=fputs($conexao, "Content-Type: text/html; charset=iso-8859-1\r\n", 512);
	$fputs=fputs($conexao, "Date: ".$data."\r\n", 512);
	$fputs=fputs($conexao, "From: ".$denome." <".$de.">\r\n", 512);
	$fputs=fputs($conexao, "To: ".$paranome." <".$para.">\r\n", 512);
	$fputs=fputs($conexao, "Subject: ".$assunto."\r\n", 512);
	$fputs=fputs($conexao, "\r\n", 512);
	$fputs=fputs($conexao, $corpo."\r\n", 512);
	$fputs=fputs($conexao, ".\r\n", 512);
	$fgets=fgets($conexao, 512);
	// OKAY=250
	$fgets_n=substr($fgets, 0, 3);
	if($fgets_n==250) { echo($okay); } else { echo($erro); }
	echo('... Envio: '.$fgets.'<br />'."\r\n");
	while(substr($fgets, 3, 1)=='-')
	{	$fgets=fgets($conexao, 512);
		// OKAY=250
		$fgets_n=substr($fgets, 0, 3);
		if($fgets_n==250) { echo($okay); } else { echo($erro); }
		echo('... Envio: '.$fgets.'<br />'."\r\n");
	}

	$fputs=fputs($conexao, "QUIT\r\n", 512);
	$fgets=fgets($conexao, 512);
	// OKAY=221
	$fgets_n=substr($fgets, 0, 3);
	if($fgets_n==221) { echo($okay); } else { echo($erro); }
	echo('... Quit: '.$fgets.'<br />'."\r\n");
	while(substr($fgets, 3, 1)=='-')
	{	$fgets=fgets($conexao, 512);
		// OKAY=221
		$fgets_n=substr($fgets, 0, 3);
		if($fgets_n==221) { echo($okay); } else { echo($erro); }
		echo('... Quit: '.$fgets.'<br />'."\r\n");
	}
	
	fclose($conexao);
}

?>
</p>