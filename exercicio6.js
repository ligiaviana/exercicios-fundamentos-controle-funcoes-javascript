/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação
* A primeira função retornará o montante da aplicação financeira sob o regime de juros simples
* e a segunda retornará o valor da aplicação sob o regime de juros compostos.
*/

// Forma 1
function aplicacaoJurosSimples (capitalInicial, taxaJuros, tempoAplicacao) {
    let resultado1 = capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)
    console.log(resultado1.toFixed(2))
}

function aplicacaoJurosCompostos (capitalInicial, taxaJuros, tempoAplicacao) {
    let resultado2 = capitalInicial * (1 + taxaJuros) ** tempoAplicacao
    console.log(resultado2.toFixed(2))
}

aplicacaoJurosSimples(100, 10/100, 2);
aplicacaoJurosCompostos(100, 10/100, 2);


// Forma 2
function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));

