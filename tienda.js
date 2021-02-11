


// Selecciono la clase del botón de cada card y/o producto
let addToShoppingCartButtons = document.querySelectorAll ('.addToCart');

//creo el evento click en la variable anterior y recorro todos esas clases con un forEach
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked)
});

let shoppingCartItemsContainer = document.querySelector (
    'shoppingCartItemsContainer'
    );

// Tomo el evento anterior, lo guardo en una variable y luego traigo todos los items cercanos con el método closest
function addToCartClicked (event) {
    let button = event.target;
    let item = button.closest('.item');

// Selecciono cuáles son los items que quiero y que contenido de cada uno
    let itemTitle = item.querySelector ('.item-title').textContent;
    let itemPrice = item.querySelector ('.item-price').textContent;
    let itemImage = item.querySelector ('.item-image').src;

    addItemToShoopingCart (itemTitle, itemPrice, itemImage);
}

function addItemToShoopingCart(itemTitle, itemPrice, itemImage) {
   let shoppingCartRow = document.createElement('div');
   let shoppingCartContent = `
   <div class="row shoppingCartItem">
        <div class="col-6">
        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img src=${itemImage} class="shopping-cart-image">
            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}
            </h6>
        </div>
        </div>
        <div class="col-2">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
        </div>
        </div>
        <div class="col-4">
        <div
            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                value="1">
            <button class="btn btn-danger buttonDelete" type="button">X</button>
        </div>
        </div>
    </div>
    `;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow); 
}




