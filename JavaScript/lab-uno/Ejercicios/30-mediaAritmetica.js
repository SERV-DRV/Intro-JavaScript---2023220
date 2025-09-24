/**
 *      EJERCICIO 30 CREAR RESULTADO DE LA MEDIA ARITMETICA
 *                       (FOR)
 *       SANTIAGO ENRIQUE DE ROSA VASQUEZ - 2023220
 *       
 *       LA SIGUIENTE FUNCION CONSISTE EN MOSTRAR EL
 *       RESULTADO DE UN ARREGLO DE TIPO INT DE N 
 *       SESPACIOS SELECCIONADO POR EL USUARIO
 *       EL CUAL SUME Y DIVIDIA POR LA CANTIDAD INGRESADA
 *       DANDO COMO RESULTADO LA MEDIA ARITMETICA DEL ARREGLO.
 */


//EJECUTO
function mediaAritmetica() {
    //DECLARO
    const cantidadIngresar = parseInt(prompt("Ingresa la cantidad de números para realizar su media aritmetica"));
    let listaDeNumeros = [];
    let resultadoSuma = 0;

    for (i = 0; i < cantidadIngresar; i++) {
        const orden = i+1;
        listaDeNumeros[i] = parseInt(prompt("Ingrese su " + orden + "° número"));
        resultadoSuma += listaDeNumeros[i];
    }
    let resultadoMedia = resultadoSuma/i;
    //MUESTRO
    console.log("Lista de arreglos que ingresaste: " + listaDeNumeros + " son los valores del arreglo");
    console.log("Suma de los números de ese arreglo: " + resultadoSuma + " es la suma del arreglo");
    console.log("Tamaño de el arreglo que creaste: " + cantidadIngresar + " espacios en el que se divide");
    console.log("Media aritmética del arreglo: " + resultadoMedia + " es el resultado");
    console.log("---------------------------------------------------------------------")
    console.log("Formula con la que se calculo:  " + listaDeNumeros + " / " + i + " = " + resultadoMedia);
}

mediaAritmetica();