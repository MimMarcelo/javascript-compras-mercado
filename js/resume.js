
/*
 * ÁREA QUE CRIA AS VARIÁVEIS PARA OS CAMPOS DO HTML
 * 
 * A palavra reservada "let" é utilizada para definição das variáveis Javascript
 * 
 * Através do objeto "document", é possível obter uma representação em
 * memória do documento HTML
 * E com a função "querySelector()" é possível identificar um elemento 
 * específico dentro do DOM
 * Usa-se o caractere "#" quando a identificação for por "id"
 */
let availableValue = document.querySelector("#available-value");
let shoppingValue = document.querySelector("#shopping-value");
let resumeValue = document.querySelector("#total-value");

/**
 * FUNÇÃO QUE CALCULA A DIFERENÇA ENTRE O VALOR DISPONÍVEL E O VALOR DAS COMPRAS
 * 
 * O resultado dessa diferença é atualizado no campo de "Valor restante"
 * @returns void
 */
function resumeTotal() {
    resumeValue.value = availableValue.value - shoppingValue.value;
}

// Definição dos eventos do DOM que acionarão funções
//document.querySelector("#available-value").addEventListener("focusout", resumeTotal);
availableValue.addEventListener("input", resumeTotal);
