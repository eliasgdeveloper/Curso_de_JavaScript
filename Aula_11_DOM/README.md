# Curso_de_JavaScript
Curso de Java Script - Professor Elias Gomes

Explicação detalhada:

HTML (index.html)
<!DOCTYPE html>: Declaração do tipo de documento. Informa ao navegador que o documento é um HTML5.

<html lang="pt-br">: Início do documento HTML, com o atributo "lang" definindo o idioma do conteúdo como português do Brasil.

<head>: Seção que contém metadados sobre o documento.

<meta charset="UTF-8">: Define o conjunto de caracteres como UTF-8, que suporta caracteres especiais, como acentuações.

<meta name="viewport" content="width=device-width, initial-scale=1.0">: Configura a visualização para dispositivos móveis, ajustando a escala da página para garantir que seja exibida corretamente em dispositivos de diferentes tamanhos.

<title>Exemplo de DOM</title>: Título da página que aparece na aba do navegador.

<link rel="stylesheet" href="styles.css">: Link para o arquivo CSS que contém a estilização da página.

<body>: Início do corpo do documento HTML, onde o conteúdo visível da página é definido.

<h1>Exemplo de DOM</h1>: Título principal da página.

<p id="paragrafo">Clique nos botões para interagir com a página.</p>: Parágrafo com id "paragrafo" para manipulação via JavaScript.

<button id="mudarTexto">Mudar Texto</button>: Botão para mudar o texto do parágrafo.

<button id="mudarEstilo">Mudar Estilo</button>: Botão para mudar o estilo do parágrafo.

<button id="adicionarElemento">Adicionar Elemento</button>: Botão para adicionar um novo elemento.

<button id="removerElemento">Remover Elemento</button>: Botão para remover um elemento.

<script src="script.js"></script>: Link para o arquivo JavaScript que contém a lógica de interação com o DOM.

</body>: Fim do corpo do documento HTML.

</html>: Fim do documento HTML.

JavaScript (script.js)
document.addEventListener("DOMContentLoaded", function() { ... });: Espera o carregamento completo do conteúdo da página antes de adicionar funcionalidades.

const mudarTexto = document.getElementById("mudarTexto");: Obtém o elemento com id "mudarTexto" e o armazena na variável mudarTexto.

const mudarEstilo = document.getElementById("mudarEstilo");: Obtém o elemento com id "mudarEstilo" e o armazena na variável mudarEstilo.

const adicionarElemento = document.getElementById("adicionarElemento");: Obtém o elemento com id "adicionarElemento" e o armazena na variável adicionarElemento.

const removerElemento = document.getElementById("removerElemento");: Obtém o elemento com id "removerElemento" e o armazena na variável removerElemento.

const paragrafo = document.getElementById("paragrafo");: Obtém o elemento com id "paragrafo" e o armazena na variável paragrafo.

mudarTexto.addEventListener("click", function() { ... });: Adiciona um evento de clique ao botão "mudarTexto".

paragrafo.textContent = "Texto alterado com sucesso!";: Altera o texto do parágrafo quando o botão "mudarTexto" é clicado.

mudarEstilo.addEventListener("click", function() { ... });: Adiciona um evento de clique ao botão "mudarEstilo".

paragrafo.style.color = "blue";: Muda a cor do texto do parágrafo para azul quando o botão "mudarEstilo" é clicado.

paragrafo.style.fontSize = "24px";: Muda o tamanho da fonte do parágrafo para 24 pixels quando o botão "mudarEstilo" é clicado.

adicionarElemento.addEventListener("click", function() { ... });: Adiciona um evento de clique ao botão "adicionarElemento".

const novoParagrafo = document.createElement("p");: Cria um novo elemento de parágrafo.

novoParagrafo.textContent = "Novo parágrafo adicionado!";: Define o texto do novo parágrafo.

document.body.appendChild(novoParagrafo);: Adiciona o novo parágrafo ao final do corpo do documento.

removerElemento.addEventListener("click", function() { ... });: Adiciona um evento de clique ao botão "removerElemento".

const ultimoParagrafo = document.querySelector("body p
");: Seleciona o último parágrafo adicionado ao corpo do documento.

if (ultimoParagrafo && ultimoParagrafo !== paragrafo) { ... }: Verifica se há um parágrafo adicional e se não é o parágrafo original.

ultimoParagrafo.remove();: Remove o último parágrafo adicionado.

CSS (styles.css)
body: Define a fonte padrão e margens para o corpo da página.

font-family: Arial, sans-serif;: Define a fonte como Arial, ou a fonte padrão sans-serif se Arial não estiver disponível.

margin: 20px;: Define uma margem de 20 pixels ao redor do corpo da página.

padding: 0;: Remove qualquer preenchimento adicional do corpo da página.

background-color: #f0f0f0;: Define uma cor de fundo cinza claro para o corpo da página.

h1: Estiliza o título principal da página.

color: #333;: Define a cor do texto como um cinza escuro.

text-align: center;: Centraliza o texto horizontalmente.

#paragrafo: Estiliza o parágrafo com id "paragrafo".

font-size: 18px;: Define o tamanho da fonte como 18 pixels.

color: #555;: Define a cor do texto como um cinza médio.

text-align: center;: Centraliza o texto horizontalmente.

margin-bottom: 20px;: Adiciona uma margem inferior de 20 pixels.

button: Estiliza os botões.

display: block;: Faz com que o botão se comporte como um bloco, ocupando a largura disponível.

margin: 10px auto;: Centraliza o botão horizontalmente na página.

padding: 10px 20px;: Adiciona 10 pixels de preenchimento acima e abaixo e 20 pixels à esquerda e à direita.

font-size: 16px;: Define o tamanho da fonte como 16 pixels.

cursor: pointer;: Muda o cursor para uma mãozinha quando passa sobre o botão.

background-color: #007bff;: Define a cor de fundo do botão como azul.

color: white;: Define a cor do texto do botão como branca.

border: none;: Remove a borda padrão do botão.

border-radius: 5px;: Adiciona bordas arredondadas de 5 pixels ao botão.

button
: Estiliza os botões quando o mouse passa sobre eles.

background-color: #0056b3;: Muda a cor de fundo para azul escuro quando o mouse passa sobre o botão.