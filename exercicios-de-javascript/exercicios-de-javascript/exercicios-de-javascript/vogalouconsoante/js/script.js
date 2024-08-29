//// Função para verificar se uma letra é uma vogal ou consoante
function verificarLetra(letra) {

//Função que aceita letra maiúsculas
letra = letra.toLowerCase();   
    // Verifica se a letra é uma vogal
    if ('aeiou'.includes(letra)) {
      console.log(`${letra} é uma vogal.`);
    } else if (letra >= 'a' && letra <= 'z') {
      // Verifica se a letra está entre 'a' e 'z' para determinar se é uma consoante
      console.log(`${letra} é uma consoante.`);
    } else {
      // Se não for uma letra, exibe uma mensagem
      console.log(`${letra} não é uma letra.`);
    }
  }
  
  // Solicita uma letra ao usuário
  let letra = prompt("Digite uma letra:");
  
  // Chama a função para verificar se é vogal ou consoante
  verificarLetra(letra);
