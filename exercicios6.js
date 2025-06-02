//06 - Classificação de faixa etária
//Receba ou armazene um valor de idade e informe a que faixa etária a idade pertence, baseado na classificação abaixo:
//Criança: 0 a 12 anos;
//Adolescente: 13 a 17 anos;
//Adulto: 18 a 59 anos;
//Idoso: 60+ anos.
//Faça a verificação utilizando if/else.

const idade =  parseInt(prompt("Digite sua idade: "))

if (idade >= 0 && idade <= 12) {
    console.log("Você é uma criança.");
} else if (idade >= 13 && idade <= 17) {
    console.log("Você é um adolescente.");
} else if (idade >= 18 && idade <= 59) {
    console.log("Você é um adulto.");
} else {
    console.log("Você é um idoso.");
}