/**
 *      EJERCICIO 16 CREAR UN ARREGLO Y QUE IDENTIFIQUE EL 
 *                   MAYOR DE ESE ARREGLO
 *                       (FOR-IF)
 *       SANTIAGO ENRIQUE DE ROSA VASQUEZ - 2023220
 *       
 *       LA SIGUIENTE FUNCION CONSISTE EN MOSTRAR UN
 *       NÚMERO DE EL ARREGLO CREADO PERO QUE ESTE
 *       SEA EL NÚMERO MÁS GRANDE DEL ARREGLO
 */


//EJECUTO
function numeroMasGrande() {
    //DECLARO
    const cantidadIngresar = parseInt(prompt("Ingresa la cantidad de datos para su arreglo"));
    let listaDeNumeros = [];
    let mayor = 0;

    for (i = 0; i < cantidadIngresar; i++) {
        const orden = i + 1;
        listaDeNumeros[i] = parseInt(prompt("Ingrese el " + orden + "° número"));
        if (listaDeNumeros[i] > mayor) {
            mayor = listaDeNumeros[i];
        }
    }
    //MUESTRO
    console.log("El número más grande es: " + mayor);
}

numeroMasGrande();