const dataAtual = new Date();

const dia = String(dataAtual.getDate()).padStart(2, '0');  // Obtém o dia com dois dígitos
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');  // Obtém o mês com dois dígitos
const ano = dataAtual.getFullYear();

const dataFormatada = `${dia}/${mes}/${ano}`;

console.log(`A data de hoje é: ${dataFormatada}`);  