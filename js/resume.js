
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

function shoppingTotal() {
    let total = 0;
    for(let index = 0; index < itemTotal.length; index = index + 1){
        total = total + parseFloat(itemTotal[index].value);
    }
    shoppingValue.value = total;
    resumeTotal();
}

// Definição dos eventos do DOM que acionarão funções
//document.querySelector("#available-value").addEventListener("focusout", resumeTotal);
availableValue.addEventListener("input", resumeTotal);
