/*
* 13) ​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
* dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

// Forma 1: 
/*let dia = 3
switch(dia) {
    case 1: console.log('fim de semana')
    break;
    case 2: console.log('dia útil')
    break;
    case 3: console.log('dia útil')
    break;
    case 4: console.log('dia útil')
    break;
    case 5: console.log('dia útil')
    break;
    case 6: console.log('dia útil')
    break;
    case 7: console.log('fim de semana')
    break;
    default: 
    console.log('dia inválido')
}*/

// Forma 2: 
function classificaDia(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default: 
            return "Dia inválido"
    }
}

console.log(classificaDia(1));
console.log(classificaDia(2));
console.log(classificaDia(3));
console.log(classificaDia(4));
console.log(classificaDia(5));
console.log(classificaDia(6));
console.log(classificaDia(7));
console.log(classificaDia('a'));



