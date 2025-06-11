 //Cálculo de tarifas.
//Crie um programa que exibe o valor de uma tarifa dependendo da idade e tipo do usuário (estudante ou regular).


const tarifaBase = 2.50;

const idade = parseInt(prompt("Digite sua idade:"));
const tipoUsuario = prompt("Digite o tipo de usuário (estudante ou regular):").toLowerCase();
let valorTarifa;

if (idade < 6) {
    valorTarifa = 0.00;
} else if (idade >= 60) {
    valorTarifa = tarifaBase * 0.70; // 30% de desconto
} else if (tipoUsuario === "estudante") {
    valorTarifa = tarifaBase * 0.50; // 50% de desconto
} else {
    valorTarifa = tarifaBase; // tarifa normal
}

console.log(`Valor da tarifa: R$ ${valorTarifa.toFixed(2)}`);
