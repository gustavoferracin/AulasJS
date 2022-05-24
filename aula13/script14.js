let Frutas = [
    
    x = {
        fruta:'Maçã',
        preco:2.90,
    },

    {
        fruta:'Abacaxi',
        preco:7.89,
    },

    {
        fruta:'Melância',
        preco:4.49,
    },

    {
        fruta:'Banana',
        preco:1.90,
    },
];

for(let prop of Frutas){        
    for(let f in prop){
        console.log(`${f} : ${prop[f]}`)
    }

}
        
