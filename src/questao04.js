function atribuirConceito (nota) {

    if (nota < 0 || nota > 10) {
        return 'Nota inválida. A nota deve estar entre 0.0 e 10.0.';
    }

    if (nota >= 9.0) {
        return 'A';
    } else if (nota >= 8.0) {
        return 'B';
    } else if (nota >= 7.0) {
        return 'C';
    } else if (nota >= 6.0) {
        return 'D';
    } else (nota < 6.0)
        return 'F';
}


var nota = 8.5;
console.log(atribuirConceito(nota));

nota = 9.2;
console.log(atribuirConceito(nota));

nota = 5.7; // Exemplo de nota abaixo de 60
console.log(atribuirConceito(nota));
