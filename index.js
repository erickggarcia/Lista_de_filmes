// Cria dois arrays vazios que serão utilizados posteriormente
const itensCadastrados = []
const itensGerados = []
const btnAdicionar = document.getElementById('botaoAdicionar')

const listaUl = document.createElement('ul')
const btnGerarAleatorio = document.createElement('input')
const listaUlGerarAleatorio = document.createElement('ul')


document.body.appendChild(listaUl)
document.body.appendChild(btnGerarAleatorio)
document.body.appendChild(listaUlGerarAleatorio)


btnGerarAleatorio.type = 'button'
btnGerarAleatorio.value = "Gerar"

btnAdicionar.addEventListener('click', adicionar)
btnGerarAleatorio.addEventListener('click', gerarAleatorio)

function gerarLi(valor) {
    const novaLi = document.createElement('li')
    novaLi.innerHTML = valor
    return novaLi
}


function adicionar() {
    const campoAdicionarFilme = document.getElementById('adicionarFilmes')
    if(campoAdicionarFilme.value !== "") {
        const itemListaLi = gerarLi(campoAdicionarFilme.value)
        listaUl.appendChild(itemListaLi)
        itensCadastrados.push(campoAdicionarFilme.value)
        campoAdicionarFilme.value = ""    

        if(itensGerados.length > 0) {
            itensGerados.splice(0, itensGerados.length - 1)
            btnGerarAleatorio.addEventListener('click', gerarAleatorio)
            while(listaUlGerarAleatorio.lastChild) {
                listaUlGerarAleatorio.removeChild(listaUlGerarAleatorio.lastChild)
            }
        }
    } 

}

function gerarAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * itensCadastrados.length)
    const itemSelecionado = itensCadastrados[numeroAleatorio]

    if(itensGerados.includes(itemSelecionado)) {
        return gerarAleatorio()
    }

    const itemListaLiGerarAleatorio = gerarLi(itemSelecionado)
    itensGerados.push(itemSelecionado)
    listaUlGerarAleatorio.appendChild(itemListaLiGerarAleatorio)

    if(itensCadastrados.length === itensGerados.length) {
        btnGerarAleatorio.removeEventListener('click', gerarAleatorio)
    }
}