window.onload = function(){
    //calcular
    function calcular(idProduto, Resultado){
        const preco = document.querySelectorAll(`#${idProduto} > li`);
        const valorResultado = document.querySelector(`#${Resultado} `)
        let totalzinho=0;
        for (let i of preco){
            totalzinho += Number(i.dataset.preco)
            console.log(i.dataset.preco)
        }
        valorResultado.value = totalzinho;

    }
    
    function removerProdutos(id){
        const lista = document.querySelectorAll(`#${id} > li`);

        for (let produto of lista){
            produto.addEventListener('click',function(){
                produto.remove();
                calcular('produtos','somaTotal')
            })
        }

    }

    removerProdutos('produtos');
    calcular('produtos','somaTotal')
    


}

