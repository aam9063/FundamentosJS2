/*
Convierte un string a “I’m a hacker now”. Para hacerlo, tiene que transformar las “a” en 4, 
las “e” en 3, las “i” en 1, las “o” en 0 y las “s” en 5 -> return “1’m 4 h4ack3r n0w”.
*/ 

const hackerSpeak = (string) => {
    // Usando map:
    const dictionary = { // Objeto que contiene las letras a cambiar.
        a: 4,
        e: 3,
        i: 1,
        o: 0,
        s: 5
    }
    return string.split('').map((letter) => { // Separar el string en un array de letras y mapear cada letra.
        return dictionary[letter] || letter; // Si la letra está en el diccionario, devolver el valor del diccionario, si no, devolver la letra.
    }).join(''); // Unir el array de letras en un string.
}

console.log(hackerSpeak('I am a hacker now')); 