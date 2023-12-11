let resp = document.getElementById("saida")

function acao(ordem) {
    resp.innerHTML += `<p class="${ordem}">Você clicou no ${ordem} botão</p>`
}