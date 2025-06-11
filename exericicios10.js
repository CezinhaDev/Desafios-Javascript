//Somatório 1 a N
//Receba/armazene um valor N e exiba o resultado da soma de 1 até N.
//O desafio deve ser feito utilizando estruturas de repetição.

const n = parseInt(prompt("Digite um número N para somar de 1 até N:"));
let soma = 0;

for (let i = 1; i <= n; i++) {
    soma += i;
}

console.log(`A soma de 1 até ${n} é: ${soma}`);
