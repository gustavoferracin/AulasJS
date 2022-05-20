//concat() "junta" duas ou mais arrays;
// let nomes = ["Marcelo", "Suelem", "Raphael", "Você", "Nos todos"];
// let nomes2 = ["Pedro", "Paulo", "Maria", "Samanta"];

// let todosOsNomes = nomes.concat(nomes2);

// console.log(nomes);
// console.log(nomes2);

// console.log(todosOsNomes);
// let qtdArrayNome = (`O array nomes possui ${nomes2.length} elementos`)
// console.log(qtdArrayNome)

//idexOf() procura um determinado elemento de uma array, retorna uma posição;
//                0           1       2       3
// let nomes2 = ["Pedro", "Paulo", "Maria", "Samanta"];
// console.log(nomes2.indexOf("José"));

// let buscaNome = "Paulo";

// if(nomes2.indexOf(buscaNome) != -1){
//     alert(`Eu encontrei o nome ${buscaNome} e está na posição ${nomes2.indexOf(buscaNome)}`)
// } else{
//     alert(`Não encontrei nenhum(a) ${buscaNome}`)
// }

// join() transforma elementos de uma array em uma string;
// let nomes2 = ["Pedro", "Paulo", "Maria", "Samanta"];

// console.log(nomes2);
// console.log(nomes2.join());

// push() insere elementos no final da array

// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];
// frutas.push("Maçã", "Laranja");
// console.log(frutas.indexOf("Jaca"));

// let insertFruta = "Amora"

// if(frutas.indexOf(insertFruta) == -1){
//     console.log(`A fruta ${insertFruta} não está na lista`);
//     frutas.push(insertFruta);

// } else {
//     console.log(`A fruta ${insertFruta} está na lista`);

// }
// console.log(frutas);

// pop()remove o último elemento de uma array
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];

// frutas.pop();
// console.log(frutas);

//reverse() reverte a ordem dos elementos de uma array

// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];
// frutas.reverse();
// console.log(frutas);

//shift remove o primeiro elemento de uma array
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];

// frutas.shift();

// console.log(frutas);

// sort() ordena os elementos de uma array em uma ordem crescente/alfabética

// let números = [200, 1, 2, 169, 67];
// let alfa = ["n", "p", "c", "a", "b", "j"]
// números.sort();
// alfa.sort()
// console.log(números);
// console.log(alfa);

// toString() converte uma array em umma string e retorna essa string
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];

// console.log(frutas.toString());

//splice() corta ou remove um elemento de uma array em um ponto indicado
// agrupar com indexOf()

let nomes = ["Mariana","Patati Patatá","Xuxa","Balão Mágico"]
// let novosNomes = nomes.splice(0,2); // - > remover a partir de mariana, 2 elementos fica (xuxa, balão magico)

// splice( nº do elemento que eu quero remover, qntd de elementos que eu quero remover a partir do primeiro)
let indice = nomes.indexOf("Balão Mágico");
let novaLista = nomes.splice(indice,1);
console.log(nomes);

