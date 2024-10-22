/*
Filtrar los números de un array que sean mayor a cierto número x dejando solo los que sean
 menores a este.
*/

const filtrarMenores = (array, x) => {
    let contador = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < x) {
            contador.push(array[i]); // Se agrega el número al array contador
        }
    }

    return contador;
}

console.log(filtrarMenores([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // [1, 2, 3, 4]