window.onload = function(){
    const lista = document.querySelector('#lista');
    const btn = document.querySelector('#btn');
    
    let content = ['ônibus', 'Motocicleta', 'patinete'];

    adicionarli = document.createElement('li');
    
    btn.addEventListener('click',function(){
        
        for (v of content){                             
            
            let li = document.createElement('li');
            
            lista.appendChild(li).textContent = v;
        
        }

    })
}