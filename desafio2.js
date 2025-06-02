function calcularImc (peso, altura){
    return peso / (altura * altura);   
}

let peso = prompt("Digite seu peso em kg: ");
let altura = prompt("Digite sua altura em metros: ");
let imc = calcularImc(peso, altura);

alert(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
    alert("Classificação: Abaixo do peso");
  } else if (imc < 24.9) {
    alert("Classificação: Peso normal");
  } else if (imc < 29.9) {
    alert("Classificação: Sobrepeso");
  } else if (imc < 34.9) {
    alert("Classificação: Obesidade grau 1");
  } else if (imc < 39.9) {
    alert("Classificação: Obesidade grau 2");
  } else {
    alert("Classificação: Obesidade grau 3 (mórbida)");
  }