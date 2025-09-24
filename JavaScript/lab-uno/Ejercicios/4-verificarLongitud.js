/**
 *      EJERCICIO 4 CREAR UNA FUNCION QUE DETERMINE
 *          SI UNA FUNCIÓN ES MAYOR A 5 CARACTERES
 *                       (FOR)
 *       SANTIAGO ENRIQUE DE ROSA VASQUEZ - 2023220
 *       
 *       LA SIGUIENTE FUNCION CONSISTE EN MOSTRAR EL
 *       RESULTADO DE UN STRING INGRESADO Y QUE VERIFIQUE
 *       SI ES MAYOR A 5 CARACTERES
 */


//EJECUTO
function verificarLongitud(texto) {
    //MUESTRO
    if (texto.length > 5) {
        console.log("La cadena '" + texto + "' tiene más de 5 caracteres, Sus caracteres son " + texto.length);
    } else if (texto.length < 5){
        console.log("La cadena '" + texto + "' tiene menos de 5 caracteres, Sus caracteres son " + texto.length);
    } else if (texto.length == 5){
        console.log("La cadena '" + texto + "' tiene exactamente 5 caracteres, Sus caracteres son " + texto.length);
    }
}

// DECLARO
const texto = prompt("Ingrese una cadena de texto para verificar su longitud:");
verificarLongitud(texto);