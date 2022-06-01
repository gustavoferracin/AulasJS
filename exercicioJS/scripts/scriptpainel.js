import { criarForm } from "/exercicioJS/scripts/criarForm.js"; // ta funcionando graças a deus 🙏
import { clientes } from "./clientes.js"; // importado corretamente 👍
import { produtos } from "./produtos.js"; // importado corretamente 💯🙏

const xisinho = document.querySelector('#xisinho');
const mainDiv = document.querySelector('#containerMain');
const btnClientes = document.querySelector('#btnClientes');
const btnProdutos = document.querySelector('#btnProdutos');
const btnPedidos = document.querySelector('#btnPedidos');
let testeArray = 0


btnClientes.addEventListener('click', () => {
    criarForm(mainDiv,'formClientes'); // cria o form ao clicar em clientes
    const xisinho = document.querySelector('#xisinho');
    const codigoCli = document.querySelector('#codigoCli');
    const nomeCli = document.querySelector('#nomeCli');
    const dataCli = document.querySelector('#dataCli');
    const btnTras = document.querySelector('#btnTras');
    const btnFrente = document.querySelector('#btnFrente');
    const btnNovo = document.querySelector('#btnNovo');
    const btnSalvar = document.querySelector('#btnSalvar');
    let cadastro = 0
    codigoCli.value = clientes[cadastro].codCliente;
    nomeCli.value = clientes[cadastro].nomeCliente;
    dataCli.value =clientes[cadastro].dataCadCli
    btnFrente.addEventListener('click', () => {
        
        if(cadastro + 1 < clientes.length){
            cadastro++;
            
            codigoCli.value = clientes[cadastro].codCliente;
            nomeCli.value = clientes[cadastro].nomeCliente;
            dataCli.value =clientes[cadastro].dataCadCli
        } else {
            alert('Não existem mais clientes para exibir!')
        }
    })
    btnTras.addEventListener('click', () => {
        if( cadastro > 0){
            cadastro--;
            codigoCli.value = clientes[cadastro].codCliente;
            nomeCli.value = clientes[cadastro].nomeCliente;
            dataCli.value =clientes[cadastro].dataCadCli;
        } else {
            alert('Não existem mais clientes para exibir!')
        }
    })
    btnNovo.addEventListener('click', () => {
        codigoCli.value = clientes.length + 1
        nomeCli.value = '';
        dataCli.value = new Date().toLocaleDateString();
        btnSalvar.removeAttribute('disabled')
        cadastro = 0;
    })
    function verificarCli(){
        let cadastro = 0;
        while(testeArray != clientes.length){
            testeArray++;
            if(nomeCli.value == clientes[testeArray].nomeCliente || nomeCli.value == ''){
                return false;
            } else {
                return true;
            }
            
        }

    }
    btnSalvar.addEventListener('click', () => {
        let cadastro = 0;
        if(verificarCli() == true){
            clientes.push({
                "codCliente": parseInt(codigoCli.value),
                "nomeCliente": nomeCli.value,
                "dataCadCli": dataCli.value,
            })
            cadastro = 0;
            codigoCli.value = clientes[0].codCliente;
            nomeCli.value = clientes[0].nomeCliente;
            dataCli.value =clientes[0].dataCadCli;
            btnSalvar.setAttribute('disabled', 'disabled')
            } else {
                alert('Não foi possível cadastrar o cliente!');
                let cadastro = 0;
            }
            console.log(clientes)
        })
        xisinho.addEventListener('click', () => {
            mainDiv.innerHTML = ``
    })
})

btnPedidos.addEventListener('click', () => {
criarForm(mainDiv,'formPedidos'); // cria o form ao clicar em pedidos
const xisinho = document.querySelector('#xisinho');
xisinho.addEventListener('click', () => {

    mainDiv.innerHTML = ``

})
})
btnProdutos.addEventListener('click', () => {
criarForm(mainDiv,"formProdutos"); // cria o form dao clicar em produtos

const xisinho = document.querySelector('#xisinho')
xisinho.addEventListener('click', () => {
    mainDiv.innerHTML = ``
})

})

// {
    //     "codCliente"   : 1,
    //     "nomeCliente"  : "Donald Blake",
    //     "dataCadCli" :"12/10/2010",
    //   },
      
    //   {
    //     "codCliente"   : 2,
    //     "nomeCliente"  : "Bruce Wayne",
    //     "dataCadCli" :"01/08/2017",
    //     },
    //     {
    //       "codCliente"   : 3,
    //       "nomeCliente"  : "Diana",
    //       "dataCadCli" :"02/05/2020",
    //     },