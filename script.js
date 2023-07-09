//pegar personagens
const personagens = document.querySelectorAll('.personagem')
//passar mouse por cima
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        //console.log('passou')
        /*4- testar no celular */
        if(window.innerWidth<450){
            window.scrollTo({top:0, behavior:'smooth'})
        }
        /*1- remove selecionado do anterior*/
        removerSelecaoDoPersonagemSelecionado()

        /*2- adiciona selecionado no que vc passou o mouse por cima */
        //classlist = lista de classes que o personagem tem
        personagem.classList.add('selecionado')

        /*3-Trocar imagem, descrição do personagem etc */
        //img
        alterarImagemPersonagemSelecionado(personagem)
        //nome
        alterarNomePersonagemSelecioando(personagem)
        //descricao
        alterarDescricaoPersonagemSelecionado(personagem)

    })
})
function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem')
    descricaoPersonagem.innerText = personagem.getAttribute('data-description')
}

function alterarNomePersonagemSelecioando(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem')
    nomePersonagem.innerText = personagem.getAttribute('data-name')
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande')
    const idPersonagem = personagem.attributes.id.value
    imagemPersonagemGrande.src = `imagens/card-${idPersonagem}.png`
}

function removerSelecaoDoPersonagemSelecionado() {
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
}

