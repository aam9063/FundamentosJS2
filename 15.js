/*
Escribir una función que verifique sí un objeto está vacio.
*/ 

const objetoVacio = (objeto) => {
    return Object.keys(objeto).length === 0; // Object.keys(objeto) devuelve un array con las propiedades de un objeto
}

console.log(objetoVacio({})); // true
console.log(objetoVacio({ a: 1 })); // false
console.log(objetoVacio({ a: 1, b: 2 })); // false
console.log(objetoVacio({ a: 1, b: 2, c: 3 })); // false
