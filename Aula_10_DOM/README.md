# Curso_de_JavaScript
Curso de Java Script - Professor Elias Gomes


Explicação Detalhada
HTML:
<!DOCTYPE html>: Declara o tipo de documento e versão do HTML.
<html lang="pt-br">: Define o idioma da página como português do Brasil.
<meta charset="UTF-8">: Define a codificação de caracteres para suportar diversos idiomas e caracteres especiais.
<meta name="viewport" content="width=device-width, initial-scale=1.0">: Faz com que a página seja responsiva em dispositivos móveis.
<title>: Define o título que aparece na aba do navegador.
<link rel="stylesheet" href="styles.css">: Conecta o arquivo CSS para estilização.
<body>: Contém o conteúdo visível da página.
<h1>: Título principal.
<p id="paragrafo">: Parágrafo com um id específico para identificação e manipulação pelo JavaScript.
<button id="botao">: Botão que, ao ser clicado, aciona uma função JavaScript.
<script src="script.js"></script>: Inclui o arquivo JavaScript que contém a lógica de interação.
CSS:
body: Define a estilização global da página, incluindo fonte, margens e cor de fundo.
h1: Estiliza o título principal, incluindo a cor do texto e alinhamento.
#paragrafo: Estiliza o parágrafo específico com tamanho da fonte, cor e alinhamento.
#botao: Define o estilo do botão, incluindo exibição, centralização, padding, tamanho da fonte e cores.
#botao
: Adiciona um efeito visual quando o botão é sobrevoado com o cursor.
JavaScript:
document.addEventListener("DOMContentLoaded", function() {...}): Garante que o código seja executado somente após o carregamento completo da página.
var botao = document.getElementById("botao");: Obtém o elemento com id="botao" e o armazena em uma variável.
var paragrafo = document.getElementById("paragrafo");: Obtém o elemento com id="paragrafo" e o armazena em uma variável.
botao.addEventListener("click", function() {...}): Adiciona um ouvinte de eventos que executa a função fornecida quando o botão é clicado.
paragrafo.textContent = "Texto alterado com sucesso!";: Altera o texto do parágrafo para o novo valor quando o botão é clicado.
