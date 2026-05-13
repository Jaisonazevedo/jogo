const perguntas = [
    {
        pergunta: "Qual é o nome da cidade estudada no jogo?",
        alternativas: ["Blumenau", "Brusque", "Joinville", "Florianópolis"],
        correta: "Brusque"
    },
    {
        pergunta: "Brusque fica em qual estado?",
        alternativas: ["Paraná", "Santa Catarina", "São Paulo", "Bahia"],
        correta: "Santa Catarina"
    },
    {
        pergunta: "Qual rio passa pela cidade de Brusque?",
        alternativas: ["Rio Amazonas", "Rio Itajaí-Mirim", "Rio Tietê", "Rio São Francisco"],
        correta: "Rio Itajaí-Mirim"
    },
    {
        pergunta: "Em Brusque existem muitas lojas de:",
        alternativas: ["Roupas", "Aviões", "Navios", "Robôs"],
        correta: "Roupas"
    },
    {
        pergunta: "Qual clima é comum em Brusque?",
        alternativas: ["Muito frio o ano inteiro", "Tropical e úmido", "Neve todos os dias", "Deserto quente"],
        correta: "Tropical e úmido"
    }
];

let indice = 0;
let pontos = 0;

const pergunta = document.getElementById("pergunta");
const alternativas = document.getElementById("alternativas");
const mensagem = document.getElementById("mensagem");
const pontosTexto = document.getElementById("pontos");
const reiniciarBtn = document.getElementById("reiniciar");

function carregarPergunta() {

    mensagem.innerHTML = "";

    const atual = perguntas[indice];

    pergunta.innerHTML = atual.pergunta;

    alternativas.innerHTML = "";

    atual.alternativas.forEach(alternativa => {

        const botao = document.createElement("button");

        botao.innerHTML = alternativa;

        botao.onclick = () => verificarResposta(alternativa);

        alternativas.appendChild(botao);
    });
}

function verificarResposta(resposta) {

    if (resposta === perguntas[indice].correta) {
        pontos++;
        mensagem.innerHTML = "🎉 Muito bem! Você acertou!";
        mensagem.style.color = "green";
    } else {
        mensagem.innerHTML = "❌ Ops! Você errou.";
        mensagem.style.color = "red";
    }

    pontosTexto.innerHTML = pontos;

    indice++;

    setTimeout(() => {

        if (indice < perguntas.length) {
            carregarPergunta();
        } else {
            finalizarJogo();
        }

    }, 1500);
}

function finalizarJogo() {

    pergunta.innerHTML = "🏆 Parabéns! Você terminou o jogo!";

    alternativas.innerHTML = "";

    mensagem.innerHTML = "Você fez " + pontos + " pontos!";

    reiniciarBtn.style.display = "inline-block";
}

function reiniciarJogo() {

    indice = 0;
    pontos = 0;

    pontosTexto.innerHTML = pontos;

    reiniciarBtn.style.display = "none";

    carregarPergunta();
}

carregarPergunta();
