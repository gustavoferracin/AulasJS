//while

// let loop=0;

// let cores = ["Verde","Vermelho"]
// while( loop < cores.length ){
//     console.log(cores[loop]);
//     loop++;

// }

let teste=0;

do{


    teste = Number(prompt("Digite 0 para sair "))
        switch(teste){
            case 1:
                alert("Cadastrando")
                break;
            case 2:
                alert("Consultando")
                break;
            default:
                alert("Opção Inválida!")
                break;
            case 0:
                alert("Saindo do sistema")
                break;
        }

} while(teste !=0 )