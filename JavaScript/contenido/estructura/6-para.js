/**
 * FOR - CICLO PARA
 */
 
// for | for-of | for-in
 
let lista = ['eat', 'sleep', 'code', 'repeat'];
 
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}
 
// for-of [{FOR EACH}]
let canasta = ['manzana', 'pera', 'naranja', 'uva']
for (fruta of canasta) {
    console.log(fruta)
}
 
// for-in: Iterar sobre las propiedades de un objeto
 
let listaDeCompras = {
    nombre: 'Manzana',
    costo: 3.5,
    cantidad: 12,
    marca: 'Manzanita Feliz'
}
console.log('---------------')
for (fruta in listaDeCompras) {
    console.log(fruta);
}
console.log('---------------')
for (fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`)
}
console.log('---------------')
for (fruta of listaDeCompras) {
    console.log(fruta);
}