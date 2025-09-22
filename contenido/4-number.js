/**
 * TIPO DE DATO "number"
 */

// 1. ENTERO Y DECIMAL
const entero = 42
const decimal = 3.14

// 2. Notación cientifica
const cientifica = 5e3

// 3. Infinitoa y NaN (not number)
const infinito = Infinity
const noEsNumero = NaN

// Operaciones aritméticas
// 1. Suma, resta, multiplicación y division
const suma = 5+6
const resta = 4-6
const multiplicacion = 4*8
const division  = 16/2

// 2. Modulo y exponenciación
const modulo = 16%8
const exponenciacion = 2 ** 4

// Precision, javascript tiene problemas de calculo
const resultado = 0.1+0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado == 0.30000000000000004)

//OPERACIONES AVANZADAS
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
let numero = aleatorio * 10 +0

//console.log(raizCuadrada)
//console.log(valorAbsoluto)
//console.log(Math.trunc(numero))

//Ejemplo
const numero2 = 2
const boolean = true
console.log(numero2 + boolean)