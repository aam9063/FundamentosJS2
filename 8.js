/*
Devuelve la cantidad de veces que aparece en un string. Devolver: Letra a contar, texto sobre 
el que realizar la cuenta y el número de veces que aparece en el texto.
*/ 

const contarLetra = (letra, texto) => {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            contador++;
        }
    }
    return `La letra ${letra} aparece ${contador} veces en el texto.`;
}

console.log(contarLetra('a', 'Hola mundo desde JavaScript')); 