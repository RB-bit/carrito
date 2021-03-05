
//Array de productos
const stockProduct = [
    {id: "1", marca: "Nike", modelo: "Air Jordan", talle: 43, precio: 550},
    {id: "2", marca: "Adidas", modelo: "Sport", talle: 44, precio: 350},
    {id: "3", marca: "Puma", modelo: "Borussia", talle: 42, precio: 400},
    {id: "4", marca: "Vans", modelo: "Old School", talle: 41, precio: 550},
    {id: "5", marca: "Reebook", modelo: "Royal", talle: 42, precio: 450},
    {id: "6", marca: "Vans", modelo: "Eva", talle: 43, precio: 475}
]
//SELECTORES 
//Array vacío para productos en carrito
let carritoDeCompras = []
//Sección de compra
const contenedorProductos = document.getElementById('store');
// Carrito
const contenedorCarrito = document.getElementById('carrito-contenedor')
//Contador carrito en boton que abre modal
const contadorCarrito = document.getElementById('contadorCarrito')
//Actualizar Total
const precioTotal = document.getElementById('precioTotal')
//Filtro
const filtroPrecio = document.getElementById('selecPrecio')



filtroPrecio.addEventListener('change', ()=>{
    console.log(filtroPrecio.value)
    switch(filtroPrecio.value){
        case "All":
            mostrarProductos(stockProduct);
            break;
        case "Expensive":
            mostrarProductos(stockProduct.filter((el) => el.precio >= 550));
            break;
        case "Standart":
            mostrarProductos(stockProduct.filter((el) => el.precio < 550 ));
            break;
        case "Cheap":
            mostrarProductos(stockProduct.filter((el) => el.precio <= 400));
            break;
    }
})

mostrarProductos(stockProduct)
//Función que recorre el array de productos en stock y crea la card de cada uno.
function mostrarProductos(array) {
    contenedorProductos.innerHTML = ''
    array.forEach((productoNuevo)=>{
        let div = document.createElement('div')
        div.className = "producto"
        div.innerHTML += `
                <div class="item shadow mb-4">
                    <h3 class="item-title">${productoNuevo.marca}</h3>
                    <h4 class="item-subtitle">${productoNuevo.modelo}</h4>
                    <img class="item-image" src="./img/airJordan.jpeg">
                        <div class="item-details">
                            <h4 class="item-price">$${productoNuevo.precio}</h4>
                            <button id="boton${productoNuevo.id}" class="item-button btn btn-primary addToCart">Agregar <i class="fas fa-shopping-cart"></i></button>
                        </div>
                    </div>`

        contenedorProductos.appendChild(div)

        let boton = document.getElementById(`boton${productoNuevo.id}`)
        
        boton.addEventListener('click', ()=>{
            agregarAlCarrito(productoNuevo.id)
        })
    })
}


// agrega cada producto seleccionado al carrito con los datos elegidos
function agregarAlCarrito(id) {
    let productoAgregar = stockProduct.filter((el) => el.id == id)[0]
    carritoDeCompras.push(productoAgregar)
    actualizarCarrito()
    
    let div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML = `
            <p class="productoEnCarrito-marca">${productoAgregar.marca}</p>
            <p class="productoEnCarrito-precio">$${productoAgregar.precio}</p>
            <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
            value="1">
            <button class="productoEnCarrito-boton" id="eliminar${productoAgregar.id}"><i class="fas fa-trash-alt"></i></button>
        `
    contenedorCarrito.appendChild(div)
    let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

    botonEliminar.addEventListener('click', ()=>{ 
        botonEliminar.parentElement.remove()
        carritoDeCompras = carritoDeCompras.filter((el) => el.id != productoAgregar.id)
        actualizarCarrito()
    })
    
    let cantidadProductoEnCarrito = document.getElementById('productoEnCarrito-cantidad')
    
    cantidadProductoEnCarrito.addEventListener('change', () => console.log('change'))
}



function actualizarCarrito() {
    contadorCarrito.innerHTML = carritoDeCompras.length
    precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)
}

//onClick modal login con jQuery
$(document).ready(function()
{
    document.getElementById('modal-login').click()
})

//Login Modal - LocalStorage + JSON
var nuevoUsuario = [];

function agregarUsuario(pnombre){
    
    var nuevoUsuarioEnLogin = {
        nombre : pnombre
    };

    console.log(nuevoUsuarioEnLogin);
    nuevoUsuario.push(nuevoUsuarioEnLogin);
    storageUsuario(nuevoUsuario);
}

const usuarioBtn = document.querySelector('#loginModal-boton');
usuarioBtn.addEventListener('click', guardarUsuario);

function guardarUsuario (){

    var usuarioNombre = document.querySelector('#inputUsuario').value;

    agregarUsuario(usuarioNombre);
}

function storageUsuario(nombreUsuario){
    localStorage.setItem('NuevoUsuario', JSON.stringify(nombreUsuario));
}

//Benvenida usuario luego de modal

// function bienvenidaUsuario(){
//     return usuariosLogin
// }


// function bienvenidaUsuarioDOM(){
//     var usuario = bienvenidaUsuario;
//     const textoBienvenida = document.querySelector('#bienvenidaUsuarioID')

//     textoBienvenida.innerHTML = `
//         <h1 class="text-center">Bienvenid@ ${usuariosLogin.pnombre}</h1>
//         <hr>
//         `

//     let div = document.createElement('div')
//     textoBienvenida.appendChild(div)
// }
// bienvenidaUsuarioDOM()
