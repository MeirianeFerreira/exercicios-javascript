const numero = prompt("Digite um número:");

// Converte a entrada do usuário para um número inteiro
const numeroConvertido = parseInt(numero);

// divide o número por 2 e e afirma que se o resto for igual a 0 o número é par
if (numeroConvertido % 2 === 0) {
  console.log(numeroConvertido + " é um número par.");
} else {
  console.log(numeroConvertido + " é um número ímpar.");
}