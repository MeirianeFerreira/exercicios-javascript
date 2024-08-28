//Cálculo da área de um retânngulo
//Solicitação das medidas pelo usuário
let base = prompt("Digite a base do retângulo:");
let altura = prompt("Digite a altura do retângulo:");

// parseFloat analisa a string fornecida e retorna um número decimal até encontrar 
//um caractere que não possa ser convertido em parte do número.
base = parseFloat(base);
altura = parseFloat(altura);

// Cálculo
let area = base * altura;

// Resultado
console.log(`A área do retângulo com base ${base} e altura ${altura} é: ${area}`);

