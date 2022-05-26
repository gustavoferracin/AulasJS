//let m = 'Laranja';

//console.log( typeof m ) // -> string

// let m = true;

//console.log(typeof m); // -> boolean

// let m = 1;

//console.log(typeof m); // -> number

// if (typeof m === 'number'){
//     console.log(`O dado informado é um number: ${m}`)
// } else {
//     console.log(`O dado informado não é um number: ${m} : ${typeof m}`)
// }

window.onload= function(){
    //alert("Olá, Mundo!")

    const botao = document.getElementById("btn");
    const txtBox = document.querySelector("#txtBox");
    const box = document.querySelector('#box')

    botao.addEventListener('click', function(){
        box.innerHTML += txtBox.value + '<br>';
    })
}