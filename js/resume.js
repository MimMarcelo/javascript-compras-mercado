
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

/**
 * FUNÇÃO QUE CÁLCULA O VALOR TOTAL DAS COMPRAS
 * 
 * Utiliza uma variável global (itemTotal) definida no arquivo item-value.js
 * 
 * O resultado desse cálculo é atualizado no campo de "Valor das compras"
 * @returns void
 */
function shoppingTotal() {
    let total = 0;
    // Percorre todos os itens da lista
    /*
     * Como desenvolvido no vídeo:
     * "Uso de parâmetros em funções e laço for em Javascript"
     * 
    for(let index = 0; index < itemTotal.length; index = index + 1){
        // Adiciona o valor do item ao total
        total = total + parseFloat(itemTotal[index].value);
    }
     */
    // Versão mais compacta do laço
    for(let index = 0; index < itemTotal.length; index++){
        // Adiciona o valor do item ao total
        total += parseFloat(itemTotal[index].value);
    }
    
    shoppingValue.value = total;
    resumeTotal(); // Atualiza o valor restante
}

// Definição dos eventos do DOM que acionarão funções
//document.querySelector("#available-value").addEventListener("focusout", resumeTotal);
availableValue.addEventListener("input", resumeTotal);
