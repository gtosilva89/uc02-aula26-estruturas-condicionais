const dividendo = Number(prompt("Informe o dividendo"));
const divisor = Number(prompt("Informe o divisor"));

console.log(`Dividendo ${dividendo}`);
console.log(`Divisor ${divisor}`);

let resultado = 0;

// Se o valor do for igual a 0, não faz o calculo
// Senão, pode seguir com o calculo

if (divisor != 0) {
    resultado = dividendo / divisor
}
else {
    resultado = 1
}

const mensagem = `A divisão de ${dividendo} por ${divisor} é igual à ${resultado}`;
const mensagem2 = `Você está realizando a divisão entre um número inteiro e ZERO, portanto a divisão de ${dividendo} por ${divisor} é igual à ${resultado}`;

const elementoMensagem = document.createElement("h1");
const elementoMensagem2 = document.createElement("h1");

// <h1>Mensagem</h1>

elementoMensagem.textContent = mensagem;
elementoMensagem.textContent = mensagem2;
document.body.appendChild(elementoMensagem);
document.body.appendChild(elementoMensagem2);