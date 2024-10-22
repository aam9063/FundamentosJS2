/*
Hacer una función que, dado un número, devuelva un objeto con el número redondeado hacia abajo 
(Math.floor), hacia arriba (Math.cell) y dependiendo de su punto flotante (Math.round).
*/

const numeroRedondeado = (numero) => { // Se crea una función que recibe un número
    return {
        Abajo: Math.floor(numero), // Se redondea hacia abajo
        Arriba: Math.ceil(numero), // Se redondea hacia arriba
        Dependiendo: Math.round(numero) // Se redondea dependiendo del punto flotante
    }
}

console.log(numeroRedondeado(3.5));