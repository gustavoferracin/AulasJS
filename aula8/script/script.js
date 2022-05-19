// let str = `qualquer conteúdo`;

// let str2 = `uma outra string ${str}`;

// let str = "Qualquer conteúdo ";

// let str2 = (" Uma outra string " + str);
// console.log(str2);


//Arrays -> uma coleção de dados.

//O array é consituido por elementos.

//const frutas = ["Uva","Banana","Laranja","Melância"]; // 4 elementos -> o tamanho do array é 4

//Uva posição 0 Banana posição 1 laranja posição 2 melância posição 3

//let euGosto = `Eu gosto de ${frutas[2]}`;
// console.log(euGosto);
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);
// console.log(frutas);

const pessoa = [
    "José", // 0
    23, // 1
    "Solteiro", // 2
    "bola", // 3
    1.70, // 4
    cores = ["azul", "preto", "vermelho", "salmão", "ocre"] // 5
]; 

let key = 4;

key++; // 4
console.log(pessoa[5][key]) // array bidimensional
console.log(pessoa.length)
console.log("Gustavo" [0], "Gustavo"[1])

// (function(p){
//     const jose = `Meu nome é ${pessoa[0]}, eu tenho ${pessoa[1]} anos, e sou 
//     ${pessoa[2]}, e também gosto de jogar ${pessoa[3]}, e tenho ${pessoa[4]} de altura`
//     document.write(jose)
// })(pessoa)