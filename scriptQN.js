function AdicionarNota() {
    const Card = document.createElement('div')
    Card.classList.add("Card")

    const DivCards = document.getElementById("DivNotas")

    let inputTitulo = document.querySelector("#inputTitulo").value
    let inputTexto = document.querySelector("#inputTexto").value
    let infoData = new Date().toLocaleString()

    Card.innerHTML = `
                <div onmouseover="AparecerApagar(this)" onmouseleave="SumirApagar(this)">
                <h3>${inputTitulo}</h3>
                <button class="botaoDeletar" type="submit" onclick="Deletar(this)">Apagar Nota</button>
                <p>${inputTexto}</p>
                <p>${infoData}</p>
                </div>
    `
    DivCards.appendChild(Card)


}

function Deletar(botao) {

    const Card = botao.parentElement.parentElement
    Card.remove()
}

function AparecerApagar(div){

    const botaoApagar = div.querySelector(".botaoDeletar")
    botaoApagar.style.visibility = "visible"
}

function SumirApagar(div){

    const botaoApagar = div.querySelector(".botaoDeletar")
    botaoApagar.style.visibility = "hidden"
}