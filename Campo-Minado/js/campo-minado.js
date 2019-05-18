
var TAMANHOS = {
	1: [8, 8, 10],
	2: [12, 12, 20],
	3: [15, 20, 50]
};

var VALOR_BOMBA = -1;

// Estados do quadrado durante andamento.
var OCULTO = 0;
var DESCOBERTO = 1;
var BANDEIRA = 2;

// Estado jogo.
var EM_ANDAMENTO = 0;
var GANHOU = 1;
var PERDEU = 2;

var CODIGO_TECLA_N = 110;
var CODIGO_TECLA_I = 105;
var CODIGO_TECLA_1 = 49;
var CODIGO_TECLA_2 = 50;
var CODIGO_TECLA_3 = 51;

var PREF_QUADRADO = "q";
var PREF_VISOR_NUMEROS = "visor";
var PREF_OPCAO = "opcao";
var PREF_CLASSE_COR_NUMERO = "cor_num";
var PREF_CLASSE_DIV_CAMPO = "campo";
var PREF_CLASSE_QUADRADO = "quadrado";

// ----------------------------------

var tamanho; // 1, 2, 3, ...

var altura;
var largura;

var primeiro_jogo;
var numero_bombas;
var matriz_campo;
var matriz_status;
var numero_quadrados_livres;
var numero_quadrados_descobertos;
var clicou_primeira_vez;
var minas_marcadas;
var timer;
var novo_tamanho;
var estado_jogo;

// ----------------------------------

function cria_html_tabuleiro() {
	
	var html = "";
	var i, j;
	
	html = html.concat("");
	
	for(i=0 ; i<altura ; i++){
		
		html = html.concat("\n<tr>");
		
		for(j=0 ; j<largura ; j++){
			
			html = html.concat("\n\t<td id='" +PREF_QUADRADO +"_" +i +"_" +j +"' ");
			html = html.concat("class='quadrado sem_acao'></td>");
		}
		
		html = html.concat("\n</tr>");
	}
	
	return html;
}

// ----------------------------------

function set_campo(linha, coluna, valor) {
	matriz_campo[linha*largura + coluna] = valor;
}

function get_campo(linha, coluna) {
	return(matriz_campo[linha*largura + coluna]);
}

function set_status(linha, coluna, valor) {
	matriz_status[linha*largura + coluna] = valor;
}

function get_status(linha, coluna) {
	return(matriz_status[linha*largura + coluna]);
}

// ----------------------------------

function tem_bomba_quadrado(linha, coluna) {
	
	if(linha < 0 || linha >= altura || coluna < 0 || coluna >= largura)
		return false;
	else if(get_campo(linha, coluna) == VALOR_BOMBA)
		return true;	
	else return false;
}

function calcular_numero_bombas_vizinhas(linha, coluna) {
	
	var num_bombas_vizinhas = 0;
	
	if(linha < 0 || linha >= altura || coluna < 0 || coluna >= largura)
		return 0;
		
	if(tem_bomba_quadrado(linha-1, coluna-1)) num_bombas_vizinhas++;			
	if(tem_bomba_quadrado(linha-1, coluna)) num_bombas_vizinhas++;
	if(tem_bomba_quadrado(linha-1, coluna+1)) num_bombas_vizinhas++;
	if(tem_bomba_quadrado(linha, coluna-1)) num_bombas_vizinhas++;
	if(tem_bomba_quadrado(linha, coluna+1)) num_bombas_vizinhas++;
	if(tem_bomba_quadrado(linha+1, coluna-1)) num_bombas_vizinhas++;
	if(tem_bomba_quadrado(linha+1, coluna)) num_bombas_vizinhas++;
	if(tem_bomba_quadrado(linha+1, coluna+1)) num_bombas_vizinhas++;
		
	return num_bombas_vizinhas;
}

function compara_posicoes(linha_1, coluna_1, linha_2, coluna_2) {
	
	return((linha_1 == linha_2) && (coluna_1 == coluna_2));
}

