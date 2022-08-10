/*
* ​19) ​O cardápio de uma lanchonete é o seguinte:
* Código  Descrição do Produto     Preço
*  100      Cachorro Quente         R$ 3,00
*  200      Hambúrguer Simples      R$ 4,00
*  300      Cheeseburguer           R$ 5,50         
*  400      Bauru                   R$ 7,50
*  500      Refrigerante            R$ 3,50
*  600      Suco                    R$ 2,80
* Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor    
* a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
* comando switch. Crie um caso default para produto não existente.
*/

function valorLanche(codigo, quantidade) {
    switch (codigo) {
        case 100:
            return 3.00 * quantidade
            break
        case 200:
            return 4.00 * quantidade
            break
        case 300:
            return 5.50 * quantidade
            break
        case 400:
            return 7.50 * quantidade
            break
        case 500:
            return 3.50 * quantidade
            break
        case 600:
            return 2.80 * quantidade
            break
        default: 
            console.log('Produto inexistente')
    }
}

console.log(valorLanche(100,2))
console.log(valorLanche(200,2))
console.log(valorLanche(300,2))
console.log(valorLanche(400,2))
console.log(valorLanche(500,2))
console.log(valorLanche(600,2))
console.log(valorLanche(700,2))