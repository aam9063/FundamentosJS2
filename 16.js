/*
Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto
 con solo las propiedades especificadas en el array
*/ 

const filtrarObjeto = (objeto, array) => { // array es un array de strings
    let resultado = {}; // objeto vacio

    for (let key in objeto) { // key es una variable que se usa para recorrer las propiedades de un objeto
        if (array.includes(key)) { // array.includes(key) devuelve true si key está en array
            resultado[key] = objeto[key]; // obj1[key] es el valor de la propiedad key en el objeto obj1
        }
    }

    return resultado;
}

const objeto = { a: 1, b: 2, c: 3, d: 4 };

console.log(filtrarObjeto(objeto, ['a', 'c'])); // { a: 1, c: 3 }