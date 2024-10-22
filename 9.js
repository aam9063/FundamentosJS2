/*
Crear una función que reciba un array con enteros de 0 a 200. Recorrerlo y devolver un array con 
todos los valores mayores a 100 (no incluye el 100)
*/

function mayoresA100(array) {
    let mayores = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 100) {
            mayores.push(array[i]); // Se agrega el número al array mayores
        }
    }
    return mayores;
}

let numeros = [50, 101, 150, 200, 99, 100, 102];
console.log(mayoresA100(numeros)); 