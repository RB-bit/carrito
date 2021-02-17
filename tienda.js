

const stockProduct = [
    {id: "1", marca: "Nike", modelo: "Air Jordan", talle: 43, precio: 500},
    {id: "2", marca: "Adidas", modelo: "Sport", talle: 44, precio: 450},
    {id: "3", marca: "Puma", modelo: "Borussia", talle: 42, precio: 400},
    {id: "4", marca: "Vans", modelo: "Old School", talle: 41, precio: 550},
    {id: "5", marca: "Reebook", modelo: "Royal", talle: 42, precio: 450},
    {id: "6", marca: "Vans", modelo: "Eva", talle: 43, precio: 475}
]

let carritoDeCompras = []
const contenedorProductos = document.getElementById('store');
const contenedorCarrito = document.getElementById('carrito-contenedor')


stockProduct.forEach((productoNuevo)=>{
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

function agregarAlCarrito(id) {
    let productoAgregar = stockProduct.filter((el) => el.id == id)[0]
    carritoDeCompras.push(productoAgregar)
    console.log(carritoDeCompras)
    
    let div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML = `
            <p>${productoAgregar.marca}</p>
            <p>$${productoAgregar.precio}</p>
            <button id="eliminar${productoAgregar.id}"><i class="fas fa-trash-alt"></i></button>
        `
    contenedorCarrito.appendChild(div)
    let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

    botonEliminar.addEventListener('click', ()=>{ 
         botonEliminar.parentElement.remove()
         carritoDeCompras = carritoDeCompras.filter((el) => el.id != productoAgregar.id)
    })
}


