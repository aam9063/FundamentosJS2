/*
Crear una función que devuelva el volumen de una caja cuando se le pase un objeto con 
las medidas de la misma, correspondientes al ancho, alto y largo. El volumen se calcula
 multiplicando entre sí dichos valores.
*/

const volumenCaja = (caja) => {
    const { ancho, alto, largo } = caja;
    return ancho * alto * largo;
}

const caja = {
    ancho: 3,
    alto: 2,
    largo: 4
}

console.log(volumenCaja(caja)); 