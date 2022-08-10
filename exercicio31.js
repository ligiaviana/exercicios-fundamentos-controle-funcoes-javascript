// 31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

function numerosNegativos(vetor) {
    let qtdNegativos = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            qtdNegativos++
        }

    }
    console.log(`${qtdNegativos} é a quantidade de números negativos`)
}

vetor = [1, 2, 3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15, 16, -17, 18, -19, 20]
numerosNegativos(vetor)



