/*
Desarrolla una función que retorne la cantidad de elementos del array cuyo valor sea mayor que 18 
(utilizar push)
*/ 

const contarMayorQue18 = (array) => { // Función que recibe un array
    let count = 0; // Variable que cuenta los elementos mayores que 18
    let contador = []; // Array que almacena los elementos mayores que 18
    for (let i = 0; i < array.length; i++) { // Recorre el array 
        if (array[i] > 18) { // Si el elemento es mayor que 18
            contador.push(array[i]); // Se añade al array contador
            count++; // Se incrementa el contador
        }
    }
    return contador;
}

console.log(contarMayorQue18([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28])); // 10
