window.onload = function(){

let produtos = [
{descricao: 'Biscoito Mirabel', preco:2.20},
{descricao: 'Marmelada', preco:3.20},
{descricao: 'Sabonete', preco:4.20}
    ]


const ListaProdutos = document.querySelector('#listaProdutos');
const total = document.querySelector('#total');
(() => {
    let totalzinho =0;
    for( let pro of produtos){
        const filhoLi = document.createElement("li");
        for(listaP in pro){
            if(listaP == 'preco'){
                ListaProdutos.appendChild(filhoLi).setAttribute('data-preco',pro[listaP])
                totalzinho+= pro[listaP];
            } else {
                ListaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`
            }
            

        }
    }
    total.value = totalzinho.toFixed();
})()
















}