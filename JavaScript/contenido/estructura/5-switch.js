/**
 * 
 * Estructura Switch
 * 
 */

let comprar = "Manzana"

switch (comprar){
    case "Naranjas":
        console.log("Las naranjas cuentas Q16 la mano")
        break;
    case "Platanos":
        console.log("Los platanos se venden a Q18 la docena")
        break;
    case "Manzana":
        console.log("Las manzanas se venden a Q5 C/U")
        break;
    default:
        console.log(`No se encontraron con inventario para la ${comprar}`)
        break;
}