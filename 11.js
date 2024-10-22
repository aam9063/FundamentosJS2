/*
Dado dos números, devuelve un array con los números enteros sucesivos entre ellos, puede 
incluir los números iniciales o no (utilizar push).
*/ 

function numerosSucesivos(inicio, fin, incluirExtremos = true) { // Se crea una función que recibe dos números y un booleano
    let numeros = []; // Se crea un array vacío
    let start = incluirExtremos ? inicio : (inicio < fin ? inicio + 1 : inicio - 1); // Se asigna a start el valor de inicio o inicio + 1 si incluirExtremos es true, o inicio + 1 si inicio es menor a fin, o inicio - 1 si no
    let end = incluirExtremos ? fin : (inicio < fin ? fin - 1 : fin + 1); // Se asigna a end el valor de fin o fin - 1 si incluirExtremos es true, o fin - 1 si inicio es menor a fin, o fin + 1 si no

    if (inicio < fin) { // Si inicio es menor a fin
        for (let i = start; i <= end; i++) { // Se recorre el array desde start hasta end
            numeros.push(i); // Se agrega el número al array numeros
        }
    } else { // Si no
        for (let i = start; i >= end; i--) { // Se recorre el array desde start hasta end
            numeros.push(i); // Se agrega el número al array numeros
        }
    }

    return numeros;
}

// Ejemplo de uso
console.log(numerosSucesivos(1, 5)); 
console.log(numerosSucesivos(1, 5, false)); 
console.log(numerosSucesivos(15, 10)); 
console.log(numerosSucesivos(15, 10, false)); 