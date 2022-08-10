/*
* 17)​ Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
* Plano  Aumento
*  A      10%
*  B      15%
*  C      20%
* Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
* novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

// Forma 1: 
function calcularSalario(plano, salario) {
    switch (plano) {
        case 'A':
            return 0.01 * salario + salario
            break
        case 'B':
            return 0.15 * salario + salario
            break
        case 'C':
            return 0.20 * salario + salario
            break
        default: 
            return console.log('Plano inválido')        
    }
}
console.log(calcularSalario('A', 1000))
console.log(calcularSalario('B', 1000))
console.log(calcularSalario('C', 1000))
console.log(calcularSalario('D', 1000))


// Forma 2: 
function calcularReajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000));