// de acordo com o comando informado, será exibido uma lampada ligada ou desligada

const comando = prompt("Informe um comando para a lampada (ligar/desligar): ")

const elementoImagem = document.createElement("img");

switch (comando.toLowerCase()) {
    case "ligar":
        elementoImagem.src = "./assets/ligada.jpg"
        break;
    case "desligar":
        elementoImagem.src = "./assets/desligada.jpg"
        break;
    default:
        break;
}

if (elementoImagem.src != null) {
    document.body.appendChild(elementoImagem)
}