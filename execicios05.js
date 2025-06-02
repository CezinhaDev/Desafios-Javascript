//05 - Verificação de divisibilidade
//Receba ou armazene dois valores (x e y) e informe se x é divisível por y (a divisão dá resto zero).

const x = parseInt(prompt("Digite o valor de x: "));
const y = parseInt(prompt("Digite o valor de y: "));

if(x % y ===0){
    console.log(`${x} é divisível por ${y}.`);
}else{
    console.log(`${x} não é divisível por ${y}.`);
}