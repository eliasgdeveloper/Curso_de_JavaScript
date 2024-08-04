// Espera o carregamento completo do conteúdo da página antes de adicionar funcionalidades
document.addEventListener("DOMContentLoaded", function() {

    // Obtém o elemento com id "mudarTexto" e o armazena na variável mudarTexto
    const mudarTexto = document.getElementById("mudarTexto");
    
    // Obtém o elemento com id "mudarEstilo" e o armazena na variável mudarEstilo
    const mudarEstilo = document.getElementById("mudarEstilo");
    
    // Obtém o elemento com id "adicionarElemento" e o armazena na variável adicionarElemento
    const adicionarElemento = document.getElementById("adicionarElemento");
    
    // Obtém o elemento com id "removerElemento" e o armazena na variável removerElemento
    const removerElemento = document.getElementById("removerElemento");
    
    // Obtém o elemento com id "paragrafo" e o armazena na variável paragrafo
    const paragrafo = document.getElementById("paragrafo");

    // Adiciona um evento de clique ao botão "mudarTexto"
    mudarTexto.addEventListener("click", function() {
        // Altera o texto do parágrafo quando o botão é clicado
        paragrafo.textContent = "Texto alterado com sucesso!";
    });

    // Adiciona um evento de clique ao botão "mudarEstilo"
    mudarEstilo.addEventListener("click", function() {
        // Altera o estilo do parágrafo quando o botão é clicado
        paragrafo.style.color = "blue"; // Muda a cor do texto para azul
        paragrafo.style.fontSize = "24px"; // Muda o tamanho da fonte para 24 pixels
    });

    // Adiciona um evento de clique ao botão "adicionarElemento"
    adicionarElemento.addEventListener("click", function() {
        // Cria um novo elemento <p> (parágrafo)
        const novoParagrafo = document.createElement("p");
        // Define o texto do novo parágrafo
        novoParagrafo.textContent = "Novo parágrafo adicionado!";
        // Adiciona o novo parágrafo ao final do corpo do documento
        document.body.appendChild(novoParagrafo);
    });

    // Adiciona um evento de clique ao botão "removerElemento"
    removerElemento.addEventListener("click", function() {
        // Seleciona o último parágrafo adicionado
        const ultimoParagrafo = document.querySelector("body p:last-of-type");
        // Verifica se há um parágrafo adicional e se não é o parágrafo original
        if (ultimoParagrafo && ultimoParagrafo !== paragrafo) {
            // Remove o último parágrafo adicionado
            ultimoParagrafo.remove();
        }
    });
});
