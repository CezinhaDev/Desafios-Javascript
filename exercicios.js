const readlineSync = require('readline-sync');

const nome = readlineSync.question("Digite seu nome: ");
const materia = readlineSync.question("Digite sua materia: ");

const nota1 = parseFloat(readlineSync.question("Digite sua nota 1: "));
const nota2 = parseFloat(readlineSync.question("Digite sua nota 2: "));

const media = (nota1 + nota2) / 2;

if (media >= 7) {
    console.log(`Parabéns ${nome}, você foi aprovado na matéria ${materia}!`);
} else if (media >= 5) {
    console.log(`Você está de recuperação, ${nome}, na matéria ${materia}.`);
} else {
    console.log(`Você foi reprovado, ${nome}, na matéria ${materia}.`);
}