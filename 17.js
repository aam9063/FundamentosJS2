/*
Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, 
devuelva un objeto con dichos productos, teniendo como valor true si puede comprarlo o false sino.
*/ 

const comprarProductos = (productos, dinero) => { // productos es un objeto con productos y precios, dinero es un número
    let resultado = {}; // objeto vacio

    for (let key in productos) { // key es una variable que se usa para recorrer las propiedades de un objeto
        resultado[key] = productos[key] <= dinero; // productos[key] <= dinero devuelve true si el precio del producto es menor o igual al dinero disponible
    }

    return resultado;
}

const productos = { 
    'manzana': 1, 
    'pera': 2, 
    'naranja': 3, 
    'banana': 4 
};


const dinero = 3.0;

console.log(comprarProductos(productos, dinero));



