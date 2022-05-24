// let i = 2;
// for (let x=0; x<= 10; x++ ){
//     console.log(`o valor da iteração é ${x} o x mais ele mesmo ${i++}`);
// }

// let Pessoas = {
//     nome: 'Steven Rogers',
//     idade: 90,
//     heroi: 'Capitão América',
// }


// for(let a in Pessoas){
//     console.log(Pessoas.nome);
//     console.log(Pessoas.idade);
// }

// arr = ["nome"=>"Gustavo"]
// arr[nome]

// let frutas = ["Melancia", "Mnaga", "Banana", "Uva"];

// for(let nomeFrutas of frutas){
//     console.log(nomeFrutas);
// }

// for (let x= 0; x < frutas.length; x++){
//     console.log(`O nome da fruta é ${frutas[x]}`)
// }



let Herois = [

    {
        nome: "Steven Rogers",
        heroi: "Capitão América",
    },

    {
        nome: "Tony Stark",
        heroi: "homem de ferro",
    }

];

Herois.push({nome: "Diana", heroi: 'Mulher Maravilha'});
Herois.push({nome: "Bruce", heroi: 'Hulk'})

// let marvel = Herois[1].nome;
// console.log(marvel);

for(let marvel of Herois){
    // console.log(marvel)
    for(let m in marvel){
        console.log(`${m} -> ${marvel[m]}`)
    }
}