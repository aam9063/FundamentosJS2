/*
Elimina los duplicados de un array. El array resultante sin duplicados.
*/

const removerDuplicados = (array) => {
    // IndexOf devuelve el primer índice en el que se encuentra un elemento dado en el array, o -1 si el elemento no está presente.
    return array.filter((element, index) => array.indexOf(element) === index);

}

console.log(removerDuplicados([1,2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10])); 

/*
Otra solución:
function eliminarDuplicados(arr) {
    let unicos = [];
    for (let i = 0; i < arr.length; i++) {
        if (unicos.indexOf(arr[i]) === -1) {
            unicos.push(arr[i]);
        }
    }
    return unicos;
}


let numeros = [1, 2, 2, 3, 4, 4, 5];
console.log(eliminarDuplicados(numeros)); // [1, 2, 3, 4, 5]
*/