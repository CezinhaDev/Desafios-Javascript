//07 - Comparação de números
//Crie um programa que compara dois números e informa se o primeiro é maior, menor ou igual ao segundo.

const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));

if (num1 > num2) {
    console.log("O primeiro número é maior que o segundo.");
} else if (num1 < num2) {
    console.log("O primeiro número é menor que o segundo.");
} else {
    console.log("Os dois números são iguais.");
}