
 const frutas = ['mamão', 'melancia', 'manga', 'maracujá', 'maçã'];

 //Em array o a contagem começa em 0
 //2º elemento do Array
console.log(`O segundo elemento do array é: ${frutas[1]}`);

 //Função push para acrescentar elementos no array
frutas.push('caju', 'banana');
console.log('Array atualizado:', frutas);
 
//shift remove o primeiro elemento
frutas.shift();
console.log('Array após remover a primeira fruta:', frutas);
 