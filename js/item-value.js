
/*
 * ÁREA QUE CRIA AS VARIÁVEIS PARA OS CAMPOS DO HTML
 */
let itemQuantity = document.getElementsByName("item-quantity");
let itemValue = document.getElementsByName("item-value");
let itemTotal = document.getElementsByName("item-total");

/**
 * FUNÇÃO QUE CALCULA O VALOR TOTAL DO ITEM
 * @param {int} itemIndex posição (index) do ítem a ser atualizado
 * @returns void
 */
function updateTotal(itemIndex){
    itemTotal[itemIndex].value = 
            itemQuantity[itemIndex].value * itemValue[itemIndex].value;
    shoppingTotal(); // Atualiza o total das compras
}

/*
 * Percorre todos os itens da lista de compras
 * Adiciona a função que atualiza o valor total do item
 * Através da variável index é possível identificar a posição de cada
 */
for(let index = 0; index < itemQuantity.length; index = index + 1){
    /*
     * Não sendo possível passar parâmetros através da chamada da função
     * "addEventListener", fez-se necessário o uso de funções anônimas para tal
     */
    itemQuantity[index].addEventListener("input", function(){
        updateTotal(index);
    });
    itemValue[index].addEventListener("input", function(){
        updateTotal(index);
    });
}