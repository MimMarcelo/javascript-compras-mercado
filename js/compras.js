/**
 * FUNÇÃO QUE ADICIONA EVENT LISTENNER NOS BUTTONS PARA REMOVER ITENS
 *
 * A função adiciona o eventListener de "click" no button de remover o item especificado
 *
 * @param HTMLElement item
 * @returns void
 */
function addEventRemoverItem(item) {

    const btnRemover = item.querySelector(".btn-remover");
    btnRemover.addEventListener("click", () => {

        const tabelaDeItens = document.querySelector("#compras-container tbody");
        const itens = tabelaDeItens.children;
        const qntItens = itens.length;

        if (qntItens > 1) {
            // remove a linha ("tr") em que o button clicado está
            btnRemover.parentNode.parentElement.remove();
        } else {
            alert("São necessários um ou mais itens.");
        }
    });
}

/**
 * Inicia adicionando o event para o primeiro item. Posteriormente, assim que novos itens forem adicionados, a função de adicionarItem irá chamar a função de addEventRemoverItem para cada um
 */
const primeiroItem = document.querySelector("#compras-container tbody").firstElementChild;
addEventRemoverItem(primeiroItem);

// guarda o elemento responsável por acionar o evento de adicionar itens
const btnAdicionarItem = document.querySelector("#btn-adicionar-item");

/**
 * 
 * FUNÇÃO RESPONSÁVEL POR ADICIONAR ITENS
 * 
 * Ao acionar o eventListener do tipo "click", a variável adicionarItem invocará o seu valor (uma função) 
 * 
 * @returns void
 */
const adicionarItem = () => {
    const tabelaDeItens = document.querySelector("#compras-container tbody");

    // pega o ultimo item e faz um clone
    const novoItem = tabelaDeItens.lastElementChild.cloneNode(true);

    // modifica para valores padrões
    novoItem.querySelector(".item-nome").value = "";
    novoItem.querySelector(".item-qnt").value = 0;
    novoItem.querySelector(".item-v-unitario").value = 0.00;
    novoItem.querySelector(".item-v-total").innerHTML = 0.00;

    // adiciona um novo elemento na última posição
    tabelaDeItens.appendChild(novoItem);

    // adicionada o event de remover item para o novo item
    addEventRemoverItem(novoItem);
}

btnAdicionarItem.addEventListener("click", adicionarItem)