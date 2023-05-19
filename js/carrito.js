const mensajeBoton = (mensajeBoton) => {
    Toastify({
      text: mensajeBoton,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #111111, #313131)",
      },
      onClick: function () {}
    }).showToast()
  }
  
  const eliminarProducto = (id) => {
    const foundIndex = carrito.findIndex((element) => element.id === id)
    if (foundIndex !== -1) {
      carrito.splice(foundIndex, 1)
      carritoCounter()
      pintarCarrito()
      local()
    }
  }
  
  const vaciarCarrito = () => {
    carrito = []
    pintarCarrito()
    local()
  }
  
  const pintarCarrito = () => {
    modalContaner.innerHTML = ""
    modalContaner.style.display = "flex"
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
      <h1 class="modal-header-title">Carrito</h1>
    `
    modalContaner.append(modalHeader)
  
    const modalButton = document.createElement("button")
    modalButton.innerText = "❌"
    modalButton.className = "modal-header-button"
    modalButton.addEventListener("click", () => {
      modalContaner.style.display = "none"
    })
    modalHeader.append(modalButton)
  
    carrito.forEach((product) => {
      let carritoContent = document.createElement("div")
      carritoContent.className = "modal-content2"
      carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio}$</p>
        <p class="cantidad">Cantidad: ${product.cantidad}</p>
        <p>Total: ${product.cantidad * product.precio}</p>
        <span class="eleminarProducto">❌</span>
      `
      modalContaner.append(carritoContent)
      console.log(carrito.lenght)
      let eliminar = carritoContent.querySelector(".eleminarProducto")
      eliminar.addEventListener("click", () => {
        eliminarProducto(product.id)
      })
    })
  
    const total = carrito.reduce(
      (acc, el) => acc + el.precio * el.cantidad,
      0
    )
  
    const totalBuy = document.createElement("div")
    totalBuy.className = "total-content"
    totalBuy.innerHTML = `total a pagar: ${total} $`
    modalContaner.append(totalBuy)
  
    const comprarBoton = document.createElement("button")
    comprarBoton.innerText = "Comprar"
    comprarBoton.className = "boton-comprar"
    comprarBoton.addEventListener("click", () => {
      mensajeBoton("Muchas gracias por la compra")
      vaciarCarrito()
    })
    modalContaner.append(comprarBoton)
    carritoCounter()
  }
  
  verCarrito.addEventListener("click", pintarCarrito)
  
  const carritoCounter = () => {
    cantidadCarrito.style.display = "block"
    const carritoLength = carrito.length
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
  }
  
  const local = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }