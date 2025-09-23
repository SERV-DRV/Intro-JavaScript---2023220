/** Conversiones - explict type casting*/
const string = "54"
const integer = parseInt(string)

//console.log(string)
//console.log(integer)


const flotante = parseFloat("3.14159")
//console.log(typeof flotante)//number

const binario = "1010"
const decimal = parseInt(binario, 2)
//console.log(decimal)

const hexa = "CAFE"
const decimalh = parseInt(hexa, 16)
//console.log(decimalh)

//Implicit type Casting
const resultado = "5" + 3
//console.log(resultado)
//console.log(typeof resultado)

const sumaBooleana = "3" + true
console.log(sumaBooleana)

const valorString = "29"
const valorNumber = 11
const valorBoolean = true
console.log(valorString+valorString)
console.log(valorString+valorNumber)
console.log(valorString+valorBoolean)

console.log(valorNumber+valorNumber)
console.log(valorNumber+valorString)
console.log(valorBoolean+valorNumber)

console.log(valorBoolean+valorBoolean)
console.log(valorBoolean+valorString)
console.log(valorBoolean+valorNumber)
