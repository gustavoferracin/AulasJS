window.onload =function(){
const botao = document.getElementById('btn')

let tabuada = document.querySelector('#txt');

const box = document.querySelector('#box')

num = Number(prompt("Digite um número entre 1 e 10!"));
botao.addEventListener("click",function(){
    tabuada = tabuada.value;
    if (typeof num != 'number'){
        box.innerHTML = "erro" + typeof tabuada;

    } else {
        if( num >=1 && num <= 10){
        box.innerHTML = `${num} X ${tabuada} é igual a ${num * tabuada} `
        } else{ 
            box.innerHTML = `Por favor digite um número entre 1 e 10!`
        }
    }
})



}



