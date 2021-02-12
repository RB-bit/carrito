

function zapatilla (marca, modelo, talle, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.talle = talle;
    this.precio = precio;
}

const stockProduct = [   
    new zapatilla ("Nike", "Air Jordan", 43, "$500"),
    new zapatilla  ("Adidas", "Sport", 44, "$450"),
    new zapatilla ("Puma", "Borussia", 42, "$400"),
    new zapatilla ("Vans", "Old School", 41, "$550"),
    new zapatilla ("Reebok", "Royal", 42, "$450"),
    new zapatilla ("Vans", "Eva", 43, "475"),
];

function mostrarStock(){
    for (const zapas of stockProduct){
        let zapasList = document.getElementById ('store');
        zapasList.className = "productos"
        let elementoHtml = document.createElement ('article');
        elementoHtml.innerHTML = `

                <div class="col-md-4">
                <div class="item shadow mb-4">
                    <h3 class="item-title">${zapatilla.marca}</h3>
                    <img class="item-image" src="./img/airJordan.jpeg">
                        <div class="item-details">
                            <h4 class="item-price">${zapatilla.precio}</h4>
                            <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                        </div>
                    </div>
                </div>

        `;
        zapasList.appendChild(elementoHtml)}
}

mostrarStock();
// for (const zapas of stockProduct){
//     let zapasList = document.getElementById ('store');
//     let elementoHtml = document.createElement ('article');
//     elementoHtml.innerHTML = `<div class="col-12 col-md-3">
//     <div class="item shadow mb-4">
//         <h3 class="item-title">${zapatilla.marca}</h3>
//         <img class="item-image" src="./img/airJordan.jpeg">
//             <div class="item-details">
//                 <h4 class="item-price">${zapatilla.precio}</h4>
//                 <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
//             </div>
//         </div>
//     </div>`;
//     zapasList.appendChild(elementoHtml)
// }


// zapasList.appendChild(fragment)

// function mostrarStock(){
//     stockProduct.forEach((stockProduct) => {
//        var stockHTML = document.createElement("article")
//         stockHTML.className = 'productos';

//         stockHTML.innerHTML = `
//         <div class="col-12 col-md-4">
//                 <div class="item shadow mb-4">
//                     <h3 class="item-title">${zapatilla.marca}</h3>
//                     <img class="item-image" src="./img/airJordan.jpeg">

//                     <div class="item-details">
//                         <h4 class="item-price">${zapatilla.precio}</h4>
//                         <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
//                     </div>
//                 </div>
//         </div>
//         `;
        
//         document.getElementById("store").parent.appendChild(stockHTML);
//     });
// }






