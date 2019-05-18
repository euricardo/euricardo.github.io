<?php
 
/*
* Controle Bancário
* Descrição: Classe que cria conta, saque e deposita
* Autor:    Antônio Norival Ribeiro Passos
* Contato: tonhopassos@gmail.com
* Data: 03/02/2010
* Modificação: 03/02/2011
* Versão: 1.0.0.0
* Licença: Copyright (C) 2011
*/
 
 
class banco{
 
 
var $nome = ""; // nome do cliente
var $conta = ""; // numero da conta
var $valor = ""; // saldo
 
 
// cria conta: caso não especifique o valor, o padrão será 100
function criaConta($nome,$conta,$valor = 100) {
    
    // seta nome
    $this -> nome = $nome;
    // seta conta
    $this -> conta = $conta;
    // seta valor
    $this -> valor = $valor;
 
}
 
// faz depósito através do número da conta
function deposito($conta, $valor) {
 
    // verifica se a conta existe
    if ($this -> conta == $conta) {
        
        // incrementa o deposito ao saldo
        $this -> valor = $this -> valor + $valor;
        echo "Depósito Efetuado Com Sucesso.";
    
    }
    else
        // conta errada
        echo "Conta Errada";
 
 
}
 
// faz saque tendo como parâmetro o numero da conta
function saque($conta, $valor) {
    
    // verifica se a conta existe
    if ($this -> conta == $conta) {
        // verifica se o saldo é suficiente
        if ($valor > $this -> valor) {  
            
            echo "Saldo Insuficiente.";
        
        }  
        else
        {
            // reduz o valor sacado do saldo
            $this -> valor = $this -> valor - $valor;
            echo "Saque Efetuado Com Sucesso";
        }
    }
    else
        // conta errada
        echo "Conta Errada";
}
 
 
// imprime os dados do cliente
function imprime() {
    
    // nome, conta e saldo
    echo "<br>--------------------------------------------------<br>";
    echo "Nome: ".$this -> nome."<br>";
    echo "Conta: ".$this -> conta."<br>";
    echo "Saldo: ".$this -> valor;
    echo "<br>--------------------------------------------------<br>";
 
 
 
}
 
 
}
 
// exemplo 
// cria o objeto
 
$bancoteste = new banco();
// imprime o cliente que é vazio
$bancoteste -> imprime();
echo "Cria Conta";
// cria uma conta
$bancoteste -> criaConta("Antônio Passos","011-1406",200);
// imprime
$bancoteste -> imprime();
// realiza saque de 300
echo "Faz Saque de 300<br>";
$bancoteste -> saque("011-1406",300);
// realiza saque de 150
echo "<br>Faz Saque de 150<br>";
$bancoteste -> saque("011-1406",150);
// imprime
$bancoteste -> imprime();
// faz deposito em conta errada
echo "<br>Faz Depósito Com Numero da Conta Errado<br>";
$bancoteste -> deposito("011-1407",234);
// faz depósito em conta certa
echo "<br>Faz Depósito Com Numero da Conta Certo<br>";
$bancoteste -> deposito("011-1406",234);
// imprime
$bancoteste -> imprime();

?>