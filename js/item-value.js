let itemQuantity = document.getElementsByName("item-quantity");
let itemValue = document.getElementsByName("item-value");
let itemTotal = document.getElementsByName("item-total");

function updateTotal(itemIndex){
    itemTotal[itemIndex].value = 
            itemQuantity[itemIndex].value * itemValue[itemIndex].value;
    shoppingTotal();
}

for(let index = 0; index < itemQuantity.length; index = index + 1){
    itemQuantity[index].addEventListener("input", function(){
        updateTotal(index);
    });
    itemValue[index].addEventListener("input", function(){
        updateTotal(index);
    });
}