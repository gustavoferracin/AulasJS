// function Pessoa(nome){

//      this.nome = nome;

    
// }
// let NovaPessoa = new Pessoa("José");

// Pessoa.prototype.msg = function(){
//     alert("olá")
// }

// NovaPessoa.msg();

// console.log(NovaPessoa.nome);




let Pessoa2 = {
   'nome': "",
    'idade': '',

}
Pessoa2.__proto__.msg = function(){
    alert("Olá" + Pessoa2.nome)
}

//console.log(Pessoa2)
let P = Pessoa2
P.nome = "Marcelo"
P.msg();
console.log(P);

let Pessoa3 = [
    {
        'nome': "gustavo",
        'idade':18, //0
        'sexo':'M' 
    },
    {
        'nome':'Suelem',
        'idade': 36, //1
        'sexo': 'F'
    },
    {
        'nome':'Marcos',
        'idade': 40, //2
        'sexo': 'M'
    },
]

let NPessoa = Pessoa3

console.log(`Existem ${NPessoa.length} pessoas cadastradas`)
console.log(NPessoa[1].nome)