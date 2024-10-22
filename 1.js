/*
Contar los caracteres de “a” en el string de la palabra “abracadabra”. Crear una función con filter.
*/

const countA = (palabra) => { // Se crea una función que recibe una palabra
    // Se divide la palabra en un array de caracteres, se filtra el array para que solo queden los caracteres que sean 'a' y se devuelve la longitud del array resultante
    return palabra.split('').filter((char) => char === 'a').length; 
}

console.log(countA('abracadabra')); 