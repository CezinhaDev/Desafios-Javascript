const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// funcao para cinverter Celcius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// funcao para cinverter Fahrenheit para Celsius
function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

rl.question("Escolha uma opção:\n1. Celsius para Fahrenheit\n2. Fahrenheit para Celsius\n3. Sair\n", function(opcao) {
    if(opcao == "1"){
        rl.question("Digite a temperatura em Celsius: ", function(c) {
            let f = celsiusParaFahrenheit(parseFloat(c));
            console.log(`${c} graus Celsius é igual a ${f.toFixed(2)} graus Fahrenheit.`);
            rl.close();
        });
    } else if (opcao == "2") {
        rl.question("Digite a temperatura em Fahrenheit: ", function(f) {
            let c = fahrenheitParaCelsius(parseFloat(f));
            console.log(`${f} graus Fahrenheit é igual a ${c.toFixed(2)} graus Celsius.`);
            rl.close();
        });
    } else {
        console.log("Opção inválida!");
        rl.close();
    }
});
