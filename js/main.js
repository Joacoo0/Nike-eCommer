const shopProductos = document.getElementById ("shop")
const verCarrito = document.getElementById ("verCarrito")
const modalContaner = document.getElementById("modal-content")

// mis productos
const productos = [
    {
        id: 1,
        nombre: "Air jordan 1 Mid",
        precio: 200,
        img: `img/jordan-rojas.webp`,
    },
    {
        id: 2,
        nombre: "Nike air jordan negras y blancas",
        precio: 190,
        img: `img/nike-air-jordan-1-negras-y-blancas.jpg`,
    },
    {
        id: 3,
        nombre: "Air jordan 1 Mid",
        precio: 210,
        img: `img/jordan-girse.jpg`,
    },
    {
        id: 4,
        nombre: "jordan 1 retro high white",
        precio: 250,
        img: `img/jordan-celestes.webp`,
    }
]

let carrito = JSON.parse(localStorage.getItem("carrito")) || []
//recorre productos y hace las tarjetas
productos.forEach((product)=>{
    let content = document.createElement("div") // crea un elemento html
    content.className = "targeta" // le crea la clase targeta al elemtno html
    content.innerHTML = ` 
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class = "precio">${product.precio}$ </p>
    `
    shopProductos.append(content)
    let comprar = document.createElement("button") 
    comprar.innerText = "Comprar"//NOMBRE
    comprar.className = "comprar"//CLASS

    content.append(comprar)

    comprar.addEventListener("click", () =>{
        carrito.push({
            id : product.id,
            img : product.img,
            nombre: product.nombre,
            precio : product.precio,
        })
        console.log(carrito)
        local ()
    })
})
// funcion de ver el carrito
verCarrito.addEventListener("click", () =>{
    modalContaner.innerHTML = ""
    modalContaner.style.display = "flex"
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class = "modal-header-title">Carrito</h1>

    `
    modalContaner.append(modalHeader)
    const modalButton = document.createElement("button")
    modalButton.innerText = "❌"
    modalButton.className = "modal-header-button"

    modalButton.addEventListener("click", () =>{
        modalContaner.style.display = "none"
    })

    modalHeader.append(modalButton)


    carrito.forEach((product)=>{
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content2"
        carritoContent.innerHTML = `
        <img src= "${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio}$</p>
        `
        modalContaner.append(carritoContent)
    
    })

    const total = carrito.reduce((acc, el) => acc + el.precio, 0)

    const totalBuy = document.createElement("div")
    totalBuy.className= "total-content"
    totalBuy.innerHTML = `total a pagar: ${total} $`
    modalContaner.append(totalBuy)

})
// local storage
const local = () =>{
    localStorage.setItem("carrito", JSON.stringify (carrito))
}

