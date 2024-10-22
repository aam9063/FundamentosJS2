/*
Crear una función que tenga como objetivo determinar si, con una mano de cartas de Uno en la mesa,
 el jugador puede jugar alguna carta de su mano o si debe retirar una carta del mazo. Las cartas tienen 
 uno de 4 colores posibles (red, blue, green or yellow) y un número del 1 al 9. Una carta se escribe 
 como un string con color y número. Por ejemplo “yellow 3”, “red 6”. Se puede jugar si la carta en la mano
  coincide en color o en número con la carta de la mesa. (utilizar map y split)
*/

/*
Crear una función que tenga como objetivo determinar si, con una mano de cartas de Uno en la mesa,
 el jugador puede jugar alguna carta de su mano o si debe retirar una carta del mazo. Las cartas tienen 
 uno de 4 colores posibles (red, blue, green or yellow) y un número del 1 al 9. Una carta se escribe 
 como un string con color y número. Por ejemplo “yellow 3”, “red 6”. Se puede jugar si la carta en la mano
  coincide en color o en número con la carta de la mesa. (utilizar map y split)
*/

function puedeJugar(cartaMesa, mano) {
    const [colorMesa, numeroMesa] = cartaMesa.split(' '); // Se divide la carta de la mesa en color y número

    const cartasDivididas = mano.map(carta => carta.split(' ')); // El map se usa para dividir las cartas de la mano en color y número

    for (let i = 0; i < cartasDivididas.length; i++) { // Se recorre la mano
        const [color, numero] = cartasDivididas[i]; // Se obtiene el color y el número de la carta
        if (color === colorMesa || numero === numeroMesa) { // Se verifica si la carta se puede jugar
            return `Puede jugar la carta: ${mano[i]}`; // Se retorna la carta que se puede jugar
        }
    }
    return "Retirar una carta del mazo";
}

const cartaMesa = "yellow 3";
const mano = ["red 6", "blue 3", "green 5", "yellow 7"];
console.log(puedeJugar(cartaMesa, mano)); 