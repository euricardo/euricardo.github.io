<?php
// Código do Serviço que deseja calcular, veja tabela acima:
$cod_servico = 41106;
// CEP de Origem, em geral o CEP da Loja
$cep_origem = 96040600;
// CEP de Destino, você pode passar esse CEP por GET ou POST vindo de um formulário
$cep_destino = 96010000;
// Peso total do pacote em Quilos, caso seja menos de 1Kg, ex.: 300g, coloque 0.300
$peso = 1;
// URL de Consulta dos Correios
$correios = "http://www.correios.com.br/encomendas/precos/calculo.cfm?servico=".$cod_servico."&cepOrigem=".$cep_origem."&cepDestino=".$cep_destino."&peso=".$peso."&MaoPropria=N&avisoRecebimento=N&resposta=xml";
 
// Capta as informações da página dos Correios
$correios_info = file($correios);
// Processa as informações vindas do site dos correios em um Array
foreach($correios_info as $info){
	// Busca a informação do Preço da Postagem
	if(preg_match("/<preco_postal>(.*)</preco_postal>/",$info,$tarifa)){
		// Quando encontra o valor da postagem, exibe na página formatando em padrão de moeda 10,89
		print number_format($tarifa[1],2,',','.');
		// Caso você não queira formatar, será exibido assim 10.89 e basta executar o comando abaixo
	//	print $tarifa[1];
		// Você utilizará um ou outro método acima para exibição dos dados
	}
}
?>