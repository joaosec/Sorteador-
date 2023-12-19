const addItemButton = document.getElementById('addItem');
const generateButton = document.getElementById('generate');
const itemsListDiv = document.getElementById('itemsList');
const itemInput = document.getElementById('item');

const itemsArray = [];

addItemButton.addEventListener('click', addItem);
generateButton.addEventListener('click', generateItem);
itemInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

function addItem() {
    const newItem = itemInput.value.trim();

    if (newItem) {
        itemsArray.push(newItem);
        updateItemsList();
        itemInput.value = ''; 
    }
}

function generateItem() {
    if (itemsArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * itemsArray.length);
        const result = itemsArray[randomIndex];
        document.querySelector('#result > span').textContent = result;
    } else {
        document.querySelector('#result > span').textContent = 'Insira um item';
    }
}

function updateItemsList() {
    itemsListDiv.innerHTML = '<strong>Itens:</strong><br>';
    itemsArray.forEach(item => {
        itemsListDiv.innerHTML += `- ${item}<br>`;
    });
}
