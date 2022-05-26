window.onload = function(){
let first = document.querySelector('#first');
let second = document.querySelector('#second');
let total = document.querySelector('#total');

second.addEventListener('blur',function(){
    total.value = Number(first.value) + Number(second.value);   
})

}