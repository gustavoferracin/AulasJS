function verificarMaiorNum(num1, num2){
    //if
    //operador e
    if (num1 > num2){
        console.log("O número "+ num1 +" é maior do que o número "+ num2 +"!");
    } else {
        console.log("O número "+ num2 +" é maior do que o número "+ num1 +"!");
    }

}

// verificarMaiorNum(200, 7)

// let msg = () => {
//     alert("Estou feliz da vida com JS");
// }

// msg();

function teste(){
    let nome = "Gustavo";
    return nome; // ***return tem que ser o ultimo comando do meu código, comandos abaixo dele não funcionam!!!***
}

//teste();
//console.log(  teste()  );

// let msg = (nome) => {return nome; };

// console.log(msg("Gustavo"))


// (function(produto, preco){
//     alert("o produto é " + produto + " e o preço é $" + preco);
// })("biscoito", 2.35); 

let v1 = prompt("Digite o valor 1!");
let v2 = prompt("Digite o valor 2!");

const soma = (valor1, valor2) => {
    let resultado = Number(valor1) * Number(valor2);
    console.log(resultado);
}

soma(v1,v2);