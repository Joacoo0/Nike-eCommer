const zapatillas = []

alert ("!Hola¡ cual es su zapatilla nike favorita?")

class zapatilla {
  constructor (modelo, talle, edicion){
    this.modelo = modelo
    this.talle = talle
    this.edicion = edicion
  }
}
let continuar = true

const buscarZapatilla = () =>{
    let modelo
    let talle
    let edicion

    do{
        modelo = prompt("Cual modelo de zapatilla es su favorito")
    }while(""){

    }
    do{
        talle = prompt("cual es su talle?")
    }while(isNaN("")){

    }
    do{
        edicion = prompt("cual es su edicion favorita")
    }while(""){

    }

    const zapa = new zapatilla (modelo,talle,edicion)
    alert ("su eleccion fue:\n" + zapa.modelo + " " + "modelo\n" + zapa.talle + " " + "talle\n" + zapa.edicion + " " + "edicion\n")

    zapatillas.push(zapa)
    console.log (zapatillas)

    alert("Usted va agregando" + " " + zapatillas.length + " " + "zapatilla/s")
}


while(continuar){
    buscarZapatilla()
    continuar = confirm ("desea agregar otra zapatilla?")
}

alert ("has añadido" + " " + zapatillas.length + " zapatillas correctamente")
alert ("!Terminaste¡ te puedes fijar en la consola tus zapatillas")