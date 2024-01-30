const botaoPlayPause = document.getElementById("play-pause");
const botaoAvancar = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");

const nomeCapitulo = document.getElementById("capitulo");

const audio = document.getElementById("audio-capitulo");

const totalCapitulos = 10;

let estaTocando = false;
let capituloAtual = 1;

function tocarFaixa() {
    audio.play();
    estaTocando = true;
    botaoPlayPause.classList.remove("bi-play-circle");
    botaoPlayPause.classList.add("bi-pause-circle");
}

function pausarFaixa() {
    audio.pause();
    estaTocando = false;
    botaoPlayPause.classList.remove("bi-pause-circle");
    botaoPlayPause.classList.add("bi-play-circle");
}

function tocarOuPausar() {
    if (estaTocando === false) {
        tocarFaixa();
    } else {
        if (estaTocando === true) {
            pausarFaixa();
        }
    }
}

function proximoCapitulo() {
    if (capituloAtual === totalCapitulos){
        capituloAtual = 1;
    } else {
        capituloAtual++;
    }
    nomeCapitulo.innerText = "Capítulo " + capituloAtual;
    audio.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
}

function capituloAnterior() {
    if (capituloAtual === 1) {
        capituloAtual = totalCapitulos;
    } else {
        capituloAtual--;
    }
    nomeCapitulo.innerText = "Capítulo " + capituloAtual;
    audio.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoAvancar.addEventListener("click", proximoCapitulo);
botaoVoltar.addEventListener("click", capituloAnterior);
audio.addEventListener("ended", proximoCapitulo);