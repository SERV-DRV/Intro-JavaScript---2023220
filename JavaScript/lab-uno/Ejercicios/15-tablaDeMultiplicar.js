/**
 *      EJERCICIO 15 CREAR LA TABLA DE MULTIPLICAR POR
 *                   NÚMERO INGRESADO
 *                       (FOR)
 *       SANTIAGO ENRIQUE DE ROSA VASQUEZ - 2023220
 *       
 *       LA SIGUIENTE FUNCION CONSISTE EN MOSTRAR UNA
 *       TABLA DE MULTIPLICAR DE MULTIPLOS DEL 1-10
 *       SEGUN EL NUMERO INGRESADO POR EL USUARIO
 *       Y QUE LA ESCRIBA EN FORMA DE TABLA DE MULTI.
 */


//EJECUTO
function sacarLaTablaDeMultiplicar(numeroIngresar){
    //DECLARO
    let numero;
    for (numero = 0; numero <= 10; numero++) {
        let resultado = numeroIngresar*numero;
        console.log(numeroIngresar + " x " + numero + " = " +  resultado);
    }
}

//MUESTRO
const numeroIngresar = parseInt(prompt("Ingresa tu número y te mostraremos la tablas:"));
sacarLaTablaDeMultiplicar(numeroIngresar);