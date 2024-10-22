/*
Crear una función con dos objetos como argumentos, y devuelva un objeto que sea la unión de ambos. 
Es decir, debe de contener las propiedades de ambos objetos. Para aquellas propiedades que están 
compartidas entre ambos, como un objeto no puede tener propiedades repetidas, se debe priorizar el
 objeto del primer parámetro.
*/

function unirObjetos(obj1, obj2) {
    let resultado = { ...obj2 }; // ... se usa para copiar un objeto

    for (let key in obj1) { // key es una variable que se usa para recorrer las propiedades de un objeto
        resultado[key] = obj1[key]; // obj1[key] es el valor de la propiedad key en el objeto obj1
    }

    return resultado;
}

const objeto1= { a: 1, b: 2 , c: 3};
const objeto2= { b: 4, c: 5, d: 6};

console.log(unirObjetos(objeto1, objeto2)); 