let preco = document.getElementById("preco")
let porcentagem = document.getElementById("porc")
let vlfinal = document.getElementById("vlfinal")
let soma = document.getElementById("soma")

function calcular() {
    if (Number(preco.value) == "") {
        window.alert("Preencha o campo preco")
        preco.focus()
    } else if (Number(porcentagem.value == "")) {
        window.alert("Preencha o campo porcentagem")
        porcentagem.focus()
    } else {
        let novo = ""
        let valor = (Number(preco.value) * Number(porcentagem.value)) / 100
        
        if (soma.checked) {
            novo = Number(preco.value) + valor
        } else {
            novo = Number(preco.value) - valor
        }
    
        vlfinal.value = novo
    }
}

function limpar () {
    preco.value = ""
    porcentagem.value = ""
    vlfinal.value = ""
}