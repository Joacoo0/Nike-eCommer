let nombreApellido
let dni
let fechaNacimeinto

function ingreseDatos(){
    do{
        nombreApellido = prompt("Ingrese su nombre e apellido")
    }while (nombreApellido == ""){
        alert ("Bienvenido " + " " + nombreApellido + " "+ "podes apretar el boton de aceptar para sacar un turno")
    }

    do{
    dni = prompt ("Ingrese su dni")
    }while(isNaN(dni))

    do{
    fechaNacimeinto = prompt ("ingrese su fecha de nacimiento")
    }while(isNaN(fechaNacimeinto))
}
ingreseDatos()

let repeat = true
function sacarTurno(){
    const dia = prompt ("ingrese el dia del turno")
    const hora = prompt ("Ingrese la hora del turno")
    const pago = prompt ("Ingrese la forma de pago / efectivo - mercado pago")
    alert ("Gracias "+ nombreApellido + " sacaste turno para el dia " + dia + " para la hora " + hora + " y pagas con " + pago)
}

while (repeat){
    sacarTurno()
    repeat = confirm ("Desea sacar otro turno?")
}