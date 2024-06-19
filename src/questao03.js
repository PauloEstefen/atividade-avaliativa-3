function calcularMediaPonderada() {

    var nota1 = parseFloat(prompt("Digite a primeira nota (de 0.0 a 10.0):"));
    var peso1 = parseFloat(prompt("Digite o peso da primeira nota:"));
    var nota2 = parseFloat(prompt("Digite a segunda nota (de 0.0 a 10.0):"));
    var peso2 = parseFloat(prompt("Digite o peso da segunda nota:"));
    var nota3 = parseFloat(prompt("Digite a terceira nota (de 0.0 a 10.0):"));
    var peso3 = parseFloat(prompt("Digite o peso da terceira nota:"));

    var mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

    console.log(`A média ponderada das notas é: ${mediaPonderada.toFixed(2)}`);
}

calcularMediaPonderada();
