/*
Mediante un objeto crear una función que devuelva una jugada aleatoria de piedra, papel o tijera,
 con un total de cinco tiradas (utilizar push)
*/

const jugadaAleatoria = () => {
    const jugadas = ['piedra', 'papel', 'tijera'];
    const resultado = [];
    for (let i = 0; i < 10; i++) { // 10 es un número aleatorio para que se hagan 10 tiradas. Se puede poner cualquier número
        resultado.push(jugadas[Math.floor(Math.random() * jugadas.length)]); // Se añade al array resultado una jugada aleatoria
    }

    return resultado;
}

console.log(jugadaAleatoria());