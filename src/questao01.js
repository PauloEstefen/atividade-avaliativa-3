function calcularValorVenda(valorCompra) {
    
    var lucro;

    if (valorCompra < 20) {

        lucro = 0.45;
    } else {

        lucro = 0.30;
    }

    var valorVenda = valorCompra * (1 + lucro);

    valorVenda = valorVenda.toFixed(2);

    return valorVenda;
}
var valorCompra = 15;
var valorVenda = calcularValorVenda(valorCompra);
console.log(`Valor de venda: R$ ${valorVenda}`);

valorCompra = 25;
valorVenda = calcularValorVenda(valorCompra);
console.log(`Valor de venda: R$ ${valorVenda}`);