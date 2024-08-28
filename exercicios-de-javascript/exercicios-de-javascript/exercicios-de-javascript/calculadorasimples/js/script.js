// parseFloat analisa a string fornecida e retorna um número decimal até encontrar 
//um caractere que não possa ser convertido em parte do número. 
const numeroa = parseFloat(prompt("Digite o primeiro número:"));
 
const operador = prompt("Digite o operador (+, -, *, /):");
 
const numerob = parseFloat(prompt("Digite o segundo número:"));
 
let resultado;

 //switch executa várias linhas de código apartir de diferentes condições.
switch (operador) {
    case '+':
        resultado = numeroa + numerob;
        break;
    case '-':
        resultado = numeroa - numerob;
        break;
    case '*':
        resultado = numeroa * numerob;
        break;
    case '/':
      
        if (numerob === 0) {
            console.log("Erro: Divisão por zero não é permitida.");
            resultado = null;
        } else {
            resultado = numeroa / numerob;
        }
        break;
    default:
        console.log("Operador inválido. Por favor, insira +, -, * ou /.");
        resultado = null;
        break;
}
 
if (resultado !== null) {
    console.log(`O resultado de ${numeroa} ${operador} ${numerob} =  ${resultado}.`);
}