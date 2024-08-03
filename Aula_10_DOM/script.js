// Explicação do código JavaScript:
// Este script espera o carregamento completo do conteúdo da página antes de adicionar funcionalidades.
// Ele seleciona elementos HTML e adiciona um manipulador de eventos ao botão para alterar o texto do parágrafo.

document.addEventListener("DOMContentLoaded", function() {
    
    // Obtém o elemento com id "botao" e o armazena na variável botao
    var botao = document.getElementById("botao");
    
    // Obtém o elemento com id "paragrafo" e o armazena na variável paragrafo
    var paragrafo = document.getElementById("paragrafo");
    
    // Adiciona um evento de clique ao botão
    botao.addEventListener("click", function() {
        // Altera o texto do parágrafo quando o botão é clicado
        paragrafo.textContent = "Texto alterado com sucesso!";
    });
});