function verifica_possibilidade_para_bomba(linha, coluna, linha_clicada, coluna_clicada) {
	
	if(compara_posicoes(linha, coluna, linha_clicada, coluna_clicada)) return false;

	if(compara_posicoes(linha-1, coluna-1, linha_clicada, coluna_clicada)) return false;
	if(compara_posicoes(linha-1, coluna, linha_clicada, coluna_clicada)) return false;
	if(compara_posicoes(linha-1, coluna+1, linha_clicada, coluna_clicada)) return false;
	if(compara_posicoes(linha, coluna-1, linha_clicada, coluna_clicada)) return false;
	if(compara_posicoes(linha, coluna+1, linha_clicada, coluna_clicada)) return false;
	if(compara_posicoes(linha+1, coluna-1, linha_clicada, coluna_clicada)) return false;
	if(compara_posicoes(linha+1, coluna, linha_clicada, coluna_clicada)) return false;
	if(compara_posicoes(linha+1, coluna+1,  linha_clicada, coluna_clicada)) return false;
	
	return true;
}

function cria_campo_aleatorio(linha_clicada, coluna_clicada) {
	
	var numero_quadrados = altura*largura;
	var linha, coluna;
	var i;
	var num_bombas_vizinhas;
	
	numero_quadrados_livres = numero_quadrados - numero_bombas;

	for(i=0 ; i<numero_bombas ; ) {
		linha = Math.round(Math.random() * (altura - 1));
		coluna = Math.round(Math.random() * (largura - 1));
		
		var pode_colocar_uma_bomba = verifica_possibilidade_para_bomba(linha, coluna, linha_clicada, coluna_clicada);
		
		if((get_campo(linha, coluna) != VALOR_BOMBA) && pode_colocar_uma_bomba) {
			set_campo(linha, coluna, VALOR_BOMBA);
			i++;
		}
	}
		
	for(i=0 ; i<altura ; i++) {
		for(j=0 ; j<largura ; j++) {
			
			if(get_campo(i, j) != VALOR_BOMBA) {
				num_bombas_vizinhas = calcular_numero_bombas_vizinhas(i, j);
				set_campo(i, j, num_bombas_vizinhas);
			}
		}
	}
}

// ----------------------------------

function atualiza_quadrado(linha, coluna) {
	
	var status_quadrado;
	var id;
	
	status_quadrado = get_status(linha, coluna);
	id = "#" +PREF_QUADRADO +"_" +linha +"_" +coluna;
	
	if(status_quadrado == OCULTO)
		$(id).removeClass("bandeira");
	else if(status_quadrado == BANDEIRA)
		$(id).addClass("bandeira");
	else if(status_quadrado == DESCOBERTO) {
		
		var valor_quadrado = get_campo(linha, coluna);
		
		$(id).removeClass("sem_acao bandeira").addClass("descoberto");
		
		if(valor_quadrado > 0) {
			$(id).html(valor_quadrado);
			
			var classe_cor = PREF_CLASSE_COR_NUMERO +"_" +valor_quadrado; 
			$(id).addClass(classe_cor);
		}
		
	}
}

// ----------------------------------

function trata_clique_esquerdo(linha, coluna) {
	
	var status;
	var valor_quadrado;
	
	if(!clicou_primeira_vez) {
	
		// alert("Primeira vez.");
		
		clicou_primeira_vez = true;
		cria_campo_aleatorio(linha, coluna);
		
		timer.mode(1);
		timer.reset(0);
		timer.start(1000);
	}
	
	status = get_status(linha, coluna);
	
	if(status == BANDEIRA || status == DESCOBERTO)
		return;
	else if(status == OCULTO) {
		
		valor_quadrado = get_campo(linha, coluna);
		
		if(valor_quadrado == VALOR_BOMBA) {
			estado_jogo = PERDEU;
			timer.stop();
			perdeu();
		}
		else if(valor_quadrado == 0) {
			descobre_quadrados_vazios(linha, coluna);
		
		}
		else if(valor_quadrado > 0) {
			set_status(linha, coluna, DESCOBERTO);
			numero_quadrados_descobertos++;
			atualiza_quadrado(linha, coluna);
		}
		
		if(numero_quadrados_descobertos == numero_quadrados_livres) {
			estado_jogo = GANHOU;
			timer.stop();
			ganhou();
		}
	}
}

function atualiza_elemento_contador_bombas() {
	
	var valor = numero_bombas - minas_marcadas;
	
	$("#contagem_bombas").html(valor);
}


function trata_clique_direito(linha, coluna) {

	var status;
	
	status = get_status(linha, coluna);
	
	switch(status) {
		case DESCOBERTO:
			return;
		case OCULTO:
			set_status(linha, coluna, BANDEIRA);
			minas_marcadas++;
			atualiza_elemento_contador_bombas();
			break;
		case BANDEIRA:
			set_status(linha, coluna, OCULTO);
			minas_marcadas--;
			atualiza_elemento_contador_bombas();
			break;
	}
	
	atualiza_quadrado(linha, coluna);
}

