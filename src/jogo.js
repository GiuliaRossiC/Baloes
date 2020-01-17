var timeId = null;

function iniciaJogo() {
    var url = window.location.search;

    var nivel = url.replace("?", "");

    var tempo_de_jogo = null;

    if (nivel == 1) {
        tempo_de_jogo = 10;
    }
    if (nivel == 2) {
        tempo_de_jogo = 23;
    }
    if (nivel == 3) {
        tempo_de_jogo = 40;
    }

    document.getElementById('cronometro').innerHTML = tempo_de_jogo;

    var qtde_baloes;
    if(nivel == 1){
        qtde_baloes = 20;
    }
    if(nivel == 2){
        qtde_baloes = 50;
    }
    if (nivel == 3){
        qtde_baloes = 90;
    }

    criaBaloes(qtde_baloes);

    document.getElementById("baloes_inteiros").innerHTML = qtde_baloes;
    document.getElementById("baloes_estourados").innerHTML = 0;

    contagemTempo(tempo_de_jogo)
}
function  criaBaloes(qtde_baloes) {
    for (var i = 1; i <= qtde_baloes; i++) {
        var balao = document.createElement("img");
        balao.src = "../img/balao_azul_pequeno.png";
        balao.style.margin = '10px';
        balao.id = 'b'+i;
        balao.onclick = function(){ estourarBaloes(this)};

        document.getElementById('cenario').append(balao);
    }
    }

function fimDeJogo() {
        para_jogo();
        alert("Você perdeu");
}

function  contagemTempo(segundo) {

    segundo = segundo - 1;

    if(segundo == -1){
        fimDeJogo(segundo);
        return false;
    }
    timeId = setTimeout("contagemTempo("+segundo+")", 1000);
    document.getElementById('cronometro').innerHTML = segundo;
}

function  estourarBaloes(e) {
    var id_Balao = e.id;

    document.getElementById(id_Balao).src = "../img/balao_azul_pequeno_estourado.png";

    pontuacao(-1);
}

function pontuacao(acao) {

    var baloes_inteiros = document.getElementById("baloes_inteiros").innerHTML;
    var baloes_estourados =  document.getElementById("baloes_estourados").innerHTML;

    baloes_inteiros = parseInt(baloes_inteiros);
    baloes_estourados = parseInt(baloes_estourados)

    baloes_inteiros = baloes_inteiros + acao;
    baloes_estourados = baloes_estourados - acao;

    document.getElementById("baloes_inteiros").innerHTML = baloes_inteiros;
    document.getElementById("baloes_estourados").innerHTML = baloes_estourados;
    situacaoJogo(baloes_inteiros);
}

function  situacaoJogo(baloes_inteiro) {
    if(baloes_inteiro == 0){
        para_jogo();
        alert("Parábens");
    }

}

function para_jogo() {
    clearTimeout(timeId);
}
