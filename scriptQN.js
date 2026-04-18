function AdicionarNota(){
    const Card = document.createElement('div')
    Card.classList.add("Card")
    
    const DivCards = document.getElementById("DivNotas")

    let inputTitulo = document.querySelector("#inputTitulo").value
    let inputTexto = document.querySelector("#inputTexto").value
    let infoData = new Date().toLocaleString()

    Card.innerHTML = `
                <h3>${inputTitulo}</h3> 
                <p>${inputTexto}</p>
                <p>${infoData}</p>
    `
    DivCards.appendChild(Card)


}