function descobre_quadrados_vazios(linha, coluna) {
	
	var valor_quadrado;
	var status_quadrado;
	
	if(linha < 0 || linha >= altura || coluna < 0 || coluna >= largura)
		return;
		
	if(get_status(linha, coluna) == DESCOBERTO)
		return;
	
	valor_quadrado = get_campo(linha, coluna);
	status_quadrado = get_status(linha, coluna);
	
	if(status_quadrado == BANDEIRA)
		return;
	
	if(valor_quadrado > 0) {
		
		set_status(linha, coluna, DESCOBERTO);
		numero_quadrados_descobertos++;
		atualiza_quadrado(linha, coluna);
		return;
	}
	else if(valor_quadrado == 0) {
		
		set_status(linha, coluna, DESCOBERTO);
		numero_quadrados_descobertos++;
		atualiza_quadrado(linha, coluna);
		
		descobre_quadrados_vazios(linha-1, coluna-1);
		descobre_quadrados_vazios(linha-1, coluna);
		descobre_quadrados_vazios(linha-1, coluna+1);
		descobre_quadrados_vazios(linha, coluna-1);
		descobre_quadrados_vazios(linha, coluna+1);
		descobre_quadrados_vazios(linha+1, coluna-1);
		descobre_quadrados_vazios(linha+1, coluna);
		descobre_quadrados_vazios(linha+1, coluna+1);
	
		return;
	}
}

// function abre_moal

function perdeu() {
	
	var i, j;
	var id;
	var valor;
	var status;
	
	$(".sem_acao").removeClass("sem_acao").addClass("bloqueado");
	
	for(i=0 ; i<altura ; i++) {
		for(j=0 ; j<largura ; j++) {
		
			valor = get_campo(i, j);
			
			if(valor == VALOR_BOMBA) {
				id = "#" +PREF_QUADRADO +"_" +i +"_" +j;
				$(id).html("X").removeClass("bandeira").addClass("descoberto bomba");
			}
			else {
				status = get_status(i, j);
				
				if(status == BANDEIRA) {
					id = "#" +PREF_QUADRADO +"_" +i +"_" +j;
					$(id).addClass("descoberto nao-bomba");
				}
			}
		}
	}
	
	$('#span_resultado').html('Perdeu');
	$('#span_carinha').html('&#9785;');
	abre_modal_resultado();
}

function ganhou() {
	
	var i, j;
	var id;
	var valor;
	var status;
	
	$(".sem_acao").removeClass("sem_acao").addClass("bloqueado");
	
	if(minas_marcadas != 0) {
	
		for(i=0 ; i<altura ; i++) {
			for(j=0 ; j<largura ; j++) {
			
				valor = get_campo(i, j);

				if(valor == VALOR_BOMBA) {
				
					status = get_status(i, j);
					
					if(status == OCULTO) {
						id = "#" +PREF_QUADRADO +"_" +i +"_" +j;
						$(id).html("X").addClass("descoberto bomba");
					}
				}
			}
		}
	}
	
	$('#span_resultado').html('Ganhou');
	$('#span_carinha').html('&#9786;');
	abre_modal_resultado();
}

// ----------------------------------

function abre_modal_instrucoes() {

	$('#modal_instrucoes').bPopup({
		closeClass: 'close',
		opacity: 0.6,
		fadeSpeed: 'fast',
		followSpeed: 'fast'
	});
}

function abre_modal_resultado() {
	$('#modal_resultado').bPopup({
		closeClass: 'close',
		opacity: 0.6,
		fadeSpeed: 'fast',
		followSpeed: 'fast'
	});
}

