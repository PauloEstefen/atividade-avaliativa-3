function calcularSalario() {

    var horasTrabalhadas = parseFloat(prompt("Digite a quantidade de horas trabalhadas:"));
    var valorHora = parseFloat(prompt("Digite o valor da hora trabalhada:"));
    var pDesconto = parseFloat(prompt("Digite o percentual de desconto (%):"));

    var sBruto = horasTrabalhadas * valorHora;

    var desconto = (pDesconto / 100) * sBruto;

    var sLiquido = sBruto - desconto;

    sBruto = sBruto.toFixed(2);
    desconto = desconto.toFixed(2);
    sLiquido = sLiquido.toFixed(2);

    console.log(`Salário Bruto: R$ ${sBruto}`);
    console.log(`Valor do Desconto (${pDesconto}%): R$ ${desconto}`);
    console.log(`Salário Líquido: R$ ${sLiquido}`);
}

calcularSalario();
