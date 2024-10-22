/*
Los parámetros de búsqueda en una URL son aquellos que vienen después del signo ? y 
se escriben como parámetro=valor, separados por el signo &. Crear una función que, 
dada una URL, devuelva un objeto con cada parámetro como clave con su respectivo valor.
*/

const parametrosURL = (url) => { // Se crea una función que recibe una URL
    let resultado = {}; // Se crea un objeto vacío
    let parametros = url.split('?')[1].split('&'); // Se obtienen los parámetros de la URL
    parametros.forEach(parametro => { // Se recorren los parámetros
        let [key, value] = parametro.split('='); // Se divide el parámetro en clave y valor
        resultado[key] = value; // Se añade al objeto resultado
    }); 
    return resultado;
}

console.log(parametrosURL('http://www.google.com/search?hl=en&q=javascript')); // { hl: 'en', q: 'javascript' }