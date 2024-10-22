/*
Crear una función que dado un string devuelva un objeto con la cantidad de letras, espacios 
y números que contiene. Cualquier cosa que no sea un número cuenta como una letra.
*/

const contarCaracterres = (string) => { // Se crea una función que recibe un string
    let resultado = { // Se crea un objeto 
        letras: 0,
        espacios: 0,
        numeros: 0
    };

    for (let i = 0; i < string.length; i++) { // Se recorre el string
        if (string[i] === ' ') { // Si el caracter es un espacio
            resultado.espacios++; // Se incrementa el contador de espacios
        } else if (!isNaN(string[i])) { // Si el caracter es un número
            resultado.numeros++; // Se incrementa el contador de números
        } else { // Si no
            resultado.letras++; // Se incrementa el contador de letras
        }
    }

    return resultado;
}

console.log(contarCaracterres('Hola me llamo Albert 123')); 