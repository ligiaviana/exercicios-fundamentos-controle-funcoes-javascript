/* 
* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
* e o resto da divisão destes dois valores.
*/

// Forma 1:
function calcular (dividendo, divisor) {
    let div = dividendo / divisor 
    let modal =  dividendo % divisor 
    console.log(div)
    console.log(modal) 
}
calcular(10, 5)


// Forma 2:
function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)