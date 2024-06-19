function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return `${ano} é um ano bissexto.`;
    } else {
        return `${ano} não é um ano bissexto.`;
    }
}

// Exemploo
var ano = parseInt(prompt("Digite um ano para verificar se é bissexto:"));

if (!isNaN(ano)) {
    console.log(verificarAnoBissexto(ano));
} else {
    console.log("Por favor, digite um valor numérico válido.");
}

