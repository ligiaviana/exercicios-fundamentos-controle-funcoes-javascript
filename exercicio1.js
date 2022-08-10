// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

// Forma 1: 
function soma (a, b) {
    return a + b
}
let resultado = soma(1, 2)
console.log(resultado)


function subtracao (a, b) {
    return a - b
}
let resultado2 = subtracao(1, 2)
console.log(resultado2)


function multiplicacao (a, b) {
    return a * b
}
let resultado3 = multiplicacao(1, 2)
console.log(resultado3)


function divisao (a, b) {
    return a / b
}
let resultado4 = divisao(1, 2)
console.log(resultado4)

// Forma 2: 
function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)



