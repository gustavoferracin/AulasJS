function main(qntdElementosArray, pushNome, printNomeIndice){
    console.log(`A quantidade de elementos na array é ${qntdElementosArray}`)
    console.log(`Na posição ${posEscolhida} está o nome ${printNomeIndice}`)
    mainArray.push(colocarNome);
    pushNome = mainArray.length 
    console.log(`Depois que voce inseriu o nome ${colocarNome} a array ficou com ${pushNome} elementos`)
}
mainArray = ["Mário", "Gustavo", "Geovanna", "Maria", "Jonas", "João"];
mainArray2 = ["Mário", "Gustavo", "Geovanna", "Maria", "Jonas", "João"];
mainArray3 = ["Mário", "Gustavo", "Geovanna", "Maria", "Jonas", "João"];
qntd = mainArray.length;
posEscolhida = prompt("Digite um número e veja qual nome está nessa posição!");
posNome = mainArray2.splice(posEscolhida - 1,1);
colocarNome = prompt("Digite um nome para inserir no final da Array!");
mainArray3.push(colocarNome);
inserirNomeNaArray = mainArray3.length;
main(qntd,inserirNomeNaArray,posNome);