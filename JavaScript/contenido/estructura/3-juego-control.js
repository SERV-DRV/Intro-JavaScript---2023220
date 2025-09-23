const numeroSecret = Math.floor(Math.random()* 10+1)

const numberJugador = parseInt(prompt("Adivina el número secreto entre 1 y 10"));
if (numeroSecret === numberJugador){
    console.log("¡Felicitaciobes ganaste, encontraste el número secreto!")
}else if (numeroSecret > numberJugador){
    console.log("El número es muy bajo, intenta de nuevo")
}else {
    console.log("El número es muy alto, intentalo otra vez")
}