function define_eventos() {
	
	// TODO: modular evento de .quadrado.
	// Define evento para clique dos lados direito e esquerdo sobre os quadrados do tabuleiro.
	$('.quadrado').mousedown(function(event) {
	
		var id = event.target.id;
		id = id.slice(PREF_QUADRADO.length+1); // Tira o prefixo do ID.
		
		var coordenadas = id.split("_"); // Pega coordenadas separadas por '_'.
		
		var linha = parseInt(coordenadas[0]);
		var coluna = parseInt(coordenadas[1]);
		
		if(estado_jogo == EM_ANDAMENTO) {
			if(event.which == 1)
				trata_clique_esquerdo(linha, coluna);
			else if(event.which == 3)
				trata_clique_direito(linha, coluna);
		}
	})
	
	// Define ação do botão de novo jogo.
	$("button.novo_jogo").click(function(event) {
		novo_jogo();
	})
	
	// Evento ao pressionar a tecla N.
	$(document).bind('keypress', function(e) {
	
		var code = e.keyCode || e.which;
		
		
		if(code == CODIGO_TECLA_N)
			novo_jogo();
		else if(code == CODIGO_TECLA_I)
			abre_modal_instrucoes();
		else if(e.altKey) {
			// Segurou ALT.
		
			switch(code) {
				case CODIGO_TECLA_1:
					novo_tamanho = 1;
					break;
				case CODIGO_TECLA_2:
					novo_tamanho = 2;
					break;
				case CODIGO_TECLA_3:
					novo_tamanho = 3;
					break;
			}
			
			if(novo_tamanho != tamanho) {
				novo_jogo();
				$("button.selecionada").removeClass("selecionada");
				$("#opcao_" +novo_tamanho).addClass("selecionada");
			}
		}

		
	});
	
	// Desativa menu do click do lado direito do mouse.
	$("#div_tabuleiro").bind("contextmenu",function(event){
		event.preventDefault();
	});
	
	// Define evento para Radio Buttons.
	$("button.opcao").click(function(event) {
		
		var elemento = event.target;
		novo_tamanho = parseInt(elemento.value);
		
		if(novo_tamanho != tamanho) {
			$("button.selecionada").removeClass("selecionada");
			$(elemento).addClass("selecionada");
			novo_jogo();
		}
	});
	
	$("#botao_instrucao").click(function(event) {
		abre_modal_instrucoes();
	});
}

function novo_jogo() {
	
	var html;
	var i, j;
	
	timer.stop();
	timer.reset();
	
	if((novo_tamanho != tamanho) || primeiro_jogo) {
	
		tamanho = novo_tamanho;
				
		altura = TAMANHOS[tamanho][0];
		largura = TAMANHOS[tamanho][1];
		numero_bombas = TAMANHOS[tamanho][2];
			
		matriz_campo = [];
		matriz_status = [];
			
		matriz_campo = new Array(altura*largura);
		matriz_status = new Array(altura*largura);
		
		if(primeiro_jogo)
			primeiro_jogo = false
		else {
			html = cria_html_tabuleiro();
			$("#tabela_campo").html(html);
		}
		
		$("#div_campo").attr('class', '').addClass(PREF_CLASSE_DIV_CAMPO +"_" +tamanho);
		$(".quadrado").addClass(PREF_CLASSE_QUADRADO +"_" +tamanho);

		define_eventos();
	}
	else {
		$(".quadrado").html('');
		$(".quadrado").attr('class', '').addClass("quadrado sem_acao");
		$(".quadrado").addClass(PREF_CLASSE_QUADRADO +"_" +tamanho);
	}
	
	// Inicializa campo.
	for(i=0 ; i<altura ; i++)
		for(j=0 ; j<largura ; j++)
			set_campo(i, j, 0);

	// Inicializa status.
	for(i=0 ; i<altura ; i++)
		for(j=0 ; j<largura ; j++)
			set_status(i, j, OCULTO);
			
			
	clicou_primeira_vez = false;
	estado_jogo = EM_ANDAMENTO;
	minas_marcadas = 0;
	numero_quadrados_descobertos = 0;
	atualiza_elemento_contador_bombas();
}


$(document).ready(function() {

	var start = new Date().getTime();
	
	timer = new _timer;
	
	tamanho = 1;
	
	primeiro_jogo = true;
	novo_tamanho = tamanho;

	var id_opcao = "#" +PREF_OPCAO +"_" +tamanho;
	$(id_opcao).prop('checked', true);

	
	// Pre-carregar imagens
	var imagens_pre_load = [
		'../imagens/flag.png'
	]
	
    $(imagens_pre_load).each(function(){
		(new Image()).src = this;
    });
	
	novo_jogo();
	
	// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
		// alert("Mobile.");
	
	
	// $("#table_opcoes").hide();
	// $("#div_campo").hide();

	var end = new Date().getTime();
	var time = end - start;
	// alert('Execution time: ' + time);
	
	$('.tooltip').tooltipster();
	
	// ganhou();
});
