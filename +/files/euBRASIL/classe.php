<?php
# noticia.class.php
class Noticia
{
public $titulo;
public $texto;
function setTitulo($valor)
{
$this->titulo = $valor;
}
function setTexto($valor)
{
$this->texto = $valor;
}
function exibeNoticia()
{
echo "<center>";
echo "<b>". $this->titulo ."</b><p>";
echo $this->texto;
echo "</center><p>";
}
}
$not = new Noticia;
$not->titulo = 'Novo curso de PHP Avançado';
$not->texto = 'Este curso contém os seguinte tópicos: POO, XML, etc.';
$not->exibeNoticia();
?>