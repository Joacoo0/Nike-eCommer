const shopProductos = document.getElementById ("shop")
const verCarrito = document.getElementById ("verCarrito")
const modalContaner = document.getElementById("modal-content")

const mensaje = (mensaje) =>{
    Toastify({
        text: mensaje,
        duration: 1500,
        style: {
            background: "#212121",
            color: "#fff",
            fontFamily: "monospace",
        },
        
        }).showToast();
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || []
//recorre productos y hace las tarjetas

const getProducts = async () => {
    const response = await fetch("../camisetas.json")
    const info = await response.json()
    

    info.forEach((product)=>{
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
                nombre : product.nombre,
                precio : product.precio,
            })
            console.log(carrito)
            local()
            mensaje("Producto agregado al carrito") 
        })
    })
}
getProducts()
