const addItemButton = document.getElementById('add-item');
const itemList = document.getElementById('item-list');
const totalValueSpan = document.getElementById('total-value');

let items = [];
let total = 0;

addItemButton.addEventListener('click', addItem);

function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemPrice = parseFloat(document.getElementById('item-price').value);
    const itemQuantity = parseInt(document.getElementById('item-quantity').value);

    if (itemName && !isNaN(itemPrice) && !isNaN(itemQuantity) && itemQuantity > 0) {
        const item = {
            name: itemName,
            price: itemPrice,
            quantity: itemQuantity
        };

        items.push(item);
        total += itemPrice * itemQuantity;

        renderList();
        document.getElementById('item-name').value = '';
        document.getElementById('item-price').value = '';
        document.getElementById('item-quantity').value = 1;
        totalValueSpan.textContent = total.toFixed(2);
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function renderList() {
    itemList.innerHTML = '';

    items.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity} = R$ ${(item.price * item.quantity).toFixed(2)}</span>
            <button data-index="${index}">Deletar</button>
        `;
        itemList.appendChild(listItem);
    });

    // Anexar o evento de clique *depois* de adicionar o botão ao DOM
    const deleteButtons = itemList.querySelectorAll('button[data-index]');
    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteItem);
    });
}

function deleteItem(event) {
    const index = parseInt(event.target.dataset.index);
    total -= items[index].price * items[index].quantity;
    items.splice(index, 1);
    renderList();
    totalValueSpan.textContent = total.toFixed(2);
}
