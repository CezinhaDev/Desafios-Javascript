//Calculadora
//Faça uma calculadora básica, que recebe dois números e a operação entre eles, e retorne o resultado.

const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));
const operacao = prompt("Digite a operação (+, -, *, /): ");
let resultado;

switch (operacao) {
    case '+':
        resultado = num1 + num2;
        console.log(`Resultado: ${num1} + ${num2} = ${resultado}`);
        break;
    case '-':
        resultado = num1 - num2;
        console.log(`Resultado: ${num1} - ${num2} = ${resultado}`);
        break;
    case '*':
        resultado = num1 * num2;
        console.log(`Resultado: ${num1} * ${num2} = ${resultado}`);
        break;
    case '/':
        if (num2 !== 0) {
            resultado = num1 / num2;
            console.log(`Resultado: ${num1} / ${num2} = ${resultado}`);
        } else {
            console.log("Erro: Divisão por zero não é permitida.");
        }
        break;
    default:
        console.log("Operação inválida. Por favor, use +, -, * ou /.");
        break;
}