
/*
 * ÁREA QUE CRIA AS VARIÁVEIS PARA OS CAMPOS DO HTML
 * 
 * A palavra reservada "const" é utilizada para definição das variáveis de valor constante no Javascript
 * 
 * Por quê não usar a palavra reservada "let"?
 * 
 * 1. Objetos constantes no Javascript não podem receber outros valores (imutabilidade);
 * 2. O objeto constante não pode receber outros valores mas suas propriedades sim (usabilidade);
 * 3. Deixar uma variável constante deixa o código mais legível, pois dessa maneira somos forçados usar variáveis para cada estado de um dado (sem ficar reutilizando uma variável para tudo!)
 * 
 * Através do objeto "document", é possível obter uma representação em
 * memória do documento HTML
 * E com a função "querySelector()" é possível identificar um elemento 
 * específico dentro do DOM
 * Usa-se o caractere "#" quando a identificação for por "id"
 */
const availableValue = document.querySelector("#available-value");
const shoppingValue = document.querySelector("#shopping-value");
const resumeValue = document.querySelector("#total-value");

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
