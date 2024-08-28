
const nota1 = parseFloat(prompt("Digite a primeira nota:")); //parseFloat permite a entrada de números decimais
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));


const media = (nota1 + nota2 + nota3) / 3;


if (media >= 6) {
  console.log("A média do aluno é " + media.toFixed(2) + ", aluno aprovado.");  // toFixed(2): Resultado aparece com duas casas decimais
} else {
  console.log("A média do aluno é " + media.toFixed(2) + ", aluno reprovado.");
}