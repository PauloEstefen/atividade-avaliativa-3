function verificarTriangulo(lado1, lado2, lado3) {

    if (lado1 >= lado2 + lado3 || lado2 >= lado1 + lado3 || lado3 >= lado1 + lado2) {
        return 'Os valores informados não formam um triângulo válido.';
    }

    if (lado1 === lado2 && lado2 === lado3) {
        return 'É um triângulo Equilátero.';
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return 'É um triângulo Isósceles.';
    } else {
        return 'É um triângulo Escaleno.';
    }
}

// Solicitar os valores ao usuário
function solicitarValores() {
    var lado1 = parseFloat(prompt("Digite o valor do primeiro lado do triângulo:"));
    var lado2 = parseFloat(prompt("Digite o valor do segundo lado do triângulo:"));
    var lado3 = parseFloat(prompt("Digite o valor do terceiro lado do triângulo:"));

    return verificarTriangulo(lado1, lado2, lado3);
}

var resultado = solicitarValores();
console.log(resultado);
