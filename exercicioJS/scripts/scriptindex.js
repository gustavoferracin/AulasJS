const psw = document.querySelector('#psswrd')
const btn = document.querySelector('#btnentrar')
const user = document.querySelector('#usuario')

btn.addEventListener('click', () => {
    fetchdados();
})
let fetchdados = async function () {
    const usus = './scripts/usuario.json';
    const dadosFetch = await fetch(usus);
    const Json = await dadosFetch.json();
    if (conferir(Json.users)) {
        window.location.href = `./painel.html`

    } else {
        alert('Usuário e/ou senha incorreto(s)')
    }
}
function conferir(Json) {
    for (let usuario of Json) {
        if (usuario.user === user.value && usuario.pws === psw.value) {
            return true
        }
    }
}


