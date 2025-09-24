/**
 *      EJERCICIO 10 CREAR UNA FUNCION QUE DETERMINE
 *          SI AL INGRESAR ES UNA VOCAL O CONSONANTE
 *                       (IF-ELSE)
 *       SANTIAGO ENRIQUE DE ROSA VASQUEZ - 2023220
 *       
 *       LA SIGUIENTE FUNCION CONSISTE EN MOSTRAR EL
 *       RESULTADO DE UN STRING INGRESADO Y QUE VERIFIQUE
 *       SI ES UNA VOCAL O CONSONANTE
 */


//EJECUTO
function determinarTipoDeLetra(caracter){
    if (caracter == "a" || caracter == "A") {
        console.log("Su letra es una vocal: " + " ' " + caracter + " ' ")
    }else if(caracter == "e" || caracter == "E"){
        console.log("Su letra es una vocal: " + " ' " + caracter + " ' ")
    }else if(caracter == "i" || caracter == "I"){
        console.log("Su letra es una vocal: " + " ' " + caracter + " ' ")
    }else if(caracter == "o" || caracter == "O"){
        console.log("Su letra es una vocal: " + " ' " + caracter + " ' ")
    }else if(caracter == "u" || caracter == "U"){
        console.log("Su letra es una vocal: " + " ' " + caracter + " ' ")
    }else{
        console.log("Su letra es una consonante: " + caracter)
    }
    
}

//DECLARO
const caracter = prompt("Ingrese una letra ya sea vocal o consonante nosotros te diremos que es:");
determinarTipoDeLetra(caracter);