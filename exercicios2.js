// Operadores de Comparação em JavaScript:
// ----------------------------------------
// >  (Maior que): Verifica se um valor é maior que outro. Ex: x > 10
// <  (Menor que): Verifica se um valor é menor que outro. Ex: x < 10
// === (Estritamente igual a): Verifica se um valor e seu tipo são exatamente iguais a outro. Ex: x === 10
// !== (Estritamente diferente de): Verifica se um valor e/ou seu tipo são diferentes de outro. Ex: x !== 10
// >= (Maior ou igual a): Verifica se um valor é maior ou igual a outro. Ex: x >= 10
// <= (Menor ou igual a): Verifica se um valor é menor ou igual a outro. Ex: x <= 10


// Operadores Lógicos em JavaScript:
// ----------------------------------

// && (AND): Retorna verdadeiro se **ambas** as condições forem verdadeiras.
// Exemplo:
// true  && true   => true
// true  && false  => false
// false && true   => false
// false && false  => false

// || (OR): Retorna verdadeiro se **pelo menos uma** das cond ições for verdadeira.
// Exemplo:
// true  || true   => true
// true  || false  => true
// false || true   => true
// false || false  => false

const ano = 2023;

if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
    console.log(`${ano} é um ano bissexto.`);
} else {
    console.log(`${ano} não é um ano bissexto.`);
}


const email = Srting(prompt("Digite seu email: "));
const senha = String(prompt("Digite sua senha: "));

if( email === email && senha === senha){
    alert("Login realizado com sucesso!");
}else{
    alert("Email ou senha incorretos!");
}