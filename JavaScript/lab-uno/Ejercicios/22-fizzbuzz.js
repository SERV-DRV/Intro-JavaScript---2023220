/**
 *      EJERCICIO 22 SECUENCIA FIZZ, BUZZ Y FIZZ-BUZZ
 *                      (FOR - IF)
 *       SANTIAGO ENRIQUE DE ROSA VASQUEZ - 2023220
 *       
 *       LA SIGUIENTE FUNCION CONSISTE EN MOSTRAR UNA
 *       LISTA DE NÚMEROS DEL 1 - 100 LOS CUALES
 *       SEAN MULTIPLOS DE 3 ESCRIBAN "FIZZ", LOS
 *       MULTIPLOS DE 5 "BUZZ" Y LOS QUE POSEAN 
 *       AMBOS "FIZZ-BUZZ" Y LOS QUE NO CUMPLAN 
 *       QUE ESCRIBA EL NÚMERO Y SIGAN SECUENCIA
 */


//EJECUTO
function fizzBuzz() {
    //DECLARO
    const contador = 100;
    for (numero = 0; numero <= contador; numero++) {
        if (numero%3 === 0 && numero%5 === 0) {
            console.log("Fizz-Buzz");
        } else if (numero%5 === 0) {
            console.log("Buzz");
        } else if (numero%3 === 0) {
            console.log("Fizz");
        } else {
            console.log(numero);
        }
    }
}

//MUESTRO
fizzBuzz();
