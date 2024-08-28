//Solicitação ao usuário
const ladoA = parseFloat(prompt("Digite o comprimento do lado A:"));
const ladoB = parseFloat(prompt("Digite o comprimento do lado B:"));
const ladoC = parseFloat(prompt("Digite o comprimento do lado C:"));


if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
   
  // Se lado1 = lado2 = lado3 = equilátero
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("O triângulo é equilátero.");

        // Se lado1 = lado2 /= lado3 = isósceles
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("O triângulo é isósceles.");

        //se lado1 /= lado2/ /= lado3  é escaleno
    } else {
        console.log("O triângulo é escaleno.");
    }
} else {
    console.log("Os valores inseridos não formam um triângulo.");
}