/*
Crear una función que dado un objeto que contenga niveles de experiencia y puntuación por cada nivel,
 y un objeto con la cantidad de desafíos realizados por cada nivel, devuelva la cantidad total de 
 experiencias obtenidas.
*/ 

const experienciaTotal = (experiencia, desafios) => { // experiencia y desafios son objetos
    let total = 0; // variable que acumula la cantidad total de experiencias

    for (let key in experiencia) { // key es una variable que se usa para recorrer las propiedades de un objeto
        total += experiencia[key] * desafios[key]; // total = total + experiencia[key] * desafios[key]
    }

    return total;
}

const experiencia = {
    'muyFacil': 10,
    'facil': 20,
    'medio': 30,
    'dificil': 40,
    'muyDificil': 50
};

const desafios = {
    'muyFacil': 3,
    'facil': 2,
    'medio': 1,
    'dificil': 4,
    'muyDificil': 1
};

console.log(experienciaTotal(experiencia, desafios)); 