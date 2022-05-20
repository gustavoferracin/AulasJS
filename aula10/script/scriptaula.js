// ----Match() o método match procura uma palavra em uma string.
// g/i/m

// let nome = "Gustavo Ferracin"

// console.log(nome.match("F"));

// ----Search() o método search procura pela ocorrência e retorna a posição dela na cadeia da string

// console.log( nome.search("F"));
// console.log( nome.search("f")); // por ser case sensitive o JS diferencia as letras maiusculas e minusculas
// console.log(nome[0]);

// ----Replace() este método substitui uma string por outra

// let str = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, molestias. Tempore esse dignissimos a, ex adipisci, laudantium soluta facere velit aut error numquam, maxime recusandae blanditiis deserunt atque et pariatur!`
// let strOutra = str.replace(/i/gi, "y") // (letra/palavra que vai ser trocada, letra/palavra que ficará no lugar
// // /i/gi faz com que ele deixe de ser case sensitive)
// console.log(strOutra);

// ----LocaleCompare() efetua a comparação entre duas strings

// let gato = "gato"
// let outroGato = "gato"

// console.log(gato.localeCompare(/Gato/gi));

// ----toString() irá converter um valor qualquer em uma string

// let num = Number("10");

// console.log(num.toString());

// ----toLowerCase() faz a conversão da string inteira para caixa baixa

// let str = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, molestias. Tempore esse dignissimos a,
// ex adipisci, laudantium soluta facere velit aut error numquam, maxime recusandae blanditiis deserunt atque et pariatur!`

// console.log(str.toLowerCase())

// let gato = "GATO"
// let outroGato = "gato"

// let cat1 = gato.toLowerCase();
// let cat2 = outroGato.toLowerCase();

// console.log(cat1.localeCompare(cat2));

// ----toUpperCase() faz a conversão da string inteira para caixa alta
// let str = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, molestias. Tempore esse dignissimos a,
// ex adipisci, laudantium soluta facere velit aut error numquam, maxime recusandae blanditiis deserunt atque et pariatur!`

// console.log(str.toUpperCase());

//trim() remove os espaços entre as extremidades de uma string
// let str1 = `      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, molestias. Tempore esse dignissimos a,
// ex adipisci, laudantium soluta facere velit aut error numquam, maxime recusandae blanditiis deserunt atque et pariatur!       `

// console.log(str1.trim());

// let str2 = `          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, molestias. Tempore esse dignissimos a,
// ex adipisci, laudantium soluta facere velit aut error numquam, maxime recusandae blanditiis deserunt atque et pariatur!       `

// console.log(str2);

//---- NaN Quando uma string for passada para Number, parseInt ou parseFloat e não consiga efetuar a conversão será
//retornado Nan (Not as Number).
// isNaN().

// let num = Number("1")

// console.log(isNaN(num));

// if(isNaN(num) == true){
//     alert("ERRO! ! !")
// }

// if(isNaN(num) == false){
//     console.log("Isto é um número")
// } else {
//     console.log("Isto não é um número")
// }

// ----toFixed() a função toFixed analiza um valor flutuante e retorna uma string conforme o parâmetro de casas

let valor = 2.456;
 
console.log(valor.toFixed(2));

//toLocaleString irá retornar uma string com uma representação da moeda definida como no parâmetro currency.
//toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

console.log(valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
