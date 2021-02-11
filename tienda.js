

// function Auto(marca, modelo, anio, estado, precio){
//     this.marca = marca;
//     this.modelo = modelo;
//     this.anio = anio;
//     this.estado = estado;
//     this.precio = precio;
// }

// function AutoEnCarrito (marca, modelo, precio){
//     this.marca = marca;
//     this.modelo = modelo;
//     this.precio = precio;
// }

// let autosEnStock = [
//     FordFocus = new Auto ('Ford', 'Focus', 2021, '0km', '$5000'),
//     ChevroletPrisma = new Auto ('Chevrolet', 'Prisma', 2019, '15mil Kilómetros', '$4000'),
//     VWGol = new Auto ('Volskwagen', 'Gol', 2018, '77mil Kilómetros', '4500'),
//     VWAmarok = new Auto ('Volkwagen', 'Amarok', 2020, '56mil Kilómetros', '$10.000')
// ]


// Selecciono la clase del botón de cada card y/o producto
let addToShoppingCartButtons = document.querySelectorAll ('.addToCart');

//creo el evento click en la variable anterior y recorro todos esas clases con un forEach
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked)
});


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
    console.log(itemTitle, itemPrice, itemImage)
    
}




