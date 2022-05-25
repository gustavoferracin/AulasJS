num = prompt("Insira um número")
function main(numeroIns){
    if (isNaN(numeroIns) == false){
        if (numeroIns >= 1 && numeroIns <= 10){
            for (let c=0; c <=10; c++){
                console.log(`${numeroIns} * ${c} = ${numeroIns * c}`)
            }
        } else {
            alert("Digite um número entre 1 e 10!")
        } 
    } else{
        alert("Erro, insira um número")
    }
}

main(num);