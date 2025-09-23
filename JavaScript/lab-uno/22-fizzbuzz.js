const contador = 100;

function fizzBuzz() {
    for (let numero = 0; numero <= contador; numero++) {
        if (numero % 3 === 0 && numero % 5 === 0) {
            console.log("Fizz-Buzz");
        } else if (numero % 5 === 0) {
            console.log("Buzz");
        } else if (numero % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(numero);
        }
    }
}
fizzBuzz();
