function sacarLaTablaDeMultiplicar(numeroAIngresar){
    for (let numero = 0; numero <= 10; numero++) {
        let resultado = numeroAIngresar*numero
        console.log(numeroAIngresar + " x " + numero + " = " +  resultado);
    }
}

const numeroAIngresar = parseInt(prompt("Ingresa tu número y te mostraremos la tablas"));
sacarLaTablaDeMultiplicar(numeroAIngresar)