/* 
* 18)​ Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
* switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

function leitorNumero(numero) {
    switch (numero) {
        case 0:
            console.log("zero")
            break
        case 1:
            console.log("um")
            break
        case 2:
            console.log("dois")
            break
        case 3:
            console.log("três")
            break
        case 4:
            console.log("quatro")
            break
        case 5:
            console.log("cinco")
            break
        case 6:
            console.log("seis")
            break
        case 7:
            console.log("sete")
            break
        case 8:
            console.log("oito")
            break
        case 9:
            console.log("nove")
            break
        case 10:
            console.log("dez")
            break
        default:
            console.log("Número fora do intervalo")

    }
}

leitorNumero(0)
leitorNumero(1)
leitorNumero(2)
leitorNumero(3)
leitorNumero(4)
leitorNumero(5)
leitorNumero(6)
leitorNumero(7)
leitorNumero(8)
leitorNumero(9)
leitorNumero(10)
leitorNumero(11)