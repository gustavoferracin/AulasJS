let str = "Hipotenusa"

function manipularString(){
    console.log(`Esta palavra tem ${str.length} caracteres`);
    console.log(`A palavra ${str} ficou ${str.toUpperCase()}`);
    console.log(`A terceira letra dessa palavra é ${str[2]}`);
    console.log(`${str.toUpperCase()} ficou ${str.replace(str[2],"X")}`);
}

manipularString();